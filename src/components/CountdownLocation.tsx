import { useState, useEffect } from 'react';
import clsx from 'clsx';

// Vector: Esquina decorativa (estilo marco elegante)
const CornerSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5 L85 5" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
    <path d="M5 5 L5 85" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
    <path d="M15 15 C 40 15, 15 40, 15 70" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
    <path d="M15 15 C 15 40, 40 15, 70 15" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
    <circle cx="15" cy="15" r="2.5" fill="currentColor" opacity="0.7"/>
    <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Vector: Divisor vertical floral entre los números
const VerticalDividerSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10 Q18 25 12 40 Q6 55 12 70" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <path d="M12 25 Q16 32 12 40" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
    <path d="M12 40 Q8 48 12 55" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
    <circle cx="12" cy="40" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="10" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="12" cy="70" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Vector: Adorno inferior centrado
const BottomOrnamentSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 50 Q150 -10 300 50" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M50 50 Q150 15 250 50" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    <path d="M110 50 Q150 30 190 50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <circle cx="150" cy="40" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Fecha objetivo: 24 de Octubre de 2026 a las 4:00 PM
    const targetDate = new Date('2026-10-24T16:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={clsx(
      'relative', 'w-full', 'py-20', 'md:py-24', 'flex', 'flex-col', 'items-center', 'justify-center', 
      'bg-[#c68b3f]', /* Un tono ligeramente más dorado para acercarnos a tu captura */
      'text-[#F6F1E9]', 'text-center', 'overflow-hidden'
    )}>

      {/* Esquinas superiores decorativas */}
      <CornerSVG className={clsx('absolute', 'top-4', 'left-4', 'w-16', 'md:w-24', 'h-auto', 'pointer-events-none')} />
      <CornerSVG className={clsx('absolute', 'top-4', 'right-4', 'w-16', 'md:w-24', 'h-auto', 'pointer-events-none', 'scale-x-[-1]')} />

      {/* Adorno inferior */}
      <BottomOrnamentSVG className={clsx('absolute', 'bottom-0', 'left-1/2', '-translate-x-1/2', 'w-full', 'max-w-2xl', 'h-auto', 'pointer-events-none')} />

      {/* Contenido principal */}
      <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'w-full', 'px-4')}>
        
        <h2 className={clsx('font-pinyon', 'text-6xl', 'md:text-7xl', 'mb-6', 'drop-shadow-sm')}>
          Faltan
        </h2>
        
        {/* Contenedor tipo "cápsula" de los números */}
        <div className={clsx(
          'flex', 'items-center', 'justify-center', 
          'bg-black/15', // Fondo semi-transparente oscuro
          'rounded-xl', 'px-4', 'sm:px-8', 'py-4', 'md:py-6',
          'shadow-inner'
        )}>
          
          {/* DÍAS */}
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-14', 'sm:w-20', 'md:w-24')}>
            <span className={clsx('font-cormorant', 'text-4xl', 'sm:text-5xl', 'md:text-6xl')}>{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-[8px]', 'sm:text-[10px]', 'uppercase', 'tracking-widest', 'mt-1', 'opacity-80')}>Días</span>
          </div>
          
          <VerticalDividerSVG className={clsx('w-3', 'sm:w-5', 'h-12', 'sm:h-16', 'mx-1', 'sm:mx-2')} />
          
          {/* HORAS */}
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-14', 'sm:w-20', 'md:w-24')}>
            <span className={clsx('font-cormorant', 'text-4xl', 'sm:text-5xl', 'md:text-6xl')}>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-[8px]', 'sm:text-[10px]', 'uppercase', 'tracking-widest', 'mt-1', 'opacity-80')}>Horas</span>
          </div>
          
          <VerticalDividerSVG className={clsx('w-3', 'sm:w-5', 'h-12', 'sm:h-16', 'mx-1', 'sm:mx-2')} />
          
          {/* MINUTOS */}
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-14', 'sm:w-20', 'md:w-24')}>
            <span className={clsx('font-cormorant', 'text-4xl', 'sm:text-5xl', 'md:text-6xl')}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-[8px]', 'sm:text-[10px]', 'uppercase', 'tracking-widest', 'mt-1', 'opacity-80')}>Minutos</span>
          </div>
          
          <VerticalDividerSVG className={clsx('w-3', 'sm:w-5', 'h-12', 'sm:h-16', 'mx-1', 'sm:mx-2')} />
          
          {/* SEGUNDOS */}
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-14', 'sm:w-20', 'md:w-24')}>
            <span className={clsx('font-cormorant', 'text-4xl', 'sm:text-5xl', 'md:text-6xl')}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-[8px]', 'sm:text-[10px]', 'uppercase', 'tracking-widest', 'mt-1', 'opacity-80')}>Segundos</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}