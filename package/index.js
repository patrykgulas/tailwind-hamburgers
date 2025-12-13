const plugin = require("tailwindcss/plugin");
const baseStyles = require("./base");
const types = require("./types");
const sizes = require("./sizes");

module.exports = plugin(function ({ addComponents, matchComponents }) {
  addComponents(baseStyles());

  matchComponents(
    {
      "tham-e": (value) => {
        if (!types[value]) return null;
        return types[value](value); // The types functions typically wrap styles in the selector, but we need to verify how they return data.
      },
    },
    {
      values: Object.keys(types).reduce((acc, key) => {
        return { ...acc, [key]: key }
      }, {})
    }
  );

  matchComponents(
    {
      "tham-w": (value) => {
        const sizeConfig = sizes[value];
        if (!sizeConfig) return null;

        return {
          "--tham-w": sizeConfig.hamburgerWidth + "px",
          "--tham-h-bar": sizeConfig.barHeight + "px",
          "--tham-spacing": sizeConfig.spacing + "px",
          width: sizeConfig.hamburgerWidth + "px",
          height: (sizeConfig.barHeight * 3 + sizeConfig.spacing * 2) + "px",
          ".tham-box": {
            width: sizeConfig.hamburgerWidth + "px",
            height: (sizeConfig.barHeight * 3 + sizeConfig.spacing * 2) + "px",
          },
          ".tham-inner": {
            marginTop: (sizeConfig.barHeight / -2) + "px",
            width: sizeConfig.hamburgerWidth + "px",
            height: sizeConfig.barHeight + "px",
            "&::before": {
              width: sizeConfig.hamburgerWidth + "px",
              height: sizeConfig.barHeight + "px",
              top: ((sizeConfig.spacing + sizeConfig.barHeight) * -1) + "px",
            },
            "&::after": {
              width: sizeConfig.hamburgerWidth + "px",
              height: sizeConfig.barHeight + "px",
              bottom: ((sizeConfig.spacing + sizeConfig.barHeight) * -1) + "px",
            },
          },
        };
      },
    },
    { values: Object.keys(sizes).reduce((acc, key) => ({ ...acc, [key]: key }), {}) }
  );
});
