import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  backgroundColor: color.neutral[50],

  minHeight: '100vh',
});

export const contentsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  maxWidth: '1200px',

  margin: '0 auto',
  padding: '0px 60px',
  paddingBottom: '60px',

  '@media': {
    'screen and (max-width: 768px)': {
      gap: '20px',

      width: '90%',

      padding: '0px',
      paddingBottom: '60px',
    },
  },
});
