import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'full' | 'fit';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  width = 'full' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can disconnect if we want it to only reveal once
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${width === 'full' ? 'w-full' : 'w-fit'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;