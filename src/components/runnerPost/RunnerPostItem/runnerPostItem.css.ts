// RunnerPostItem.css.ts
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const runnerPostItemContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '340px',
  width: '100%',
  height: 'max-content',
  padding: '35px 40px',
  border: `0.5px solid ${vars.color.gray500}`,
  borderRadius: '12px',
  boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  ':hover': {
    transition: 'all 0.3s ease',
    transform: 'scale(1.015)',
    outline: `1.5px solid ${vars.color.batonRed}`,
  },
  '@media': {
    '(max-width: 768px)': {
      padding: '25px 30px',
    },
  },
});

export const postTitle = style({
  marginBottom: '15px',
  fontSize: '28px',
  fontWeight: 700,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '16px',
    },
  },
});

export const deadLineContainer = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '10px',
});

export const deadLine = style({
  marginBottom: '60px',
  color: `${vars.color.gray600}`,
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '40px',
      fontSize: '12px',
    },
  },
});

export const tagContainer = style({
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
});

export const tag = style({
  marginRight: '10px',
  fontSize: '14px',
  color: `${vars.color.gray600}`,
});

export const leftSideContainer = style({});

export const rightSideContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginBottom: '30px',
  gap: '10px',
});

export const profileName = style({
  minWidth: '50px',
  fontSize: '14px',
  textAlign: 'center',
  '@media': {
    '(max-width: 768px)': {
      minWidth: '30px',
      fontSize: '12px',
    },
  },
});

export const chatViewContainer = style({
  display: 'flex',
  gap: '10px',
  fontSize: '12px',
});

export const statisticsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  marginBottom: 'auto',

  '@media': {
    '(max-width: 768px)': {
      gap: '2px',
    },
  },
});

export const statisticsImage = style({
  width: '21px',
  height: '20px',
  marginLeft: '8px',
  '@media': {
    '(max-width: 768px)': {
      width: '16px',
      height: '15px',
    },
  },
});

export const statisticsText = style({
  fontSize: '14px',
  color: '#a4a4a4',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '10px',
    },
  },
});
