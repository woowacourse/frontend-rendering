import color from '@/styles/color';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const header = style({
  height: calc('100vh').subtract('240px').toString(),

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const landingContents = style({
  width: '40%',

  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  alignSelf: 'center',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',

      justifySelf: 'center',
      textAlign: 'center',
    },
  },
});

export const mainDescription = style({
  fontWeight: 500,
  fontSize: '4.0rem',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const heroImageContainer = style({
  width: '50%',

  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
      width: 0,
    },
  },
});

export const loadMoreContents = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const emphasis = style({
  color: color.blue[500],
});
