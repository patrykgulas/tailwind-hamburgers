const typeSelector = ".tham-e-slider";

const styles = ({ size, barHeight, barWidth, spacing }) => {
  const yOffset = spacing + barHeight;
  const sizeSelector = `.tham-w-${size}`;

  return {
    [`.tham${sizeSelector}${typeSelector}`]: {
      ".tham-inner": {
        top: barHeight / 2,
        "&::before": {
          top: barHeight + spacing,
          transitionProperty: "transform, opacity",
          transitionTimingFunction: "ease",
          transitionDuration: "0.15s",
        },
        "&::after": {
          top: barHeight * 2 + spacing * 2,
        },
      },
      "&.tham-active": {
        ".tham-inner": {
          transform: `translate3d(0, ${yOffset}px, 0) rotate(45deg)`,
          "&::before": {
            transform: `rotate(-45deg) translate3d(${barWidth / -7}px, ${
              spacing * -1
            }px, 0)`,
            opacity: 0,
          },
          "&::after": {
            transform: `translate3d(0, ${yOffset * -2}px, 0) rotate(-90deg)`,
          },
        },
      },
    },
  };
};

module.exports = styles;
