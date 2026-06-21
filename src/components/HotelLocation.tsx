import hotelImg from '../assets/hotel/hotel.png';
import clsx from 'clsx';

export default function HotelLocation() {
  return (
    <section className={clsx('relative', 'w-full', 'h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'bg-[#d98b65]', 'text-[#F6F1E9]', 'text-center', 'overflow-hidden')}>
      
      {/* Contenedor centralizado para la info */}
      <div className={clsx('flex-1', 'flex', 'flex-col', 'items-center', 'justify-center', 'w-full', 'z-10', 'px-4')}>
        <h2 className={clsx('font-pinyon', 'text-5xl', 'md:text-7xl', 'mb-4', 'drop-shadow-sm')}>
          Acompáñanos En Barichara
        </h2>
        <p className={clsx('font-montserrat', 'text-xs', 'md:text-sm', 'tracking-[0.15em]', 'mb-12', 'opacity-90', 'uppercase')}>
          22 - 10 - 2026 / Hotel Boutique El Campanario
        </p>

        {/* Contenedor de la foto con el botón flotante */}
        <div className={clsx('relative', 'w-full', 'max-w-lg', 'drop-shadow-2xl')}>
          <img 
            src={hotelImg} 
            alt="Hotel El Campanario" 
            className={clsx('w-full', 'h-64', 'md:h-80', 'object-cover', 'rounded-xl', 'border', 'border-[#F6F1E9]/20')} 
          />
          
          {/* Botón flotante estilo píldora */}
          <a 
            href="https://maps.app.goo.gl/L72CJpejRxejMAjD6" 
            target="_blank" 
            rel="noreferrer"
            className={clsx('absolute', '-bottom-6', 'left-1/2', '-translate-x-1/2', 'bg-[#879a66]', 'hover:bg-[#728356]', 'text-[#F6F1E9]', 'font-montserrat', 'font-bold', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'uppercase', 'px-10', 'py-4', 'rounded-full', 'transition-transform', 'hover:scale-105', 'shadow-xl', 'whitespace-nowrap')}
          >
            CÓMO LLEGAR?
          </a>
        </div>
      </div>

      {/* Franja verde inferior pegada abajo */}
      <div className={clsx('w-full', 'h-8', 'md:h-12', 'bg-[#728356]', 'mt-auto')}></div>

    </section>
  );
}