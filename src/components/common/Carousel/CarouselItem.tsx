'use client';

import { ReactNode, useContext } from 'react';

import { CarouselContext } from './Carousel';

interface CarouselItemProps {
  children: ReactNode;
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  const carouselWidth = useContext(CarouselContext);

  return <li style={{ width: `${carouselWidth}px` }}>{children}</li>;
};

export default CarouselItem;
