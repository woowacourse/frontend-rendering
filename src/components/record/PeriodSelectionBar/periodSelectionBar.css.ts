import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  gap: '20px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.4rem',
      flexDirection: 'column',
      alignItems: 'self-start',
    },
  },
});

export const selectPeriodButtonContainer = style({
  display: 'flex',

  borderRadius: '8px',
  border: `1px solid ${color.neutral[200]}`,

  backgroundColor: color.white,
});

export const selectPeriodButton = style({
  padding: '8px 20px',

  border: '1px solid transparent',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '4px 10px',
    },
  },

  ':first-child': {
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  },

  ':last-child': {
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
  },
});

export const isSelected = style({
  color: color.blue[500],
  borderColor: color.blue[500],
});

export const selectCustomPeriodContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
});

export const selectDateWrapper = style({
  position: 'relative',

  display: 'flex',

  borderRadius: '8px',
  border: `1px solid ${color.neutral[200]}`,

  backgroundColor: color.white,

  ':last-child': {
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
  },
});

export const selectedDate = style({
  padding: '10px 20px',

  minWidth: '300px',

  borderRight: `1px solid ${color.neutral[200]}`,
});

export const hasSelectedCustomPeriodStyle = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  justifyItems: 'center',
});

export const hasNotSelectedCustomPeriod = style({
  textAlign: 'center',
  opacity: '0.5',
});

export const selectDateButton = style({
  display: 'flex',
  alignItems: 'center',

  padding: '10px 20px',

  cursor: 'pointer',

  transition: 'background-color 0.2s ease',

  ':hover': {
    backgroundColor: color.neutral[100],
  },
});
