import { style } from '@vanilla-extract/css';

import { flexCenterStyle } from '@styles/utils.css';
import { theme } from '@styles/theme/theme.css';

export const headerStyle = style([
  flexCenterStyle,
  {
    width: '100%',
    height: '7.2rem',
    marginBottom: '3.6rem',

    gap: '1.2rem',

    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.secondary,
  },
]);

export const iconStyle = style({
  width: '2.4rem',

  fontSize: '2.4rem',
  color: theme.colors.primary,
});

export const mainStyle = style([
  flexCenterStyle,
  {
    width: '100%',

    flexDirection: 'column',
    gap: '1.2rem',
  },
]);

export const contentStyle = style({
  width: '4.8rem',

  fontSize: '4.8rem',
  color: theme.colors.primary,
});

export const alreadyStyle = style({
  fontSize: '2.4rem',
});

export const captionStyle = style({
  fontSize: '1.8rem',
});

export const strongStyle = style({
  color: theme.colors.primary,
});
