import { style } from "@vanilla-extract/css";
import { SectionContainer } from "../../styles/app.css";
import { globalThemeVars } from "@styles/theme.css";
import { mediaBreakpoints } from "@styles/mediaBreakpoints";

export const HomeSectionContainer = style([SectionContainer, {}]);

export const MyImage = style({
  height: 200,
  width: 200,
  objectFit: "cover",
  borderRadius: "50%",
  objectPosition: "60% 33%",
  border: "5px solid white",
  userSelect: "none",
  "@media": {
    [mediaBreakpoints.tablet]: {
      height: 150,
      width: 150,
    },
  },
});

export const ContactOptions = style({
  display: "flex",
  justifyContent: "center",
  gap: 8,
  "@media": {
    [mediaBreakpoints.mobile]: {
      flexWrap: "wrap",
    },
  },
});

const MediaButton = style({
  display: "flex",
  alignItems: "center",
  lineHeight: 1.2,
  borderRadius: "50px",
  overflow: "hidden",
  transition: "scale ease-in-out .15s",
  padding: "15px",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  gap: 10,
  ":hover": {
    scale: "1.1",
  },
});

export const ContactButton = style([
  MediaButton,
  {
    backgroundColor: globalThemeVars.color["gray-950"],
    border: "1px solid transparent",
    paddingInline: "20px",
    color: "white",
  },
]);

export const CVButton = style([
  MediaButton,
  {
    backgroundColor: "white",
    color: "black",
    border: "1px solid oklab(0 0 0 / 0.1)",
    paddingInline: "20px",
    "@media": {
      [mediaBreakpoints.mobile]: {
        order: 3,
      },
    },
  },
]);

export const SocialMediaButton = style([
  MediaButton,
  {
    borderRadius: "50px",
    display: "flex",
    backgroundColor: "white",
    color: "black",
    border: "1px solid oklab(0 0 0 / 0.1)",
    "@media": {
      [mediaBreakpoints.mobile]: {
        selectors: {
          [`&:nth-child(3)`]: { order: 2 },
          [`&:nth-child(4)`]: { order: 4 },
        },
      },
    },
  },
]);

export const SectionTitle = style({
  fontWeight: "initial",
  whiteSpace: "pre-line",
  color: "inherit",
  lineHeight: 1.25,
  fontSize: "2.5em",
  paddingInline: 10,
  "@media": {
    [mediaBreakpoints.tablet]: { fontSize: "2em" },
    [mediaBreakpoints.mobile]: { fontSize: "1.5em" },
  },
});
