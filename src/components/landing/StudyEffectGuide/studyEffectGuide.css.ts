import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
});

export const title = style({
  fontSize: '4.0rem',
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.8rem',
    },
  },
});

export const studyEffectList = style({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '50px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const studyEffectItem = style({
  width: '400px',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  padding: '20px',

  backgroundColor: color.neutral[100],
  borderRadius: '14px',

  whiteSpace: 'pre-line',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});

export const studyEffectTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  fontSize: '2.2rem',
  fontWeight: '500',
});

export const studyEffectDescription = style({
  fontSize: '2rem',
  wordBreak: 'keep-all',
});
