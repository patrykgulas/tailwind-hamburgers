const styles = () => {
  return {
    "&.tham": {
      ".tham-inner": {
        "&::before": {
          transition: `top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        },
        "&::after": {
          transition: `bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        },
      },
      "&.tham-active": {
        ".tham-inner": {
          "&::before": {
            top: 0,
            transform: `translate3d(calc(var(--tham-w) * -0.2), calc(var(--tham-w) * -0.25), 0) rotate(-45deg) scale(0.7, 1)`,
            transition: `top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)`,
          },
          "&::after": {
            bottom: 0,
            transform: `translate3d(calc(var(--tham-w) * -0.2), calc(var(--tham-w) * 0.25), 0) rotate(45deg) scale(0.7, 1)`,
            transition: `bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)`,
          },
        },
      },
    },
  };
};

module.exports = styles;
