import { useState, useEffect, RefObject } from 'react';

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
  }, [ref]);

  return width;
};

export default useResponsiveWidth;
