import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';

// Importa tus imágenes aquí (ajusta los nombres según cómo los guardaste)
import bgImg from '../assets/intro/fondo-intro.png';
import envBody from '../assets/intro/sobrecito.png';
import envFlap from '../assets/intro/solapa.png';
import envSeal from '../assets/intro/sello.png';

interface IntroProps {
  onOpenComplete: () => void;
}

export default function Intro({ onOpenComplete }: IntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLImageElement>(null);
  const sealRef = useRef<HTMLImageElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Referencia para los textos

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: onOpenComplete
        });
      }
    });

    // 1. Desvanece los textos de "Nos Casamos" y "Haz click"
    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.3
    }, 0);

    // 2. El sello de cera desaparece rápido
    tl.to(sealRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "back.in(2)"
    }, 0);

    // 3. La solapa se abre en 3D
    tl.to(flapRef.current, {
      rotateX: 180,
      duration: 0.8,
      ease: "power3.inOut"
    }, 0.1);

    // 4. La tarjeta sube
    tl.to(letterRef.current, {
      y: -60,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 0.5);
  };

  return (
    <section 
      ref={containerRef}
      className={clsx('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center', 'bg-cover', 'bg-center', 'overflow-hidden')}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* 2. Textos (Arriba y Abajo del sobre) */}
      <div 
        ref={textRef} 
        className={clsx('absolute', 'inset-0', 'z-20', 'flex', 'flex-col', 'items-center', 'justify-between', 'py-[20vh]', 'pointer-events-none')}
      >
        <h1 className={clsx('text-[#F6F1E9]', 'text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-montserrat', 'tracking-[0.1em]', 'drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]')}>
          NOS CASAMOS!!!
        </h1>
        
        <p className={clsx('text-[#F6F1E9]', 'text-xl', 'md:text-2xl', 'font-montserrat', 'tracking-[0.2em]', 'drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]')}>
          HAZ CLICK!
        </p>
      </div>

      {/* 3. Contenedor del Sobre (En el centro) */}
      <div 
        className={clsx('relative', 'w-80', 'h-52', 'cursor-pointer', 'transition-transform', 'hover:scale-105', 'z-30')}
        onClick={handleOpen}
        style={{ perspective: "1000px" }}
      >
        {/* La tarjeta que sale */}
        <div 
          ref={letterRef}
          className={clsx('absolute', 'inset-x-4', 'top-4', 'bottom-0', 'bg-crema', 'rounded-t-lg', 'shadow-md', 'opacity-0', 'flex', 'items-center', 'justify-center')}
        >
          <p className={clsx('font-pinyon', 'text-3xl', 'text-oliva-oscuro')}>Aleja & Niko</p>
        </div>

        {/* Cuerpo del sobre */}
        <img 
          src={envBody} 
          alt="Cuerpo del sobre" 
          className={clsx('absolute', 'inset-0', 'w-full', 'h-full', 'object-contain', 'z-20')}
        />

        {/* Solapa */}
        <img 
          ref={flapRef}
          src={envFlap} 
          alt="Solapa" 
          className={clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-[60%]', 'object-contain', 'z-30')}
          style={{ transformOrigin: "top center" }} 
        />

        {/* Sello */}
        <img 
          ref={sealRef}
          src={envSeal} 
          alt="Sello" 
          className={clsx('absolute', 'top-[45%]', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-16', 'h-16', 'z-40', 'drop-shadow-lg')}
        />
      </div>
    </section>
  );
}