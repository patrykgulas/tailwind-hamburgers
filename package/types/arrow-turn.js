const typeSelector = ".tham-e-arrow-turn";

const styles = ({ size, barWidth }) => {
  const sizeSelector = `.tham-w-${size}`;
  const translateX = (barWidth * 0.2).toFixed(2);

  return {
    [`.tham${sizeSelector}${typeSelector}`]: {
      "&.tham-active": {
        ".tham-inner": {
          transform: `rotate(-180deg)`,
          "&::before": {
            transform: `translate3d(${translateX}px, 0, 0) rotate(45deg) scale(0.7, 1)`,
          },
          "&::after": {
            transform: `translate3d(${translateX}px, 0, 0) rotate(-45deg) scale(0.7, 1)`,
          },
        },
      },
    },
  };
};

module.exports = styles;
