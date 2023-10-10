import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  maxWidth: '1200px',
  padding: '0 20px',
  margin: '0 auto',

  '@media': {
    '(max-width: 768px)': {
      padding: '0',
    },
  },
});

export const titleWrapper = style({
  margin: '72px 0 53px 0',

  '@media': {
    '(max-width: 768px)': {
      margin: '40px 0 40px 0',
    },
  },
});

export const title = style({
  fontSize: '36px',
  fontWeight: 700,

  '@media': {
    '(max-width: 768px)': {
      fontSize: '28px',
    },
  },
});

export const controlPanelContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '36px',

  '@media': {
    '(max-width: 768px)': {
      alignItems: 'start',
      flexDirection: 'column',
      gap: '18px',
    },

    '(max-height: 768px)': {
      marginBottom: '24px',
    },
  },
});

export const leftSideContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
});

export const rightSideContainer = style({
  alignSelf: 'flex-end',
});

export const runnerPostContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
});
