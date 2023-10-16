import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',

  color: color.neutral[500],
});

export const paginationButton = style({
  width: '30px',
  height: '30px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '4px',
});

export const currentButton = style({
  color: color.white,
  backgroundColor: color.blue[400],
});
