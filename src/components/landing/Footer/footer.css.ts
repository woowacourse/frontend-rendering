import { style } from '@vanilla-extract/css';

export const layout = style({
  width: '100%',
  height: '100px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const linkContainer = style({
  display: 'flex',
  gap: '20px',

  marginTop: '10px',

  textDecoration: 'underline',
});

export const typography = style({
  fontSize: '1.2rem',
});
