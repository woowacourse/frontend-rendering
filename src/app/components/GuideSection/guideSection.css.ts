import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '180px',

  padding: '135px 0',
});

export const introduce = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  textAlign: 'center',
});

export const title = style({
  fontSize: '4.0rem',
  fontWeight: '700',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.8rem',
    },
  },
});

export const description = style({
  fontSize: '2.4rem',
  fontWeight: '500',

  wordBreak: 'keep-all',
});
