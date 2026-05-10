import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'blur-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = isVisible ? `animate-${animation}` : 'animate-on-scroll';
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div ref={ref} className={`${animationClass} ${className}`} style={delayStyle}>
      {children}
    </div>
  );
}

interface AnimatedGridProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedGrid({
  children,
  animation = 'fade-in-up',
  staggerDelay = 0.1,
  className = '',
  itemClassName = ''
}: AnimatedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleItems(new Array(children.length).fill(true));
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * (staggerDelay * 1000));
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [children.length, staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${visibleItems[index] ? `animate-${animation}` : 'animate-on-scroll'} ${itemClassName}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
