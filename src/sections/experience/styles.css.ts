import { SectionContainer } from "@styles/app.css";
import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { themeVars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ExperienceSectionContainer = style([
  SectionContainer,
  {
    maxWidth: "65rem",
    margin: "auto",
  },
]);

export const ExperienceGraph = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  padding: "2em 0",
  flexDirection: "column",
  gap: "4em",
  "::before": {
    content: "",
    height: "100%",
    backgroundColor: themeVars.experienceSection.line.background,
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    border: "2px solid rgba(0, 0, 0, 0.05)",
    boxSizing: "border-box",
  },
  "@media": {
    [mediaBreakpoints.tablet]: {
      "::before": {
        left: 22
      }
    },
  },
});
