import { style } from "@vanilla-extract/css";
import { SectionContainer } from "../../styles/app.css";

export const AboutSectionContainer = style([
  SectionContainer,
  {
    maxWidth: "45rem",
    margin: "auto",
  },
]);

export const AboutNormalText = style({
  lineHeight: 1.8,
  fontSize: 18,
});
