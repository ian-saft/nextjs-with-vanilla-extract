import { createGlobalTheme } from '@vanilla-extract/css';

import { colors } from './colors';

export const theme = createGlobalTheme(':root', {
  colors: {
    body: colors.gray[950],
    background: colors.gray[950],
    foreground: colors.gray[50],

    primary: colors.green[500],
    secondary: colors.gray[500],
  },
  fonts: {
    body: 'var(--nunito-font), sans-serif',
  },
});
