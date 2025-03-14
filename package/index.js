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
      width: sizes[size].hamburgerWidth + "px",
      height: (sizes[size].barHeight * 3 + sizes[size].spacing * 2) + "px",
      ".tham-box": {
        width: sizes[size].hamburgerWidth + "px",
        height: (sizes[size].barHeight * 3 + sizes[size].spacing * 2) + "px",
      },
      ".tham-inner": {
        marginTop: (sizes[size].barHeight / -2) + "px",
        width: sizes[size].hamburgerWidth + "px",
        height: sizes[size].barHeight + "px",
        "&::before": {
          width: sizes[size].hamburgerWidth + "px",
          height: sizes[size].barHeight + "px",
          top: (sizes[size].spacing + sizes[size].barHeight) * -1 + "px",
        },
        "&::after": {
          width: sizes[size].hamburgerWidth + "px",
          height: sizes[size].barHeight + "px",
          bottom: (sizes[size].spacing + sizes[size].barHeight) * -1 + "px",
        },
      },
    };
  }

  addComponents(hamburgers);
};
