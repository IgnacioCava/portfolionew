import { SectionContainer } from "@styles/app.css";
import { style } from "@vanilla-extract/css";

export const ProjectSectionContainer = style([
  SectionContainer,
  {
    maxWidth: "45rem",
    margin: "auto",
  },
]);

export const ProjectList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30
})
