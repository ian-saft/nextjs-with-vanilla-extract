import { globalStyle } from '@vanilla-extract/css';

import { breakpoints } from './theme/breakpoints';
import { theme } from './theme/theme.css';

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  border: 'none',
});

globalStyle('*::selection', {
  backgroundColor: theme.colors.primary,
});

globalStyle('*:focus', {
  outline: 0,
});

globalStyle('html', {
  fontSize: '54.69%',

  '@media': {
    [`screen and ${breakpoints.md}`]: {
      fontSize: '58.59%',
    },
    [`screen and ${breakpoints.lg}`]: {
      fontSize: '62.5%',
    },
  },
});

globalStyle('body', {
  width: '100%',
  height: '100vh',
  fontFamily: theme.fonts.body,
  WebkitFontSmoothing: 'antialiased',
  backgroundColor: theme.colors.body,
});

globalStyle(
  'input, textarea, button, select, p, a, span, h1, h2, h3, h4, h5, h6',
  {
    fontFamily: theme.fonts.body,
    color: theme.colors.foreground,
  },
);
