import { style } from '@vanilla-extract/css';

export const buttonContainer = style({
  display: 'flex',
  gap: '10px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});
