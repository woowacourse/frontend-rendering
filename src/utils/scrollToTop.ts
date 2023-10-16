export const smoothScrollToTop = () => {
  if (typeof window !== 'undefined')
    window.scroll({ top: 0, behavior: 'smooth' });
};

export const defaultScrollToTop = () => {
  if (typeof window !== 'undefined') window.scrollTo(0, 0);
};
