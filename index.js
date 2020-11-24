module.exports = function () {
  return function ({ addComponents }) {
    const sizes = {
      sm: {
        hamburgerWidth: 20,
        spacing: 3,
        barHeight: 2,
      },
      md: {
        hamburgerWidth: 30,
        spacing: 4,
        barHeight: 3,
      },
      lg: {
        hamburgerWidth: 40,
        spacing: 6,
        barHeight: 4,
      },
    }
    const barRadius = 4
    const color = '#000'
    const baseTransition = {
      transitionTimingFunction: 'ease',
      transitionDuration: '15ms',
      transitionProperty: 'transform',
    }
    const part = {
      position: 'absolute',
      display: 'block',
      borderRadius: barRadius,
    }
    const hamburgers = {
      '.tham': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transitionTimingFunction: 'linear',
        transitionDuration: '.15s',
        transitionProperty: 'opacity',
        '&:hover': {
          opacity: 0.7,
        },
      },
      '.tham--squeeze': {
        '.tham-inner': {
          transitionTimingFunction: 'cubic-bezier(.55,.055,.675,.19)',
          transitionDuration: '75ms',
          '&::before': {
            transition: 'top 75ms ease .12s,opacity 75ms ease',
          },
          '&::after': {
            transition:
              'bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19)',
          },
        },
      },
      '.tham--sm': {
        width: sizes.sm.hamburgerWidth,
        height: sizes.sm.barHeight * 3 + sizes.sm.spacing * 2,
        '.tham-box': {
          width: sizes.sm.hamburgerWidth,
          height: sizes.sm.barHeight * 3 + sizes.sm.spacing * 2,
        },
        '.tham-inner': {
          marginTop: sizes.sm.barHeight / -2,
          width: sizes.sm.hamburgerWidth,
          height: sizes.sm.barHeight,
          '&::before': {
            width: sizes.sm.hamburgerWidth,
            height: sizes.sm.barHeight,
            top: (sizes.sm.spacing + sizes.sm.barHeight) * -1,
          },
          '&::after': {
            width: sizes.sm.hamburgerWidth,
            height: sizes.sm.barHeight,
            bottom: (sizes.sm.spacing + sizes.sm.barHeight) * -1,
          },
        },
      },
      '.tham--md': {
        width: sizes.md.hamburgerWidth,
        height: sizes.md.barHeight * 3 + sizes.md.spacing * 2,
        '.tham-box': {
          width: sizes.md.hamburgerWidth,
          height: sizes.md.barHeight * 3 + sizes.md.spacing * 2,
        },
        '.tham-inner': {
          marginTop: sizes.md.barHeight / -2,
          width: sizes.md.hamburgerWidth,
          height: sizes.md.barHeight,
          '&::before': {
            width: sizes.md.hamburgerWidth,
            height: sizes.md.barHeight,
            top: (sizes.md.spacing + sizes.md.barHeight) * -1,
          },
          '&::after': {
            width: sizes.md.hamburgerWidth,
            height: sizes.md.barHeight,
            bottom: (sizes.md.spacing + sizes.md.barHeight) * -1,
          },
        },
      },
      '.tham--lg': {
        width: sizes.lg.hamburgerWidth,
        height: sizes.lg.barHeight * 3 + sizes.lg.spacing * 2,
        '.tham-box': {
          width: sizes.lg.hamburgerWidth,
          height: sizes.lg.barHeight * 3 + sizes.lg.spacing * 2,
        },
        '.tham-inner': {
          marginTop: sizes.lg.barHeight / -2,
          width: sizes.lg.hamburgerWidth,
          height: sizes.lg.barHeight,
          '&::before': {
            width: sizes.lg.hamburgerWidth,
            height: sizes.lg.barHeight,
            top: (sizes.lg.spacing + sizes.lg.barHeight) * -1,
          },
          '&::after': {
            width: sizes.lg.hamburgerWidth,
            height: sizes.lg.barHeight,
            bottom: (sizes.lg.spacing + sizes.lg.barHeight) * -1,
          },
        },
      },
      '.tham-active': {
        '&.tham--squeeze': {
          '.tham-inner': {
            transitionDelay: '.12s',
            transitionTimingFunction: 'cubic-bezier(.215,.61,.355,1)',
            transform: 'rotate(45deg)',
            '&::before': {
              top: 0,
              transition: 'top 75ms ease,opacity 75ms ease .12s',
              opacity: 0,
            },
            '&::after': {
              bottom: 0,
              transition:
                'bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s',
              transform: 'rotate(-90deg)',
            },
          },
        },
      },
      '.tham-box': {
        position: 'relative',
        display: 'inline-block',
      },
      '.tham-inner': {
        top: '50%',
        display: 'block',
        backgroundColor: color,
        ...part,
        ...baseTransition,
        '&::before': {
          content: '""',
          backgroundColor: 'inherit',
          ...part,
          ...baseTransition,
        },
        '&::after': {
          content: '""',
          backgroundColor: 'inherit',
          ...part,
          ...baseTransition,
        },
      },
    }

    addComponents(hamburgers)
  }
}
