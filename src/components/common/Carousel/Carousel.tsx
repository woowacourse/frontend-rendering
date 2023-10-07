'use client';

import {
  ReactElement,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useContainerWidth } from '@/hooks';

import styles from './carousel.module.css';

interface CarouselProps {
  children: ReactElement[];
}

export const CarouselContext = createContext<number>(0);

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const carouselWidth = useContainerWidth(containerRef);

  const showNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  }, [children.length]);

  useEffect(() => {
    const timer = setInterval(showNextSlide, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <CarouselContext.Provider value={carouselWidth}>
      <div className={styles.container} ref={containerRef}>
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
    </CarouselContext.Provider>
  );
};

export default Carousel;
