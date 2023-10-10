'use client';
import { Children, useEffect, useRef, useState } from 'react';
import styles from './CollectionCarousel.module.css';
import type { ReactElement } from 'react';

interface CarouselProps {
  children: ReactElement | ReactElement[];
}

const CollectionCarousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const numberOfItems = Children.count(children);

  const handleScroll: React.UIEventHandler<HTMLUListElement> = ({ currentTarget }) => {
    const { scrollLeft, scrollWidth } = currentTarget;
    const itemWidth = scrollWidth / numberOfItems;

    setCurrentIndex(Math.round(scrollLeft / itemWidth));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % numberOfItems;
        const itemWidth = carouselRef.current.scrollWidth / numberOfItems;
        carouselRef.current.scrollLeft = nextIndex * itemWidth;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, numberOfItems]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.carouselWrapper} ref={carouselRef} onScroll={handleScroll}>
        {children}
      </ul>
      <div className={styles.indicatorWrapper} aria-hidden>
        {Array.from({ length: numberOfItems }, (_, idx) => (
          <div
            key={idx}
            className={idx === currentIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionCarousel;
