import { style } from '@vanilla-extract/css';

export const bannerBackground = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '292px',

  backgroundImage: `url('/banner_background.png')`,

  '@media': {
    '(max-width: 768px)': {
      height: '120px',
    },
  },
});

export const bannerContents = style({
  '@media': {
    '(max-width: 768px)': {
      width: '340px',
      height: '90px',
    },
  },
});
