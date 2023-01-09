const typeSelector = ".tham-e-spin";

const styles = ({ size }) => {
  const sizeSelector = `.tham-w-${size}`;

  return {
    [`.tham${sizeSelector}${typeSelector}`]: {
      ".tham-inner": {
        transitionDuration: "0.22s",
        transitionTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "&::before": {
          transition: "top 0.1s 0.25s ease-in, opacity 0.1s ease-in",
        },
        "&::after": {
          transition:
            "bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        },
      },
      "&.tham-active": {
        ".tham-inner": {
          transform: "rotate(225deg)",
          transitionDelay: "0.12s",
          transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "&::before": {
            top: 0,
            opacity: 0,
            transition: "top 0.1s ease-out, opacity 0.1s 0.12s ease-out",
          },
          "&::after": {
            bottom: 0,
            transform: "rotate(-90deg)",
            transition:
              "bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
        },
      },
    },
  };
};

module.exports = styles;
