'use client';

import { ReactNode } from 'react';

interface CarouselItemProps {
  children: ReactNode;
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  const carouselWidth = window.innerWidth;

  return <li style={{ width: `${carouselWidth}px` }}>{children}</li>;
};

export default CarouselItem;
