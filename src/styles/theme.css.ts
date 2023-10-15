import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    batonRed: '#f64545',
    label: '#333333',
    count: '#04c09e',
    border: '#dddddd',
    black: '#000000',
    gray800: '#282828',
    gray700: '#5e5e5e',
    gray600: '#727272',
    gray500: '#a6a6a6',
    gray400: '#bbbbbb',
    gray300: '#dddddd',
    gray200: '#e8e8e8',
    gray100: '#f3f3f3',
    white: '#ffffff',
  },
});
