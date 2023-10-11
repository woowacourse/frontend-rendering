const color = {
  LOGO: '#3145FF',
  PRIMARY: '#516FFF',
  PRIMARY200: '#B7BAFF',
  PRIMARY900: '#5054FF',
  WHITE: '#fff',
  BLACK: '#000',
  RED: '#FF5B5B',
  PURPLE: '#6E61ff',

  NAVY: '#303650',

  GRAY100: '#f2f4f6',
  GRAY150: '#eaeaea',
  GRAY200: '#e5e8eb',
  GRAY300: '#d1d6db',
  GRAY350: '#c9c9c9',
  GRAY400: '#b0b8c1',
  GRAY500: '#8b95a1',
  GRAY600: '#6b7684',
  GRAY700: '#4e5968',
  GRAY800: '#333d4b',
  GRAY900: '#191f28',

  BLUE100: '#d1ddff',
  BLUE200: '#b9cbff',
  BLUE300: '#a0c1fd',
  BLUE400: '#8ba9ff',
  BLUE500: '#5885f5',
  BLUE600: '#2459e0',
  BLUE700: '#193ecb',

  PURPLE100: '#b7baff',
  PURPLE400: '#8e92ff',

  TRANSPARENT_BLACK: '#777777aa',
} as const;

const zIndex = {
  LANDING_CARD: -1,
  NOTICE: 1,
  MODAL: 2,
  MENU: 3,
  TOAST: 4,
} as const;

export const theme = {
  color,
  zIndex,
} as const;
