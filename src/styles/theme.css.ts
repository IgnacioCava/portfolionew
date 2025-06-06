import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const globalThemeVars = createGlobalTheme(":root", {
  color: {
    "gray-50": "oklch(98.5% 0.002 247.839)",
    "gray-100": "oklch(0.967 0.003 264.542)",
    "gray-200": "oklch(0.928 0.006 264.531)",
    "gray-700": "oklch(0.373 0.034 259.733)",
    "gray-800": "oklch(0.278 0.033 256.848)",
    "gray-900": "oklch(21% 0.034 264.665)",
    "gray-950": "oklch(13% 0.028 261.692)",
  },
});

export const themeVars = createThemeContract({
  color: {
    background: "",
    text: "",
  },
  projectSection: {
    card: {
      background: "",
      hover: "",
      description: "",
    },
  },
  skillsSection: {
    item: {
      background: "",
      border: "",
      text: "",
    },
  },
  experienceSection: {
    line: {
      background: "",
    },
    item: {
      card: {
        background: "",
        description: "",
      },
      icon: {
        background: "",
        border: "",
        fill: "",
      },
    },
  },
  contactSection: {
    description: "",
    linkBackground: "",
    formBackground: "",
    formText: "",
    placeholderColor: "",
  },
});

export const lightTheme = createTheme(themeVars, {
  color: {
    background: globalThemeVars.color["gray-50"],
    text: globalThemeVars.color["gray-950"],
  },
  projectSection: {
    card: {
      background: globalThemeVars.color["gray-100"],
      hover: globalThemeVars.color["gray-200"],
      description: globalThemeVars.color["gray-700"],
    },
  },
  skillsSection: {
    item: {
      background: "white",
      border: "1px solid oklch(0 0 0 / .1)",
      text: "oklch(0.278 0.033 256.848)",
    },
  },
  experienceSection: {
    line: {
      background: "#e5e7eb",
    },
    item: {
      card: {
        background: "oklch(0.97 0 0)",
        description: globalThemeVars.color["gray-700"],
      },
      icon: {
        background: "white",
        border: "",
        fill: globalThemeVars.color["gray-800"],
      },
    },
  },
  contactSection: {
    description: globalThemeVars.color["gray-700"],
    linkBackground: globalThemeVars.color["gray-50"],
    formBackground: "#fdffff",
    formText: globalThemeVars.color["gray-950"],
    placeholderColor: "oklch(0 0 0 / .5)",
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    background: globalThemeVars.color["gray-900"],
    text: globalThemeVars.color["gray-50"],
  },
  projectSection: {
    card: {
      background: "oklch(1 0 0 / .1)",
      hover: "oklch(1 0 0 / .15)",
      description: "oklch(1 0 0 / .7)",
    },
  },
  skillsSection: {
    item: {
      background: "oklch(1 0 0 / .1)",
      border: "1px solid oklch(0 0 0 / .1)",
      text: "oklch(1 0 0 / .8)",
    },
  },
  experienceSection: {
    line: {
      background: "oklch(1 0 0 / .2)",
    },
    item: {
      card: {
        background: "oklch(1 0 0 / .05)",
        description: "rgb(255 255 255 / 0.75)",
      },
      icon: {
        background: globalThemeVars.color["gray-700"],
        border: "",
        fill: "rgb(255 255 255 / 0.75)",
      },
    },
  },
  contactSection: {
    description: "oklch(1 0 0 / .8)",
    linkBackground: globalThemeVars.color["gray-900"],
    formBackground: "oklch(0.31 0.03 259.14 / 0.5)",
    formText: globalThemeVars.color["gray-50"],
    placeholderColor: "oklch(1 0 0 /.75)",
  },
});
