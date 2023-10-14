'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './carousel.module.css';
import type { CarouselChildren } from '@/types/common';
import useResponsiveWidth from '@/hooks/useResponsiveWidth';

interface CarouselProps {
  carouselList: CarouselChildren[];
}

const Carousel = ({ carouselList }: CarouselProps) => {
  const extendedCarouselList = [...carouselList, carouselList[0]];
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselWidth = useResponsiveWidth(containerRef);

  const showNextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselList.length ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(showNextSlide, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={styles.container} ref={containerRef}>
      <ul
        className={styles.wrapper}
        style={{
          transform: `translateX(-${currentIndex * carouselWidth}px)`,
          transition: currentIndex !== 0 ? 'all 0.5s ease-in-out' : undefined,
        }}
      >
        {extendedCarouselList.map(({ id, children }, index) => (
          <li
            className={styles.carouselItem}
            key={index === extendedCarouselList.length - 1 ? `${id}_last` : id}
            style={{ width: `${carouselWidth}px` }}
          >
            {children}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
