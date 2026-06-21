import heroImg from '../assets/banner/hero-banner.png';
import clsx from 'clsx';

export default function Hero() {
  return (
    <section className={clsx('relative', 'w-full', 'h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'overflow-hidden')}>
      
      {/* Imagen de fondo */}
      <div 
        className={clsx('absolute', 'inset-0', 'w-full', 'h-full', 'bg-cover', 'bg-center')}
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      {/* Overlay oscuro sutil para que el texto resalte */}
      <div className={clsx('absolute', 'inset-0', 'bg-black/30')} />

      {/* Textos */}
      <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'text-crema', 'mt-[-10vh]')}>
        <p className={clsx('font-cormorant', 'text-[#F6F1E9]','text-xl', 'md:text-2xl', 'tracking-widest', 'mb-2', 'drop-shadow-md')}>
          Guarda La Fecha
        </p>
        <h1 className={clsx('font-pinyon','text-[#F6F1E9]', 'text-7xl', 'md:text-8xl', 'drop-shadow-lg', 'mb-4')}>
          Niko Y Aleja
        </h1>
        <p className={clsx('font-cormorant','text-[#F6F1E9]','text-xl', 'md:text-2xl', 'tracking-[0.2em]', 'drop-shadow-md')}>
          22 - 10 - 2026
        </p>
      </div>

    </section>
  );
}