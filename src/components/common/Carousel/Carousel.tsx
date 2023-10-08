'use client';

import { useEffect, useState } from 'react';
import styles from './carousel.module.css';
import type { CarouselChildren } from '@/types/common';

interface CarouselProps {
  carouselList: CarouselChildren[];
}

const Carousel = ({ carouselList }: CarouselProps) => {
  const extendedCarouselList = [...carouselList, carouselList[0]];
  const [currentIndex, setCurrentIndex] = useState(0);

  const CAROUSEL_WIDTH = window.innerWidth;

  const showNextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselList.length ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(showNextSlide, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <ul
        className={styles.carouselWrapper}
        style={{
          transform: 'translateX(-' + currentIndex * CAROUSEL_WIDTH + 'px)',
          transition: currentIndex === length - 1 ? '' : 'all 0.5s ease-in-out',
        }}
      >
        {extendedCarouselList.map(({ id, children }) => (
          <li
            className={styles.carouselItem}
            key={id}
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
