import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { themeVars } from "@styles/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const dateVar = createVar();

export const ExperienceItemContainer = style({
  position: "relative",
  width: "100%",
  selectors: {
    [`&:nth-child(even)`]: {
      justifyItems: "right",
    },
  },
});

export const ExperienceCard = style({
  backgroundColor: themeVars.experienceSection.item.card.background,
  display: "flex",
  width: "43%",
  flexDirection: "column",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: ".25em",
  padding: "1.3rem 2rem",
  boxSizing: "border-box",
  textAlign: "left",
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    left: "100%",
    top: 30,
    transform: "translateY(-7px)",
    border: "7px solid transparent",
    borderLeft: "0.4rem solid rgb(156, 163, 175)",
  },
  selectors: {
    [`${ExperienceItemContainer}:nth-child(even) &`]: {
      justifyItems: "right",
    },
    [`${ExperienceItemContainer}:nth-child(even) &::before`]: {
      borderRight: "0.4rem solid rgb(156, 163, 175)",
      borderLeft: "inherit",
      right: "100%",
      left: "unset",
    },
  },
  "@media": {
    [mediaBreakpoints.tablet]: {
      width: "calc(100% - 60px)",
      justifySelf: "right",
      "::before": {
        content: "",
        position: "absolute",
        left: -14,
        top: 22,
        transform: "translateY(-7px)",
        border: "7px solid transparent",
        borderRight: "0.4rem solid rgb(156, 163, 175)",
      },
    },
  },
});

export const ExperienceIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: themeVars.experienceSection.item.icon.background,
  width: 60,
  height: 60,
  position: "absolute",
  left: "50%",
  top: 0,
  transform: "translateX(-50%)",
  borderRadius: "50%",
  boxShadow: `0 0 0 4px ${themeVars.experienceSection.item.icon.background}, inset 0 2px 0 rgba(0, 0, 0, .3), 0 3px 0 4px rgba(0, 0, 0, .3);`,
  "::after": {
    position: "absolute",
    content: dateVar,
    left: "100%",
    paddingLeft: 20,
    color: themeVars.experienceSection.item.card.description,
    WebkitTextStroke: "thin",
    whiteSpace: "nowrap",
  },
  selectors: {
    [`${ExperienceItemContainer}:nth-child(even) &::after`]: {
      right: "100%",
      left: "unset",
      paddingRight: 20,
      paddingLeft: "unset",
    },
  },
  "@media": {
    [mediaBreakpoints.tablet]: {
      left: 0,
      transform: "unset",
      width: 44,
      height: 44,
      "::after": {
        display: 'none'
      },
    },
  },
});

export const ExperienceSVG = style({
  width: 28,
  height: 28,
  fill: themeVars.experienceSection.item.icon.fill,
  "@media": {
    [mediaBreakpoints.tablet]: {
      width: 24,
      height: 24,
    },
  },
});

export const ExperienceTitle = style({
  position: "relative",
  fontWeight: "bold",
  "::after": {
    fontWeight: "normal",
    position: "absolute",
    content: dateVar,
    paddingLeft: 10,
    color: 'inherit',
    whiteSpace: "nowrap",
  },
  "@media": {
    [mediaBreakpoints.desktop]: {
      "::after": {
        display: "none",
      },
    },
  },
});

export const ExperienceLocation = style({
  fontSize: "1rem",
});

export const ExperienceDescription = style({
  fontSize: "1rem",
  color: themeVars.experienceSection.item.card.description,
  marginTop: "4px",
  whiteSpace: "pre-line",
  padding: 0,
  marginBottom: 0,
});
