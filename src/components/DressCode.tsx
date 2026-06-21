import paletteImg from '../assets/paleta/paleta.png';
import clsx from 'clsx';

export default function DressCode() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-20', 'bg-[#563b31]', 'text-[#F6F1E9]', 'overflow-hidden')}>
      
      <div className={clsx('text-center', 'px-4', 'mb-10')}>
        <h2 className={clsx('font-pinyon', 'text-5xl', 'md:text-6xl', 'mb-3', 'drop-shadow-sm')}>
          Codigo De Vestimenta
        </h2>
        <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'opacity-80', 'uppercase')}>
          Dress Code: Formal / Elegante
        </p>
      </div>

      <div className={clsx('w-[85%]', 'max-w-lg', 'shadow-2xl')}>
        <img 
          src={paletteImg} 
          alt="Paleta de colores para el código de vestimenta" 
          className={clsx('w-full', 'h-auto', 'object-cover', 'rounded-sm')}
        />
      </div>

    </section>
  );
}