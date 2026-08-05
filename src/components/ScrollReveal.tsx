import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  /** Distancia (px) desde la que entra el elemento */
  y?: number;
  duration?: number;
  /** Retraso en segundos, útil para escalonar varios bloques dentro de una misma sección */
  delay?: number;
  /** Punto del viewport en el que dispara la animación */
  start?: string;
  className?: string;
}

// Envuelve cualquier bloque y lo hace aparecer (fade + subida) cuando entra
// en pantalla, usando el mismo scroller "#main-scroll" que ya usa PolaroidGallery.
export default function ScrollReveal({
  children,
  y = 40,
  duration = 1,
  delay = 0,
  start = 'top 82%',
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            scroller: '#main-scroll',
            start,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [y, duration, delay, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
