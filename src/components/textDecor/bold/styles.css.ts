import { mediaBreakpoints } from "@styles/mediaBreakpoints";
import { style } from "@vanilla-extract/css";

export const BoldStyle = style({
  fontWeight: "bold",
  whiteSpace: "nowrap",
  "@media": {
    [mediaBreakpoints.tablet]: {
      whiteSpace: 'wrap'
    },
  },
});
