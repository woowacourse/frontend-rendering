import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '135px',
});

export const stepGuide = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '80px',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});

export const evenStepGuid = style({
  flexDirection: 'row-reverse',
});

export const stepGuideImage = style({
  width: '55%',
  borderRadius: '20px',

  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});

export const stepGuideDescription = style({
  width: '40%',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  marginRight: 'auto',
  whiteSpace: 'pre-line',
});

export const titleStyle = style({
  fontSize: '4rem',
  fontWeight: 700,

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '3.2rem',
    },
  },
});

export const descriptionStyle = style({
  fontSize: '2.4rem',
  fontWeight: 500,
  wordBreak: 'keep-all',
  color: color.neutral[500],

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});
