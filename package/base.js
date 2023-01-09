const sizes = {
  4: {
    hamburgerWidth: 16,
    spacing: 2,
    barHeight: 2,
  },
  6: {
    hamburgerWidth: 24,
    spacing: 3,
    barHeight: 3,
  },
  8: {
    hamburgerWidth: 32,
    spacing: 4,
    barHeight: 4,
  },
  12: {
    hamburgerWidth: 48,
    spacing: 6,
    barHeight: 6,
  },
};

const barRadius = 4;
const color = "#000";
const baseTransition = {
  transitionTimingFunction: "ease",
  transitionDuration: ".15s",
  transitionProperty: "transform",
};
const part = {
  position: "absolute",
  display: "block",
  borderRadius: barRadius,
};

const baseStyles = () => ({
  ".tham": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transitionTimingFunction: "linear",
    transitionDuration: ".15s",
    transitionProperty: "opacity",
    "&:hover": {
      opacity: 0.7,
    },
  },
  ".tham-box": {
    position: "relative",
    display: "inline-block",
  },
  ".tham-inner": {
    top: "50%",
    display: "block",
    backgroundColor: color,
    ...part,
    ...baseTransition,
    "&::before": {
      content: '""',
      backgroundColor: "inherit",
      ...part,
      ...baseTransition,
    },
    "&::after": {
      content: '""',
      backgroundColor: "inherit",
      ...part,
      ...baseTransition,
    },
  },
});

module.exports = baseStyles;
