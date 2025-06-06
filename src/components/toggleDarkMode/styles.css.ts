import { themeVars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const ToggleDarkModeContainer = style({
  height: 40,
  width: 70,
  backgroundColor: "white",
  borderRadius: "50px",
  padding: 5,
  boxSizing: "border-box",
  display: "flex",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: `
    inset 0 8px 5px oklab(0 0 0 / 0.1), 
    inset 0 8px 8px oklab(0 0 0 / 0.1), 
    inset 0 -4px 4px oklab(0 0 0 / 0.1)
  `,
});

export const Toggler = recipe({
  base: {
    height: "100%",
    width: "calc(50%)",
    borderRadius: "50px",
    backgroundColor: themeVars.color.background,
    transition: ".2s ease-out",
    marginLeft: "0%",
    padding: 5,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `
        0 0px 20px 4px oklab(0 0 0 / 0.2)
    `,
  },
  variants: {
    darkMode: {
      true: {
        marginLeft: "50%",
      },
      false: {},
      default: {},
    },
  },
});
