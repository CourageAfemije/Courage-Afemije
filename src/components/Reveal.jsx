import { useEffect, useRef, useState } from 'react';

const variantClass = {
  up: '',
  left: 'reveal-from-left',
  right: 'reveal-from-right',
  zoom: 'reveal-zoom',
};

/**
 * Fades/slides its children in the first time they scroll into view.
 * Used across every section so the page assembles itself as you read it.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If the API is unavailable, show the content rather than leave it hidden.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      // Trigger as soon as any pixel enters (or nearly enters) the viewport,
      // so tall blocks can't get stuck invisible during fast scrolling.
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant] ?? ''} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
