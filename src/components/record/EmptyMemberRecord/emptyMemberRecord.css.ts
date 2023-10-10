import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',

  paddingTop: '40px',

  '@media': {
    'screen and (max-width: 768px)': {
      gap: '20px',

      paddingTop: '20px',
    },
  },
});

export const description = style({
  fontSize: '2rem',
  fontWeight: '300',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.6remrem',
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  gap: '20px',
});
