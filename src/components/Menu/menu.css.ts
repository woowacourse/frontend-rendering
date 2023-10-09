import { style } from '@vanilla-extract/css';

export const layout = style({
  position: 'relative',
  width: 'fit-content',
});

export const menuIconWrapper = style({
  padding: '4px',
});

export const menuList = style({
  position: 'absolute',
  top: '50px',
  right: 0,

  textAlign: 'start',

  display: 'grid',
  rowGap: '6px',

  width: 'max-content',
  maxHeight: '80vh',
  overflow: 'auto',

  padding: '10px 0px',
  borderRadius: '8px',

  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',

  zIndex: '10',
});
