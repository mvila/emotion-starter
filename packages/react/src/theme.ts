import merge from 'lodash/merge';

export type ColorName = 'neutral' | 'primary' | 'secondary' | 'positive' | 'negative';

export const baseTheme = {
  colors: {
    // Source: https://material.io/resources/color

    text: {
      normal: '#263238', // Blue Grey 900,
      muted: '#546e7a', // Blue Grey 600
      moreMuted: '#78909c' // Blue Grey 400
    },

    background: {
      normal: '#eceff1', // Blue Grey 50
      highlighted: '#cfd8dc' // Blue Grey 100
    },

    border: {
      normal: '#cfd8dc' // Blue Grey 100
    },

    neutral: {
      normal: '#607d8b', // Blue Grey 500
      highlighted: '#34515e', // Blue Grey 500 Dark
      muted: '#8eacbb', // Blue Grey 500 Light
      textOnNormal: '#ffffff'
    },

    primary: {
      normal: '#03a9f4', // Light Blue 500
      highlighted: '#007ac1', // Light Blue 500 Dark
      muted: '#67daff', // Light Blue 500 Light
      textOnNormal: '#ffffff'
    },

    secondary: {
      normal: '#ff4081', // Pink A200
      highlighted: '#c60055', // Pink A200 Dark
      muted: '#ff79b0', // Pink A200 Light
      textOnNormal: '#ffffff'
    },

    positive: {
      normal: '#2e7d32', // Green 800
      highlighted: '#005005', // Green 800 Dark
      muted: '#60ad5e', // Green 800 Light
      textOnNormal: '#ffffff'
    },

    negative: {
      normal: '#d50000', // Red A700
      highlighted: '#9b0000', // Red A700 Dark
      muted: '#ff5131', // Red A700 Light
      textOnNormal: '#ffffff'
    }
  },

  fontFamilies: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
  },

  fontSizes: {
    normal: '16px',
    small: '85%',
    large: '120%'
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  lineHeights: {
    normal: 1.6,
    small: 1.3,
    large: 2
  },

  radii: {
    normal: '.25rem',
    small: '.2rem',
    large: '.3rem'
  },

  shadows: {
    normal: '1px 1px 3px 0 #999'
  }
};

export const darkTheme = {
  colors: {
    text: {
      normal: '#eceff1', // Blue Grey 50
      muted: '#b0bec5', // Blue Grey 200
      moreMuted: '#90a4ae' // Blue Grey 300
    },

    background: {
      normal: '#263238', // Blue Grey 900
      highlighted: '#455a64' // Blue Grey 700
    },

    border: {
      normal: '#607d8b' // Blue Grey 500
    },

    neutral: {
      normal: '#b0bec5', // Blue Grey 200
      highlighted: '#e2f1f8', // Blue Grey 200 Light
      muted: '#808e95', // Blue Grey 200 Dark
      textOnNormal: '#000000'
    },

    primary: {
      highlighted: baseTheme.colors.primary.muted,
      muted: baseTheme.colors.primary.highlighted
    },

    secondary: {
      highlighted: baseTheme.colors.secondary.muted,
      muted: baseTheme.colors.secondary.highlighted
    },

    positive: {
      normal: '#00e676', // Green A400
      highlighted: '#66ffa6', // Green A400 Light
      muted: '#00b248', // Green A400 Dark
      textOnNormal: '#000000'
    },

    negative: {
      normal: '#ff5252', // Red A200
      highlighted: '#ff867f', // Red A200 Light
      muted: '#c50e29', // Red A200 Dark
      textOnNormal: '#ffffff'
    }
  }
};

export function getTheme({
  mode = 'light',
  theme: customTheme
}: {
  mode?: 'light' | 'dark';
  theme?: any;
}) {
  let theme = baseTheme;

  if (mode === 'dark') {
    theme = merge(baseTheme, darkTheme);
  }

  if (customTheme !== undefined) {
    theme = merge(baseTheme, customTheme);
  }

  return theme;
}

export type BaseTheme = typeof baseTheme;

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
