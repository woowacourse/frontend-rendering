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
  name: '검색' | '목록' | '홈' | '꿀조합' | '마이';
  path: (typeof PATH)[keyof typeof PATH] | '/products/food' | '/products/store';
}

export const PATH = {
  HOME: '/',
  SEARCH: '/search',
  PRODUCT_LIST: '/products',
  MEMBER: '/members',
  RECIPE: '/recipes',
  LOGIN: '/login',
} as const;

export const NAVIGATION_MENU: NavigationMenu[] = [
  {
    variant: 'list',
    name: '목록',
    path: `${PATH.PRODUCT_LIST}/food`,
  },
  {
    variant: 'home',
    name: '홈',
    path: PATH.HOME,
  },
  {
    variant: 'recipe',
    name: '꿀조합',
    path: PATH.RECIPE,
  },
  {
    variant: 'member',
    name: '마이',
    path: PATH.MEMBER,
  },
];

export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
