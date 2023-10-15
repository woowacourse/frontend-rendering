export const GENRES = {
  DANCE: '댄스',
  BALLAD: '발라드',
  POP: '팝',
  RHYTHM_AND_BLUES: 'R&B/Soul',
  INDIE: '인디',
  ROCK_METAL: '락/메탈',
  TROT: '트로트',
  FOLK_BLUES: '포크/블루스',
} as const;

export const GENRES_LIST = Object.keys(GENRES) as Genre[];

export type Genre = keyof typeof GENRES;
