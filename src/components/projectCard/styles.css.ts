import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { themeVars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ProjectCardContainer = style({
  display: "flex",
  padding: "30px 0 0 30px",
  backgroundColor: themeVars.projectSection.card.background,
  border: "1px solid oklch(0 0 0 / .1)",
  borderRadius: 8,
  flexDirection: "row",
  overflow: "hidden",
  textAlign: "left",
  position: "relative",
  ":hover": {
    backgroundColor: themeVars.projectSection.card.hover,
  },
  transition: ".2s",
});

export const ProjectData = style({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  margin: "0 40px 30px 0",
  "@media": {
    [mediaBreakpoints.mobile]: {
      width: "100%",
    },
  },
});

export const ProjectImage = style({
  width: "50%",
  minHeight: '100%',
  objectPosition: 'left',
  borderRadius: "10px 0 0 0",
  objectFit: "cover",
  boxShadow: "-5px 8px 20px 0px oklch(0 0 0 / 0.4)",
  transition: ".2s",
  position: "absolute",
  top: 30,
  left: "60%",
  selectors: {
    [`${ProjectCardContainer}:hover &`]: {
      transform: "rotate(-2deg)",
      scale: "1.05",
    },
  },
  "@media": {
    [mediaBreakpoints.mobile]: {
      display: "none",
    },
  },
});

export const ProjectTitle = style({
  marginBlock: "0px 5px",
});

export const ProjectDescription = style({
  color: themeVars.projectSection.card.description,
  marginBottom: 40,
});

export const ProjectTechList = style({
  display: "flex",
  gap: 5,
  flexWrap: "wrap",
});

export const ProjectTechItem = style({
  backgroundColor: "oklch(0 0 0 / 0.7)",
  padding: "4px 12px",
  color: "white",
  borderRadius: "50px",
  fontSize: ".8rem",
  letterSpacing: " 0.025em",
  boxSizing: "border-box",
  lineHeight: 1.6,
});

export const ProjectLinkContainer = style({
  position: "absolute",
  top: 0,
  right: 0,
  height: '40px',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  zIndex: 1,
  borderRadius: '0 0 0 8px',
  overflow: 'hidden'
});

export const ProjectLink = style({
  background: "oklch(0.28 0.03 277.4)",
  color: 'white',
  padding: 5,
  cursor: 'pointer',
  ':hover': {
    background: 'black'
  }
});
