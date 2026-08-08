import hotelImg from '../assets/hotel/hotel.png';
import flor1 from '../assets/hotel/flor1.png';
import clsx from 'clsx';
import ScrollReveal from './ScrollReveal';

export default function HotelLocation() {
  return (
    <section className={clsx(
      'relative', 'w-full', 'min-h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 
      'bg-[#d98b65]', 'text-[#F6F1E9]', 'text-center', 'overflow-hidden', 'py-24', 'px-6'
    )}>

      {/* FLOR 1: Esquina Superior Derecha */}
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx(
          'absolute', 'top-0', 'right-0', 
          'w-32', 'sm:w-48', 'md:w-80', 'lg:w-96', 'h-auto', // Mucho más pequeñas en mobile
          'opacity-30', 'md:opacity-90', // Reducimos opacidad en mobile para que no estorben al texto
          'pointer-events-none', 'select-none', 'z-0',
          'rotate-180' 
        )}
      />

      {/* FLOR 2: Esquina Inferior Izquierda */}
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx(
          'absolute', 'bottom-0', 'left-0', 
          'w-32', 'sm:w-48', 'md:w-80', 'lg:w-96', 'h-auto', // Mucho más pequeñas en mobile
          'opacity-30', 'md:opacity-90', // Reducimos opacidad en mobile
          'pointer-events-none', 'select-none', 'z-0'
        )}
      />

      {/* Contenido centralizado */}
      <ScrollReveal className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'w-full', 'max-w-4xl')}>
        <h2 className={clsx(
          'font-pinyon', 
          'text-5xl', 'sm:text-6xl', 'md:text-8xl', 'lg:text-9xl',
          'leading-[0.95]', 'mb-6', 'md:mb-8', 'drop-shadow-sm'
        )}>
          Acompáñanos En Barichara
        </h2>
        <p className={clsx(
          'font-montserrat', 
          'text-sm', 'md:text-lg', 
          'tracking-[0.2em]', 'mb-12', 'md:mb-16', 'opacity-90', 'uppercase'
        )}>
          24 - 10 - 2026 &nbsp;/&nbsp; Hotel Boutique El Campanario
        </p>

        {/* Foto con el botón incrustado */}
        <div className={clsx('relative', 'w-full', 'max-w-xl', 'md:max-w-3xl', 'drop-shadow-2xl')}>
          <img
            src={hotelImg}
            alt="Hotel El Campanario"
            className={clsx(
              'w-full', 'h-60', 'sm:h-80', 'md:h-[28rem]', 'lg:h-[32rem]', // 'h-60' la hace más baja y controlada en móviles
              'object-cover', 'rounded-xl', 'border', 'border-[#F6F1E9]/20'
            )}
          />

          <a
            href="https://maps.app.goo.gl/L72CJpejRxejMAjD6"
            target="_blank"
            rel="noreferrer"
            className={clsx(
              'absolute', 'bottom-6', 'md:bottom-8', 'left-1/2', '-translate-x-1/2', 
              'bg-[#879a66]', 'hover:bg-[#728356]', 'text-[#F6F1E9]', 'font-montserrat', 'font-bold', 
              'text-[11px]', 'md:text-sm', 'tracking-widest', 'uppercase', 
              'px-6', 'sm:px-10', 'md:px-12', 'py-3', 'md:py-5', 'rounded-full', // Padding y texto menores en mobile para que quepa bien
              'transition-transform', 'hover:scale-105', 'shadow-xl', 'whitespace-nowrap'
            )}
          >
            CÓMO LLEGAR?
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}