import { useEffect } from 'react';

export const useScrollToTop = (dependency: any, minWidth: number = 768) => {
  useEffect(() => {
    if (dependency && window.innerWidth >= minWidth) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [dependency]);
};