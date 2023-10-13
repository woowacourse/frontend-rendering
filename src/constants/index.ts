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

const PATH = {
  HOME: '/',
  LIST: '/products/food',
  RECIPE: '/recipes',
  MEMBER: '/members',
};

export interface NavigationMenu {
  variant: SvgIconVariant;
  name: string;
  pathname: string;
}

export const NAVIGATION_MENU: NavigationMenu[] = [
  {
    variant: 'list',
    name: '목록',
    pathname: PATH.LIST,
  },
  {
    variant: 'home',
    name: '홈',
    pathname: PATH.HOME,
  },
  {
    variant: 'recipe',
    name: '꿀조합',
    pathname: PATH.RECIPE,
  },
  {
    variant: 'member',
    name: '마이',
    pathname: PATH.MEMBER,
  },
];

export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
