import { ReactNode } from 'react';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CarouselChildren {
  id: number;
  children: ReactNode;
}
