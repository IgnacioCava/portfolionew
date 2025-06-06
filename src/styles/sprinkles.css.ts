import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {},
});

// const colorProperties = defineProperties({
//   conditions: {
//     lightMode: {},
//     darkMode: { "@media": "(prefers-color-scheme: dark)" },
//   },
//   defaultCondition: "lightMode",
//   properties: {},
// });

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
