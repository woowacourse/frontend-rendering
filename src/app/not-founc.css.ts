import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

export const pageState = style({
  fontSize: '6rem',
  fontWeight: '500',
  color: color.neutral[600],
});

export const description = style({
  fontSize: '1.6rem',
  textAlign: 'center',
  fontWeight: '300',
});
