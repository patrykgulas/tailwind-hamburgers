const baseStyles = require("./base");
const types = require("./types");
const sizes = require("./sizes");

module.exports = function ({ addComponents }) {
  let hamburgers = {
    ...baseStyles(),
  };

  for (const size in sizes) {
    for (const type in types) {
      const stylesFn = types[type];
      const sizeConfig = sizes[size];

      hamburgers = {
        ...hamburgers,
        ...stylesFn({
          size,
          barHeight: sizeConfig.barHeight,
          barWidth: sizeConfig.hamburgerWidth,
          spacing: sizeConfig.spacing,
        }),
      };
    }
  }

  for (const size in sizes) {
    hamburgers[`.tham-w-${size}`] = {
      width: sizes[size].hamburgerWidth,
      height: sizes[size].barHeight * 3 + sizes[size].spacing * 2,
      ".tham-box": {
        width: sizes[size].hamburgerWidth,
        height: sizes[size].barHeight * 3 + sizes[size].spacing * 2,
      },
      ".tham-inner": {
        marginTop: sizes[size].barHeight / -2,
        width: sizes[size].hamburgerWidth,
        height: sizes[size].barHeight,
        "&::before": {
          width: sizes[size].hamburgerWidth,
          height: sizes[size].barHeight,
          top: (sizes[size].spacing + sizes[size].barHeight) * -1,
        },
        "&::after": {
          width: sizes[size].hamburgerWidth,
          height: sizes[size].barHeight,
          bottom: (sizes[size].spacing + sizes[size].barHeight) * -1,
        },
      },
    };
  }

  addComponents(hamburgers);
};
