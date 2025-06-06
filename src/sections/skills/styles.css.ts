import { SectionContainer } from "@styles/app.css";
import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { themeVars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SkillSectionContainer = style([
  SectionContainer,
  {
    maxWidth: "45rem",
    margin: "auto",
  },
]);

export const SkillsList = style({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 10,
  justifyContent: "center",
});

export const SkillItem = style({
  backgroundColor: themeVars.skillsSection.item.background,
  border: themeVars.skillsSection.item.border,
  borderRadius: "8px",
  padding: "10px 15px",
  color: themeVars.skillsSection.item.text,
  userSelect: "none",
  transition: "ease-out .2s",
  "@media": {
    [mediaBreakpoints.mobile]: {
      padding: "8px 12px",
      fontSize: 12
    },
  },
});

export const SkillStack = style({
  textAlign: "left",
  display: "flex",
  gap: 5,
  flexDirection: "column",
  alignItems: "center",
});

export const SkillStackTitle = style({
  textAlign: "center",
  width: "100%",
});

export const Skills = style({
  display: "flex",
  flexDirection: "column",
  gap: 30,
});
