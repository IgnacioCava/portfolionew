import {
  ToggleDarkModeContainer,
} from "@components/toggleDarkMode/styles.css";
import { globalThemeVars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const LanguageSelectorContainer = style([
  ToggleDarkModeContainer,
  {
    display: "flex",
    flexDirection: "column",
  },
]);

export const LanguageToggler = recipe({
  base: {
    height: "100%",
    width: "calc(50%)",
    borderRadius: "50px",
    backgroundColor: globalThemeVars.color["gray-50"],
    transition: ".2s ease-out",
    marginLeft: "0%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `
        0 0px 20px 4px oklab(0 0 0 / 0.2)
    `,
  },
  variants: {
    en: {
      true: {
        marginLeft: "50%",
      },
      false: {
        marginLeft: "0%",
      },
    },
  },
});
