import clsx from 'clsx';
import proposalImg from '../assets/propuesta/propuesta.png';

// Creamos un componente SVG pequeño para no ensuciar el JSX principal.
// Usa 'currentColor' para que herede el color del texto y la opacidad de Tailwind.
const BranchSVG = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="0.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tallo principal */}
    <path d="M 90 90 Q 50 60 10 10" />
    {/* Hoja 1 */}
    <path d="M 50 60 C 30 50 20 20 40 30 C 50 40 60 50 50 60 Z" />
    {/* Hoja 2 */}
    <path d="M 25 35 C 10 20 10 0 30 10 C 35 20 30 30 25 35 Z" />
    {/* Hoja 3 */}
    <path d="M 70 55 C 80 30 100 20 90 50 C 85 60 75 60 70 55 Z" />
  </svg>
);

export default function OurStory() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 'px-6', 'py-20', 'bg-[#F6F1E9]', 'text-[#4A5D23]', 'overflow-hidden')}>

      {/* Fila: texto — foto — texto */}
      <div className={clsx('flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-center', 'gap-10', 'md:gap-16', 'lg:gap-24', 'w-full', 'max-w-6xl', 'z-10')}>

        <p className={clsx('md:flex-1', 'text-center', 'md:text-right', 'font-cormorant', 'text-2xl', 'md:text-4xl', 'lg:text-5xl', 'tracking-[0.15em]', 'uppercase', 'leading-snug')}>
          Nuestra<br className={clsx('hidden', 'md:block')} /> Historia
        </p>

        {/* Contenedor central: Foto + Ramitas SVG */}
        <div className={clsx('relative', 'flex-shrink-0')}>
          
          {/* Ramita Izquierda (Abajo) */}
          <BranchSVG 
            className={clsx(
              'absolute', 'w-24', 'md:w-36', 
              'right-[75%]', 'bottom-0', 'md:-bottom-5', 
              'opacity-30', 'pointer-events-none', 'z-0',
              '-scale-x-100', 'rotate-12' // La invertimos y rotamos un poco
            )}
          />
          
          {/* Ramita Derecha (Arriba) */}
          <BranchSVG 
            className={clsx(
              'absolute', 'w-24', 'md:w-36', 
              'left-[75%]', 'top-0', 'md:-top-5', 
              'opacity-30', 'pointer-events-none', 'z-0',
              'rotate-[190deg]' // La rotamos para que apunte hacia el lado contrario
            )}
          />

          {/* Foto estilo Polaroid (con la 'sombrita') */}
          <div className={clsx(
            'relative', 'z-10', 
            'w-64', 'md:w-80', 'lg:w-[26rem]', 'aspect-[3/4]', 
            'bg-white', 'p-3', 'md:p-4', 'pb-12', 'md:pb-16', 
            'shadow-[15px_15px_20px_rgba(0,0,0,0.15)]', 
            '-rotate-2' 
          )}>
            <img
              src={proposalImg}
              alt="Niko y Aleja"
              className={clsx('w-full', 'h-full', 'object-cover')}
            />
          </div>
        </div>

        <p className={clsx('md:flex-1', 'text-center', 'md:text-left', 'font-cormorant', 'text-2xl', 'md:text-4xl', 'lg:text-5xl', 'tracking-[0.15em]', 'uppercase', 'leading-snug')}>
          (Como<br className={clsx('hidden', 'md:block')} /> Pareja)
        </p>

      </div>

      {/* Párrafo de la historia */}
      <p className={clsx('mt-16', 'md:mt-24', 'max-w-md', 'md:max-w-2xl', 'text-center', 'font-cormorant', 'text-sm', 'md:text-base', 'tracking-widest', 'leading-relaxed', 'opacity-90')}>
        Todo comenzó con una mirada cómplice en una playa similar a esta, bajo el
        <br className="hidden md:block"/>
        manto estrellado. No fue casualidad, fue el inicio de nuestro propio
        <br className="hidden md:block"/>
        'Quiero Contigo'. Desde aquel primer encuentro, cada ola y cada viaje han
        <br className="hidden md:block"/>
        sido un paso más en nuestro camino compartido. Hoy, nos preparamos para
        <br className="hidden md:block"/>
        el capítulo más importante: el resto de nuestras vidas.
        <br className="hidden md:block"/>
        ¡Gracias por ser parte de nuestra historia!
      </p>

    </section>
  );
}