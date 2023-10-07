export const colors = {
  primary: '#D8EAFF',
  secondary: '#FFEC99',

  white: '#ffffff',
  gray1: '#F7F7F7',
  gray2: '#DDDDDD',
  gray3: '#A0A0A0',
  gray4: '#6B6B6B',
  gray5: '#444444',
  black: '#232527',
} as const;

export const textColors = {
  default: colors.black,
  sub: colors.gray5,
  info: colors.gray4,
  disabled: colors.gray3,
  white: colors.white,
} as const;

export const borderColors = {
  default: colors.gray3,
  strong: colors.gray4,
  disabled: colors.gray2,
} as const;

export const dividerColors = {
  default: colors.gray3,
  strong: colors.gray4,
  disabled: colors.gray2,
} as const;

export const backgroundColors = {
  default: colors.white,
  light: colors.gray1,
} as const;
