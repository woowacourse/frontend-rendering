export const SVG_ICON_VARIANTS = [
  'recipe',
  'list',
  'member',
  'search',
  'arrow',
  'bookmark',
  'bookmarkFilled',
  'review',
  'star',
  'favorite',
  'favoriteFilled',
  'home',
  'sort',
  'kakao',
  'close',
  'triangle',
  'plus',
  'pencil',
  'camera',
] as const;
export type SvgIconVariant = (typeof SVG_ICON_VARIANTS)[number];

export interface NavigationMenu {
  variant: SvgIconVariant;
  name: string;
}

export const NAVIGATION_MENU: NavigationMenu[] = [
  {
    variant: 'list',
    name: '목록',
  },
  {
    variant: 'home',
    name: '홈',
  },
  {
    variant: 'recipe',
    name: '꿀조합',
  },
  {
    variant: 'member',
    name: '마이',
  },
];
