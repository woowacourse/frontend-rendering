'use client';

import { ReactElement, useCallback, useEffect, useState } from 'react';

import styles from './carousel.module.css';

interface CarouselProps {
  children: ReactElement[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  }, [children.length]);

  useEffect(() => {
    const timer = setInterval(showNextSlide, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const carouselWidth = window.innerWidth;

  return (
    <div className={styles.container}>
      <ul
        className={styles.carouselList}
        style={{
          transform: 'translateX(-' + currentIndex * carouselWidth + 'px)',
          transition: currentIndex !== 0 ? 'all 0.5s ease-in-out' : undefined,
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default Carousel;
