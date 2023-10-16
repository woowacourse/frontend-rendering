import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
});

export const dayOfWeekStyle = style({
  flex: 1,

  color: color.black,
  textAlign: 'center',
});
