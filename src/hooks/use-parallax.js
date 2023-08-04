import { useEffect, useState } from 'react';

export default function useParallax(speed = 0.1) {
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newValue = scrollTop * speed;
      setParallaxValue(newValue);
    };

    window.addEventListener('scroll', handleScroll);
  }, [speed]);

  return parallaxValue;
}
