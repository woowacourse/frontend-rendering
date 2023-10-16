import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const studyItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',

  backgroundColor: color.white,
  border: `1px solid ${color.neutral[200]}`,
  borderRadius: '7px',

  padding: '20px',

  cursor: 'pointer',

  transition: 'border 0.2s ease',

  ':hover': {
    border: `1px solid ${color.blue[400]}`,
  },
});

export const studyNameDateContainer = style({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const studyTitle = style({
  fontSize: '2.0rem',
  maxWidth: '100%',
  wordBreak: 'break-all',
});

export const studyDate = style({
  color: color.neutral[700],
});

export const studyCycleInfoLayout = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 25px',
});

export const studyCycleInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  padding: '5px 10px',
  borderRadius: '7px',

  backgroundColor: color.neutral[100],
  color: color.neutral[700],

  ':last-child': {
    marginLeft: '10px',
    fontSize: '1.8rem',
    fontWeight: '500',
  },
});
