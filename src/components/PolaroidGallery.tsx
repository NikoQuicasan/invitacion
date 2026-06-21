import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import foto1 from '../assets/gallery/foto-1.png';
import foto2 from '../assets/gallery/foto-2.png';
import foto3 from '../assets/gallery/foto-3.png';

gsap.registerPlugin(ScrollTrigger);

export default function PolaroidGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const polaroidsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const polaroids = polaroidsRef.current;

    // 1. Animación de entrada: Entran desde abajo cuando la sección aparece en pantalla
    gsap.fromTo(polaroids, 
      { y: 150, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2, // Retraso entre cada foto para que entren una por una
        ease: "back.out(1.2)",
scrollTrigger: {
          trigger: section,
          scroller: "#main-scroll", // <--- ¡Esta es la clave para que las fotos aparezcan!
          start: "top 60%", 
        },
        onComplete: () => {
          // 2. Animación infinita: Efecto de levitación (flotar)
          polaroids.forEach((polaroid, index) => {
            gsap.to(polaroid, {
              y: index % 2 === 0 ? -15 : 15, // Unas suben, otras bajan
              rotation: `+=${index % 2 === 0 ? 2 : -2}`, // Movimiento sutil de rotación
              duration: 2.5 + index * 0.2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut"
            });
          });
        }
      }
    );
  }, []);

  // Función para agrupar las referencias de las fotos
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !polaroidsRef.current.includes(el)) {
      polaroidsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={clsx('relative', 'w-full', 'h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'items-center', 'justify-center', 'bg-[#747d5c]', 'overflow-hidden')}
    >
      <div className={clsx('relative', 'w-full', 'max-w-lg', 'h-[80vh]')}>
        
        {/* Polaroid 1 - Izquierda */}
        <div 
          ref={addToRefs}
          className={clsx('absolute', 'top-[10%]', 'left-[5%]', 'w-40', 'md:w-48', 'bg-[#F6F1E9]', 'p-3', 'pb-12', 'shadow-2xl', '-rotate-12', 'z-10')}
        >
          <img src={foto1} alt="Niko y Aleja 1" className={clsx('w-full', 'h-auto', 'object-cover')} />
        </div>

        {/* Polaroid 2 - Derecha */}
        <div 
          ref={addToRefs}
          className={clsx('absolute', 'top-[20%]', 'right-[5%]', 'w-44', 'md:w-52', 'bg-[#F6F1E9]', 'p-3', 'pb-12', 'shadow-2xl', 'rotate-12', 'z-20')}
        >
          <img src={foto2} alt="Niko y Aleja 2" className={clsx('w-full', 'h-auto', 'object-cover')} />
        </div>

        {/* Polaroid 3 - Abajo Centro */}
        <div 
          ref={addToRefs}
          className={clsx('absolute', 'bottom-[10%]', 'left-[20%]', 'md:left-[25%]', 'w-48', 'md:w-56', 'bg-[#F6F1E9]', 'p-3', 'pb-12', 'shadow-2xl', '-rotate-6', 'z-30')}
        >
          <img src={foto3} alt="Niko y Aleja 3" className={clsx('w-full', 'h-auto', 'object-cover')} />
        </div>

      </div>
    </section>
  );
}