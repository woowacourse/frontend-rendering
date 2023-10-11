import { useLayoutEffect, useState } from 'react';

const useCurrentScroll = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const onScroll: (this: Window, ev: Event) => any = (e) => {
    console.log(e);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollPosition;
};

export default useCurrentScroll;
