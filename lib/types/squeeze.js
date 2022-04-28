const typeSelector = ".tham-e-squeeze";

const styles = () => ({
  [`.tham${typeSelector}`]: {
    ".tham-inner": {
      transitionTimingFunction: "cubic-bezier(.55,.055,.675,.19)",
      transitionDuration: "75ms",
      "&::before": {
        transition: "top 75ms ease .12s,opacity 75ms ease",
      },
      "&::after": {
        transition:
          "bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19)",
      },
    },
    "&.tham-active": {
      ".tham-inner": {
        transitionDelay: ".12s",
        transitionTimingFunction: "cubic-bezier(.215,.61,.355,1)",
        transform: "rotate(45deg)",
        "&::before": {
          top: 0,
          transition: "top 75ms ease,opacity 75ms ease .12s",
          opacity: 0,
        },
        "&::after": {
          bottom: 0,
          transition:
            "bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s",
          transform: "rotate(-90deg)",
        },
      },
    },
  },
});

module.exports = styles;
