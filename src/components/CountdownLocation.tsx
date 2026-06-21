import { useState, useEffect } from 'react';
import purpleFlowers from '../assets/countdown/flores.png';
import clsx from 'clsx';
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Fecha objetivo: 22 de Octubre de 2026 a las 4:00 PM
    const targetDate = new Date('2026-10-22T16:00:00').getTime();

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
    <section className={clsx('relative', 'w-full', 'h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'bg-[#CE8943]', 'text-[#F6F1E9]', 'text-center', 'overflow-hidden')}>
      
      {/* Contenedor centralizado para el contador */}
      <div className={clsx('flex-1', 'flex', 'flex-col', 'items-center', 'justify-center', 'w-full', 'z-10')}>
        <h2 className={clsx('font-pinyon', 'text-7xl', 'md:text-8xl', 'mb-8', 'drop-shadow-sm')}>Faltan</h2>

        <div className={clsx('flex', 'gap-4', 'md:gap-8', 'font-cormorant', 'text-5xl', 'md:text-7xl', 'drop-shadow-md')}>
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-20')}>
            <span>{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-xs', 'uppercase', 'tracking-widest', 'mt-2', 'opacity-90')}>Dias</span>
          </div>
          <span className={clsx('opacity-80', 'mt-1', 'md:mt-2')}>:</span>
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-20')}>
            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-xs', 'uppercase', 'tracking-widest', 'mt-2', 'opacity-90')}>Horas</span>
          </div>
          <span className={clsx('opacity-80', 'mt-1', 'md:mt-2')}>:</span>
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-20')}>
            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-xs', 'uppercase', 'tracking-widest', 'mt-2', 'opacity-90')}>Minutos</span>
          </div>
          <span className={clsx('opacity-80', 'mt-1', 'md:mt-2')}>:</span>
          <div className={clsx('flex', 'flex-col', 'items-center', 'w-20')}>
            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className={clsx('font-montserrat', 'text-xs', 'uppercase', 'tracking-widest', 'mt-2', 'opacity-90')}>Segundos</span>
          </div>
        </div>
      </div>

      {/* Borde separador de Flores Moradas pegado abajo */}
      <div 
        className={clsx('w-full', 'h-24', 'md:h-36', 'bg-repeat-x', 'bg-contain', 'bg-bottom', 'opacity-95', 'mt-auto')} 
        style={{ backgroundImage: `url(${purpleFlowers})` }}
      />

    </section>
  );
}