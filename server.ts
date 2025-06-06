import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";
import { validateForm } from "./src/lib/utils";
import rateLimit from "express-rate-limit";

dotenv.config();
const port = process.env.PORT || 5173;

const createServer = async () => {
  const app = express();

  const resend = new Resend(process.env.RESEND_API_KEY);

  const vite = await createViteServer({
    server: { middlewareMode: true },
  });
  // const attachment = fs.readFileSync(path.resolve("./src/assets/pdf/CV Ignacio Cava - En.pdf")).toString('base64');
  // const responseSent = await resend.emails.send({
  //   from: 'Thank you for contacting me! <onboarding@resend.dev>',
  //   to: senderEmail,
  //   subject: 'Message received',
  //   replyTo: to,
  //   html: `
  //     <p>Thank you for contacting me! I'll be in touch as soon as possible.</p>
  //     <p>Here's my CV in case you didn't see it.</p>
  //   `,
  //   attachments: [
  //     {
  //       content: attachment,
  //       filename: 'CV Ignacio Cava - En.pdf'
  //     }
  //   ]
  // });
  const emailLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // max 5 submissions per IP
    message: { error: "RATE_LIMIT_REACHED" },
  });

  const validateFormMiddleWare = (req, res, next) => {
    const { senderEmail, text } = req.body;
    try {
      validateForm(
        { email: senderEmail, emailMaxLength: 500 },
        { message: text, messageMaxLength: 5000 }
      );
      next();
    } catch (error) {
      return res.status(400).json({ error });
    }
  };

  //const sentEmails = new Set();

  app.post(
    "/api/send-email",
    express.json(),
    validateFormMiddleWare,
    emailLimiter,
    async (req, res) => {
      //const ip = req.ip;
      const { from, to, subject, text, senderEmail } = req.body;

      // if (sentEmails.has(ip)) {
      //   res.status(429).json({
      //     message: "ALREADY_SENT",
      //   });
      //   return;
      // }
      try {
        await resend.emails.send({
          from,
          to,
          subject,
          replyTo: senderEmail,
          html: `
            <div>
              <h3>
                New message from contact form
              </h3>
              <p>Sender: ${senderEmail}</p>
              <p>${text}</p>
            </div>
          `,
        });
        res.status(200).json({ message: "MESSAGE_SUCCESS" });
      } catch (error) {
        console.error("Error sending email:", error);
        if (error.error)
          res.status(error.status).json({ message: "UNKNOWN_ERROR", error });
        else res.status(500).json({ message: "UNKNOWN_ERROR", error });
      }
    }
  );

  app.use(vite.middlewares);

  app.use("*all", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.ts");

      const appHtml = await render(url);

      const html = template
        .replace("<!--app-head-->", appHtml.head ?? "")
        .replace("<!--app-html-->", appHtml.html ?? "");

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (error) {
      vite?.ssrFixStacktrace(error);
      console.log(error.stack);
      //res.status(500).end(error.stack);
      next(error);
    }
  });

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
};

createServer();
