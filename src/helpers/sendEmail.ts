import { validateForm } from "@lib/utils";
import axios, { AxiosError } from "axios";
import type { FormEvent } from "react";

const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    const formData = new FormData(event.currentTarget);
    const senderEmail = formData.get("email");
    const text = formData.get("message");

    validateForm(
      { email: senderEmail?.toString() || "", emailMaxLength: 500 },
      { message: text?.toString() || "", messageMaxLength: 5000 }
    );

    const emailData = {
      from: "Contact Form <onboarding@resend.dev>",
      to: "cavaignacio11@gmail.com",
      subject: "Message from contact form",
      text,
      senderEmail,
    };

    const response = await axios.post("/api/send-email", emailData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
    else return error;
  }
};

export default sendEmail;
