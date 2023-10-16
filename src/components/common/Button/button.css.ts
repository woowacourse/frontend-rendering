import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  position: 'relative',

  padding: '12px 24px',
  borderRadius: '7px',

  fontSize: '2.0rem',

  backgroundColor: color.blue[500],
  color: color.white,
  border: '1px solid transparent',

  transition: 'background-color 0.2s ease',

  cursor: 'pointer',

  ':disabled': {
    opacity: '0.4',
    cursor: 'not-allowed',
  },

  ':hover': {
    backgroundColor: color.blue[600],
  },
});
