import { useEffect, useRef } from 'react';

export const useRevealOnScroll = (options) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-section--visible');
          observer.unobserve(element);
        }
      },
      options || { threshold: 0.15 }
    );

    element.classList.add('reveal-section');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
};
