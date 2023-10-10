'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import styles from './carousel.module.css';
import useResponsiveWidth from './useResponsiveWidth';

export interface CarouselChildren {
  id: number;
  children: ReactNode;
}

export interface CarouselProps {
  carouselList: CarouselChildren[];
}

const Carousel = ({ carouselList }: CarouselProps) => {
  const extendedCarouselList = [...carouselList, carouselList[0]];
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const CAROUSEL_WIDTH = useResponsiveWidth(containerRef);

  const showNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === carouselList.length ? 0 : prev + 1));
  }, [carouselList.length]);

  useEffect(() => {
    const timer = setInterval(showNextSlide, 2000);

    return () => clearInterval(timer);
  }, [showNextSlide, currentIndex]);

  return (
    <div className={styles.container} ref={containerRef}>
      <ul
        className={styles.carouselWrapper}
        style={{
          transform: 'translateX(-' + currentIndex * CAROUSEL_WIDTH + 'px)',
          transition: currentIndex !== 0 ? 'all 0.5s ease-in-out' : '',
        }}
      >
        {extendedCarouselList.map(({ id, children }, index) => (
          <li
            className={styles.carouselItem}
            key={index === extendedCarouselList.length - 1 ? `${id}_last` : id}
            style={{ width: `${CAROUSEL_WIDTH}px` }}
          >
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
