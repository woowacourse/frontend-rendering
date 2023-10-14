import { useState, useEffect, useRef, RefObject } from 'react';

const useResponsiveWidth = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);

      const resizeListener = () => {
        if (ref.current) {
          setWidth(ref.current.offsetWidth);
        }
      };

      window.addEventListener('resize', resizeListener);

      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }
  }, []);

  return width;
};

export default useResponsiveWidth;
