import clsx from "clsx";
import FloralCorner from './FloralCorner';

// Vector: Línea ornamental elegante para las fechas
const OrnamentalLineSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 15" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 7.5 L40 7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
    <path d="M60 7.5 L100 7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
    <path d="M50 3 L53 7.5 L50 12 L47 7.5 Z" fill="currentColor" opacity="0.8"/>
  </svg>
);

// Vector: Adorno botánico para la base de la invitación
const BottomFlourishSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ramas curvas principales */}
    <path d="M150 80 Q150 40 90 20 C 70 10 40 15 10 40" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
    <path d="M150 80 Q150 40 210 20 C 230 10 260 15 290 40" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
    
    {/* Detalles centrales */}
    <circle cx="150" cy="70" r="2.5" fill="currentColor" opacity="0.5"/>
    <circle cx="150" cy="55" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="150" cy="45" r="1" fill="currentColor" opacity="0.3"/>
    
    {/* Hojitas sutiles */}
    <path d="M110 30 C 115 20 125 25 120 35 Z" fill="currentColor" opacity="0.25"/>
    <path d="M190 30 C 185 20 175 25 180 35 Z" fill="currentColor" opacity="0.25"/>
    <path d="M60 25 C 65 15 75 18 70 28 Z" fill="currentColor" opacity="0.2"/>
    <path d="M240 25 C 235 15 225 18 230 28 Z" fill="currentColor" opacity="0.2"/>
  </svg>
);

export default function RsvpForm() {
  return (
    <section className={clsx(
      'relative', 'w-full', 'min-h-[60dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 
      'py-24', 'bg-[#d18567]', 'text-[#F6F1E9]', 'text-center', 'px-4', 'overflow-hidden'
    )}>

      {/* Esquinas florales que ya tenías */}
      <FloralCorner className={clsx('absolute', 'top-4', 'left-4', 'w-16', 'md:w-20', 'h-auto', 'text-[#F6F1E9]/25')} />
      <FloralCorner className={clsx('absolute', 'top-4', 'right-4', 'w-16', 'md:w-20', 'h-auto', 'text-[#F6F1E9]/25', 'scale-x-[-1]')} />

      {/* Adorno base que enmarca el botón desde abajo */}
      <BottomFlourishSVG className={clsx('absolute', 'bottom-0', 'left-1/2', '-translate-x-1/2', 'w-full', 'max-w-xl', 'h-auto', 'pointer-events-none', 'z-0')} />

      {/* Mes */}
      <h2 className={clsx('relative', 'z-10', 'font-pinyon', 'text-7xl', 'md:text-8xl', 'mb-6', 'drop-shadow-sm')}>
        Octubre
      </h2>

      {/* Estructura de la Fecha (Día - Número - Año) */}
      <div className={clsx('relative', 'z-10', 'flex', 'items-center', 'justify-center', 'gap-4', 'md:gap-8', 'mb-16')}>

        {/* Día de la semana */}
        <div className={clsx('flex', 'flex-col', 'items-center', 'w-24', 'md:w-32')}>
          <OrnamentalLineSVG className={clsx('w-16', 'md:w-24', 'h-auto', 'mb-3')} />
          {/* Le añadí la tilde a Sábado para mayor elegancia ortográfica */}
          <span className={clsx('font-cormorant', 'italic', 'text-2xl', 'sm:text-3xl', 'md:text-4xl', 'tracking-wider')}>
            Sábado
          </span>
          <OrnamentalLineSVG className={clsx('w-16', 'md:w-24', 'h-auto', 'mt-3')} />
        </div>

        {/* Número central gigante */}
        <span className={clsx('font-pinyon', 'text-7xl', 'sm:text-8xl', 'md:text-9xl', 'px-2', 'drop-shadow-md', 'leading-none')}>
          24
        </span>

        {/* Año */}
        <div className={clsx('flex', 'flex-col', 'items-center', 'w-24', 'md:w-32')}>
          <OrnamentalLineSVG className={clsx('w-16', 'md:w-24', 'h-auto', 'mb-3')} />
          <span className={clsx('font-cormorant', 'italic', 'text-2xl', 'sm:text-3xl', 'md:text-4xl', 'tracking-wider')}>
            2026
          </span>
          <OrnamentalLineSVG className={clsx('w-16', 'md:w-24', 'h-auto', 'mt-3')} />
        </div>

      </div>

      {/* Botón de Confirmación */}
      <a 
        href='https://wa.link/tps9wa' 
        target='_blank' 
        rel='noreferrer' 
        className={clsx(
          'relative', 'z-10', 'bg-[#5a3a2a]', 'hover:bg-[#432a1e]', // Tonos marrón oscuro elegantes
          'text-[#F6F1E9]', 'font-montserrat', 'font-bold', 
          'text-xs', 'md:text-sm', 'tracking-[0.2em]', 'uppercase', 
          'px-10', 'md:px-14', 'py-4', 'md:py-5', 'rounded-full', 
          'transition-all', 'duration-300', 'hover:scale-105', 'shadow-2xl', 
          'border', 'border-[#F6F1E9]/10'
        )}
      >
        Confirmar Asistencia
      </a>

    </section>
  );
}