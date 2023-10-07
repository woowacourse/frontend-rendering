import { RefObject, useEffect, useRef, useState } from 'react';

export const useContainerWidth = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }

      rafId.current = requestAnimationFrame(handleResize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
