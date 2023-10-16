import { style, keyframes } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const skeletonLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  maxWidth: '1200px',
});

const SkeletonAnimation = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

export const skeletonItem = style({
  height: '130px',
  color: 'transparent',

  borderRadius: '14px',

  background: 'linear-gradient(-90deg, #dee2e6, #f0f0f0, #dee2e6, #f0f0f0)',
  backgroundSize: '400%',

  animation: `${SkeletonAnimation} 5s infinite ease-in-out`,
});
