import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  justifySelf: 'flex-end',

  display: 'flex',
  gap: '10px',
  alignItems: 'center',

  cursor: 'pointer',
});

export const name = style({
  fontSize: '1.6rem',
});

export const guestProfileWrapper = style({
  padding: '2px',
  backgroundColor: color.neutral[100],
  borderRadius: '50%',
});
