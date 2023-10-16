import color from '@/styles/color';
import { style } from '@vanilla-extract/css';

export const layout = style({
  position: 'absolute',
  top: '50px',
  right: '0',
  left: '0',

  backgroundColor: color.white,

  padding: '15px',
  border: `1px solid ${color.neutral[100]}`,
  borderRadius: '4px',

  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',

  zIndex: '5',

  userSelect: 'none',
});

export const montStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',

  padding: '0px 5px',
  marginBottom: '20px',
});

export const currentYearMonth = style({
  display: 'flex',

  fontSize: '2rem',
  fontWeight: '500',

  cursor: 'pointer',
});

export const menuTrigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',

  borderRadius: '8px',
  padding: '2px 5px',

  transition: 'background-color 0.2s ease',

  ':hover': {
    backgroundColor: color.neutral[100],
  },
});

export const shiftButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  opacity: '0.6',
});

export const todayButton = style({
  cursor: 'pointer',
});

export const days = style({
  display: 'grid',
  rowGap: '5px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyContent: 'center',

  marginTop: '10px',
});

export const dayStyle = style({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '5px 10px',
  textAlign: 'center',

  maxWidth: '50px',
  height: '50px',

  cursor: 'pointer',

  transition: 'background-color 0.1s ease',

  opacity: '0.4',
});

export const currentMonthDay = style({
  opacity: '1',
});
