import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  padding: '40px',
  display: 'flex',
});

export const title = style({
  display: 'inline',
  fontSize: '4rem',
  fontWeight: 500,
});

export const emphasis = style({
  color: color.blue[500],
});
