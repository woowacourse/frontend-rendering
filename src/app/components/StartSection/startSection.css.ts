import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',

  padding: '50px 0px 160px',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '60px 0px 120px',
    },
  },
});

export const description = style({
  fontWeight: '500',
  fontSize: '3.2rem',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.4rem',
    },
  },
});
