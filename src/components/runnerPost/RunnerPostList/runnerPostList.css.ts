import { style } from '@vanilla-extract/css';

export const runnerPostWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',

  width: '100%',

  '@media': {
    '(max-width: 768px)': {
      gap: '20px',
    },
  },
});
