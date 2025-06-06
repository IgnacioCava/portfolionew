import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const selectedTabOffsetLeft = createVar();
export const selectedTabOffsetTop = createVar();
export const selectedTabOffsetWidth = createVar();
export const selectedTabText = createVar();

export const NavbarContainer = style({
  position: "fixed",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  flexDirection: "row",
  columnGap: 20,
  borderRadius: "50px",
  padding: 10,
  top: 25,
  left: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0px 3px 20px 0px #00000024",
  zIndex: 10,
  userSelect: "none",
  boxSizing: "border-box",
  justifyContent: "center",
  "::before": {
    content: selectedTabText,
    borderRadius: "50px",
    cursor: "pointer",
    backgroundColor: "#ebebeb96",
    position: "absolute",
    transition: "ease-out .2s",
    transitionProperty: "width, left, top",
    padding: "5px 0px",
    color: "transparent",
    display: "flex",
    top: selectedTabOffsetTop,
    left: selectedTabOffsetLeft,
    width: selectedTabOffsetWidth,
    zIndex: -1,
  },
  "@media": {
    [mediaBreakpoints.mobile]: {
      ':before': {
        borderRadius: '8px'
      }
    },
    [mediaBreakpoints.tablet]: {
      flexWrap: "wrap",
      top: 0,
      left: 0,
      transform: "unset",
      borderRadius: 0,
      width: "100%",
      padding: 5,
      columnGap: 0,
    },
    [mediaBreakpoints.desktop]: {},
  },
});

export const NavbarItem = recipe({
  base: {
    padding: "5px 10px",
    color: "grey",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "color .1s",
    whiteSpace: "nowrap",
    ":hover": {
      color: "oklch(0.13 0.028 261.692)",
    },
    "@media": {
      [mediaBreakpoints.mobile]: {
        padding: "5px",
      },
    },
  },
  variants: {
    selected: {
      true: {
        color: "oklch(0.13 0.028 261.692)",
      },
    },
  },
});
