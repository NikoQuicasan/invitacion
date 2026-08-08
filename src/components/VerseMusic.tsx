import clsx from 'clsx';
import proposalImg from '../assets/propuesta/propuesta.png';
import TornDivider from './TornDivider';
import ScrollReveal from './ScrollReveal';
// Ajusta estas rutas a donde guardes las versiones grises (para fondos claros)
import flornegra1 from '../assets/hotel/flornegra1.png';
import flornegra2 from '../assets/hotel/flornegra2.png';

// Creamos un componente SVG pequeño para no ensuciar el JSX principal.
const BranchSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M 90 90 Q 50 60 10 10" />
    <path d="M 50 60 C 30 50 20 20 40 30 C 50 40 60 50 50 60 Z" />
    <path d="M 25 35 C 10 20 10 0 30 10 C 35 20 30 30 25 35 Z" />
    <path d="M 70 55 C 80 30 100 20 90 50 C 85 60 75 60 70 55 Z" />
  </svg>
);

export default function OurStory() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 'px-6', 'py-20', 'bg-[#F6F1E9]', 'text-[#4A5D23]', 'overflow-hidden')}>

      {/* Flores decorativas (marca de agua gris): empujadas a los bordes con opacidad baja */}
      <img src={flornegra1} alt="" aria-hidden="true" className={clsx('absolute', 'bottom-0', 'right-0', 'w-40', 'sm:w-48', 'md:w-56', 'h-auto', 'opacity-20', 'pointer-events-none', 'select-none', 'z-0', 'rotate-180')} />
      <img src={flornegra2} alt="" aria-hidden="true" className={clsx('absolute', 'top-0', 'left-0', 'w-40', 'sm:w-48', 'md:w-56', 'h-auto', 'opacity-20', 'pointer-events-none', 'select-none', 'z-0','rotate-180')} />

      {/* Fila: texto — foto — texto */}
      <ScrollReveal className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-center', 'gap-6', 'md:gap-8', 'lg:gap-12', 'w-full', 'max-w-5xl', 'z-10')}>

        {/* Texto NUESTRA */}
        <p className={clsx('md:flex-1', 'text-center', 'md:text-right', 'font-cormorant', 'text-2xl', 'md:text-3xl', 'lg:text-4xl', 'tracking-[0.15em]', 'uppercase', 'leading-snug')}>
          Nuestra<br className={clsx('hidden', 'md:block')} />
        </p>

        {/* Contenedor de la Foto Polaroid */}
        <div className={clsx('relative', 'flex-shrink-0')}>
          {/* Ramas SVG decorativas detrás de la foto */}
          <BranchSVG className={clsx('absolute', 'w-24', 'md:w-32', 'right-[80%]', 'bottom-0', 'md:-bottom-5', 'opacity-30', 'pointer-events-none', 'z-0', '-scale-x-100', 'rotate-12')} />
          <BranchSVG className={clsx('absolute', 'w-24', 'md:w-32', 'left-[80%]', 'top-0', 'md:-top-5', 'opacity-30', 'pointer-events-none', 'z-0', 'rotate-[190deg]')} />

          <div className={clsx('relative', 'z-10', 'w-64', 'md:w-72', 'lg:w-[22rem]', 'aspect-[3/4]', 'bg-white', 'p-3', 'md:p-4', 'pb-12', 'md:pb-16', 'shadow-[15px_15px_20px_rgba(0,0,0,0.15)]', '-rotate-2')}>
            <img src={proposalImg} alt="Niko y Aleja" className={clsx('w-full', 'h-full', 'object-cover')} />
          </div>
        </div>

        {/* Texto HISTORIA */}
        <p className={clsx('md:flex-1', 'text-center', 'md:text-left', 'font-cormorant', 'text-2xl', 'md:text-3xl', 'lg:text-4xl', 'tracking-[0.15em]', 'uppercase', 'leading-snug')}>
          Historia<br className={clsx('hidden', 'md:block')} />
        </p>

      </ScrollReveal>

      {/* Párrafo de la historia */}
      <ScrollReveal delay={0.2} className={clsx('mt-12', 'md:mt-16', 'max-w-md', 'md:max-w-3xl', 'text-center', 'font-cormorant', 'text-sm', 'md:text-lg', 'tracking-widest', 'leading-relaxed', 'opacity-90', 'px-4', 'z-10')}>
        Todo comenzó con una mirada cómplice en una playa similar a esta, bajo el manto estrellado. No fue casualidad, fue el inicio de nuestro propio 'Quiero Contigo'. Desde aquel primer encuentro, cada ola y cada viaje han sido un paso más en nuestro camino compartido. Hoy, nos preparamos para el capítulo más importante: el resto de nuestras vidas.<br/><br/>¡Gracias por ser parte de nuestra historia!
      </ScrollReveal>

      {/* "Recorte" hacia la siguiente sección (LoveVerse, fondo #563b31) */}
      <TornDivider color="#d98b65" />
    </section>
  );
}