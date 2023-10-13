import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const image = style({
  border: `1px solid ${vars.color.gray800}`,
  borderRadius: '50%',
  objectFit: 'cover',
});
