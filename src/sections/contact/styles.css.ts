import { SectionContainer } from "@styles/app.css";
import { themeVars } from "@styles/theme.css";
import { createVar, keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const emailCopiedMessage = createVar();

export const ContactSectionContainer = style([
  SectionContainer,
  {
    maxWidth: "45rem",
    margin: "auto",
    marginTop: "0 !important",
    paddingTop: 120,
    scrollMarginTop: 0,
  },
]);

export const ContactDescription = style({
  color: themeVars.contactSection.description,
});

const Popup = keyframes({
  "0%": {
    top: "-50%",
    opacity: 0,
  },
  "15%": {
    top: "-125%",
  },
  "20%": {
    opacity: 1,
  },
  "80%": {
    top: "-125%",
    opacity: 1,
  },
  "85%": {
    opacity: 0,
  },
  "100%": {
    top: "-50%",
    height: 0,
  },
});

export const ContactEmail = recipe({
  base: {
    cursor: "pointer",
    position: "relative",
    color: themeVars.contactSection.description,
    transition: "background-color ease-out .2s",
    "::before": {
      content: emailCopiedMessage,
      whiteSpace: "nowrap",
      opacity: 0,
      color: "oklch(68.5% 0.169 237.323)",
      position: "absolute",
      borderRadius: 5,
      zIndex: -1,
      top: "-50%",
      left: "50%",
      transform: "translateX(-50%)",
      height: 0,
      pointerEvents: "none",
    },
    ":hover": {
      scale: "1.15",
    },
  },
  variants: {
    copied: {
      true: {
        "::before": {
          animation: `${Popup} 3s`,
        },
      },
    },
  },
});

export const ContactForm = style({
  display: "flex",
  flexDirection: "column",
  color: "black",
  gap: 10,
  paddingTop: "20px",
});

export const ContactFormInputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const FormError = recipe({
  base: {
    padding: "0 1rem",
    height: 0,
    backgroundColor: "#f74c4c",
    color: "white",
    borderRadius: " 0 0 .5rem .5rem",
    textAlign: "left",
    zIndex: -1,
    overflow: "hidden",
    transition: ".25s",
  },
  variants: {
    error: {
      true: {
        height: "1.5rem",
        padding: "5px 1rem 5px 1rem",
        opacity: 1,
      },
      false: {
        height: 0,
        opacity: 0,
        padding: "0 1rem",
        marginTop: 0,
      },
    },
  },
});

export const ContactFormInput = recipe({
  base: {
    width: "100%",
    border: "1px solid rgb(0 0 0 / 0.1)",
    backgroundColor: themeVars.contactSection.formBackground,
    borderRadius: ".5rem",
    height: "3.5rem",
    color: themeVars.contactSection.formText,
    fontFamily: "inherit",
    paddingInline: "1rem",
    fontSize: "100%",
    outline: "none",
    boxSizing: "border-box",
    transition: "background-color ease-out .2s",
    "::placeholder": {
      color: themeVars.contactSection.placeholderColor,
    },
  },
  variants: {
    error: {
      true: {
        borderRadius: ".5rem .5rem 0 0",
      },
    },
  },
});

export const ContactFormTextArea = recipe({
  base: {
    width: "100%",
    resize: "vertical",
    border: "1px solid rgb(0 0 0 / 0.1)",
    backgroundColor: themeVars.contactSection.formBackground,
    borderRadius: ".5rem",
    color: themeVars.contactSection.formText,
    fontFamily: "inherit",
    padding: "1rem",
    fontSize: "100%",
    minHeight: "10rem",
    maxHeight: "25rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "background-color ease-out .2s",
    "::placeholder": {
      color: themeVars.contactSection.placeholderColor,
    },
  },
  variants: {
    error: {
      true: {
        borderRadius: ".5rem .5rem 0 0",
      },
    },
  },
});

export const ContactFormSubmit = style({
  padding: "10px 20px",
  borderRadius: ".5rem",
  width: "fit-content",
  cursor: "pointer",
  backgroundColor: "oklch(0.2 0.02 267.68)",
  transition: ".2s",
  alignSelf: "flex-end",
  ":hover": {
    scale: "1.1",
  },
});
