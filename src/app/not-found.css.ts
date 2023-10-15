import { style } from '@vanilla-extract/css';

export const NotFoundPageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
  marginTop: '10vh',
});

export const Message = style({
  fontSize: '30px',
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',

  '@media': {
    '(max-width: 768px)': {
      fontSize: '24px',
    },
  },
});

export const Bold = style({
  fontWeight: 700,
});
