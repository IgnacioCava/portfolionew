import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";
import { moveX, moveXReverse, moveY, moveYReverse } from "./keyframes.css";
import { mediaBreakpoints } from "./mediaBreakpoints";

export const AppContainer = style({
  position: "relative",
  backgroundColor: themeVars.color.background,
  transition: "background-color ease-out .2s",
  paddingInline: 10,
  "::before": {
    content: "",
    height: "30rem",
    maxWidth: '50%',
    width: "30rem",
    backgroundColor: "#b0b0ff",
    position: "fixed",
    top: 0,
    left: 0,
    filter: "blur(15rem)",
    borderRadius: "50%",
    zIndex: 1,
    animation: `${moveX} ease-in-out, ${moveY} ease-in-out`,
    animationTimeline: "scroll()",
    animationComposition: "accumulate",
  },
  "::after": {
    content: "",
    height: "30rem",
    width: "30rem",
    maxWidth: '50%',
    backgroundColor: "#ff9191",
    position: "fixed",
    bottom: 0,
    right: 0,
    filter: "blur(15rem)",
    borderRadius: "50%",
    zIndex: 1,
    animation: `${moveXReverse} ease-in-out, ${moveYReverse} ease-in-out`,
    animationTimeline: "scroll()",
    animationComposition: "accumulate",
  },
});

export const SectionContainer = style({
  minHeight: "100vh",
  paddingTop: 120,
  boxSizing: "border-box",
  zIndex: 2,
  position: "relative",
  color: themeVars.color.text,
  transition: ".2s ease-out",
});

export const TogglersContainer = style({
  position: "fixed",
  top: 25,
  right: 25,
  zIndex: 3,
  display: "flex",
  gap: 10,
  flexDirection: "column",
  alignItems: "flex-end",
  "@media": {
    [mediaBreakpoints.tablet]: {
      top: 55,
      right: 10,
      flexDirection: "row",
    },
    [mediaBreakpoints.mobile]: {
      top: 90,
      right: 10,
      flexDirection: "row",
    },
    [mediaBreakpoints.mobileS]: {
      bottom: 10,
      right: 10,
      flexDirection: "row",
    },
    
    [mediaBreakpoints.desktop]: {},
  },
});
