const styles = () => {
  return {
    "&.tham": {
      ".tham-inner": {
        top: "calc(var(--tham-h-bar) / 2)",
        "&::before": {
          top: "calc(var(--tham-h-bar) + var(--tham-spacing))",
          transitionProperty: "transform, opacity",
          transitionTimingFunction: "ease",
          transitionDuration: "0.15s",
        },
        "&::after": {
          top: "calc(var(--tham-h-bar) * 2 + var(--tham-spacing) * 2)",
        },
      },
      "&.tham-active": {
        ".tham-inner": {
          transform: `translate3d(0, calc(var(--tham-spacing) + var(--tham-h-bar)), 0) rotate(45deg)`,
          "&::before": {
            transform: `rotate(-45deg) translate3d(calc(var(--tham-w) / -7), calc(var(--tham-spacing) * -1), 0)`,
            opacity: 0,
          },
          "&::after": {
            transform: `translate3d(0, calc((var(--tham-spacing) + var(--tham-h-bar)) * -2), 0) rotate(-90deg)`,
          },
        },
      },
    },
  };
};

module.exports = styles;
