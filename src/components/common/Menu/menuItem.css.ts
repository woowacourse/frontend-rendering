import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  padding: '6px 24px',

  fontWeight: '300',

  transition: 'background-color 0.2s ease',

  cursor: 'pointer',

  ':hover': {
    backgroundColor: color.neutral[200],
  },
});

export const separator = style({
  height: '1.5px',
  backgroundColor: color.neutral[100],
});
