import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'center',

  width: '100%',
  padding: '0 30px',
  borderBottom: `0.3px solid ${vars.color.gray600}`,
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  maxWidth: '1200px',
  width: '100%',
  height: '80px',
});

export const alarmIcon = style({
  width: '25px',
  height: '25px',

  cursor: 'pointer',
});

export const avatarContainer = style({
  cursor: 'pointer',
});

export const logo = style({
  width: '197px',
  height: '35px',

  backgroundImage: `url('/logo-image.svg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  cursor: 'pointer',

  '@media': {
    '(max-width: 768px)': {
      backgroundImage: `url('/logo-image-mobile.svg')`,
      width: '53px',
      height: '30px',
    },
  },
});

export const menuContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',

  '@media': {
    '(max-width: 768px)': {
      gap: '16px',
    },
  },
});
