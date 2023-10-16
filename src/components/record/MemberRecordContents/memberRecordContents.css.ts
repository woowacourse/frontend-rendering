import { style } from '@vanilla-extract/css';

export const title = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'space-between',
  alignItems: 'center',

  fontSize: '4.0rem',
  fontWeight: 700,

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '3.2rem',
    },
  },
});
