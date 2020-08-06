import base from "@theme-ui/preset-base"
import { merge } from "lodash"

export const palette = {
  darker: "#121217",
  dark: "#17171d",
  darkless: "#252429",
  black: "#1f2d3d",
  steel: "#273444",
  slate: "#3c4858",
  muted: "#8492a6",
  smoke: "#e0e6ed",
  snow: "#f9fafc",
  white: "#ffffff",
  pink: "#FF0080",
  red: "#EE0000",
  yellow: "#F5A623",
  cyan: "#79FFE1",
  blue: "#0070F3",
  nav: "#4A4A4A",

  modes: {
    default: {
      background: "#F8F8F8",
      secondaryBackground: "#F8F8F8",
      green: "#00E4BF",
      grey: "#4A4A4A",
      blue: "#388CF7",
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.7)",
      tertiary: "rgba(0, 0, 0, 0.5)",
    },
    // dark: {
    //   background: "#17171d",
    //   secondaryBackground: "#252429",
    //   primary: "#ffffff",
    //   secondary: "rgba(255, 255, 255, 0.7)",
    //   tertiary: "rgba(255, 255, 255, 0.5)",
    // }
  }
}

export default merge(base, {
  fonts: {
    body: "Chivo, sans-serif",
    heading: "Chivo, sans-serif",
    monospace: "Chivo, monospace",
  },
  fontSizes: [14, 18, 24, 28, 36, 48, 64, 72, 96, 128],
  fontWeights: {
    heading: 900,
    body: 400,
  },
  lineHeights: {
    title: 1.5,
    body: 1.625,
  },
  links: {
    nav: {
      color: "text",
      ":hover": {
        color: "text",
      },
      cursor: "pointer",
    },
  },

  shadows: {
    base: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    hover: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  sizes: {
    container: 768,
    xl: 1024,
  },
  radii: {
    base: 6,
    extra: 9,
    circle: 9999,
    project: 40,
    button: 60,
    tile: 20,
  },
  initialColorModeName: "default",
  useColorSchemeMediaQuery: true,
  useLocalStorage: false,
  colors: {
    ...palette,
    text: palette.nav,
    sunken: palette.snow,
    secondary: palette.muted,
    muted: palette.smoke,
    accent: palette.pink,
  },
  variants: {
    sheet: {
      bg: "sunken",
      borderRadius: 8,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.0625)",
      overflow: "hidden",
    },
  },
  styles: {
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "border",
    },
    pre: {
      p: 3,
      bg: "muted",
      borderRadius: 6,
    },
    inlineCode: {
      fontFamily: "monospace",
      px: 1,
      bg: "muted",
      borderRadius: 3,
    },
    blockquote: {
      borderRadius: "base",
      borderLeft: "4px solid",
      borderLeftColor: "muted",
      bg: "sunken",
      ml: 0,
      pl: 3,
      py: 2,
    },
    a: {
      color: "primary",
    },
    ul: {
      "&.contains-task-list": {
        listStyle: "none",
        pl: 3,
      },
    },
    li: {
      mb: 3,
      li: {
        mt: 1,
        mb: 1,
        "&:last-of-type": {
          mb: 3,
        },
      },
      "&.task-list-item": {
        my: 1,
        input: {
          mr: 2,
        },
      },
    },
    navitem: {
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold",
      ":hover,:focus": {
        color: "primary",
      },
    },
    projectPicker: {
      fontSize: [12],
      borderBottom: "3px solid rgba(255, 255, 255, 0.15)",
      pb: 2,
      transition: "0.15s",
      "&:hover": {
        borderBottom: "3px solid rgba(255, 255, 255, 1)",
        cursor: "pointer",
      },
    },
    projectPickerActive: {
      fontSize: [12],
      borderBottom: '3px solid rgba(255, 255, 255, 1)',
      pb: 2,
      transition: '0.15s',
      '&:hover': {
        borderBottom: '3px solid rgba(255, 255, 255, 1)',
        cursor: 'pointer'
      }
    },
    headerText: {
      color: "#000",
      fontWeight: "500",
      fontSize: [28, 30, 32],
      lineHeights: [80],
      paddingTop: [25, 35, 45],
    },
    subHeader: {
      color: "#545353",
      fontSize: [20, 22, 24],
      fontWeight: "500",
    },
    bodyText: {
      color: "#545353",
      fontSize: [16, 18, 20],
      fontWeight: "450",
      lineHeight: 2,
    },
    // collegeLogo: {
    //   height: [50, 75, 100],
    //   width: [50, 75, 100]
    // }
  },
})
