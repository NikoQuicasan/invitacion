import clsx from 'clsx';
import flor1 from '../assets/hotel/flor1.png';
import TornDivider from './TornDivider';
import ScrollReveal from './ScrollReveal';
// Ajusta estas rutas a donde guardes las imágenes de los modelos (exportadas de Figma sin fondo)
import manImg from '../assets/dresscode/men.png';
import womanImg from '../assets/dresscode/woman.png';

// Ícono floral centrado para las columnas — mismo estilo de trazo que
// FloralCorner pero pensado para ir centrado sobre un título, no en una esquina.
function FloralIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M50 115 L50 55" />
        <path d="M50 90 C 35 85, 30 70, 38 58" />
        <path d="M50 75 C 65 70, 70 55, 62 42" />
        <ellipse cx="50" cy="35" rx="10" ry="16" fill="currentColor" opacity="0.15" />
        <ellipse cx="35" cy="45" rx="9" ry="14" transform="rotate(-35 35 45)" fill="currentColor" opacity="0.15" />
        <ellipse cx="65" cy="45" rx="9" ry="14" transform="rotate(35 65 45)" fill="currentColor" opacity="0.15" />
        <circle cx="50" cy="32" r="4" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}

export default function DressCode() {
  // Tonos extraídos de tu imagen de referencia
  const paletteColors = ['#D98353', '#747F58', '#FFDF98', '#B9AEC6', '#C7D4E6'];

  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-24', 'px-6', 'bg-[#563b31]', 'text-[#F6F1E9]', 'overflow-hidden')}>

      {/* Flores decorativas: esquina superior derecha e inferior izquierda */}
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx('absolute', 'top-0', 'right-0', 'w-40', 'sm:w-48', 'md:w-60', 'h-auto', 'opacity-80', 'pointer-events-none', 'select-none', 'z-0', 'rotate-180')}
      />
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx('absolute', 'bottom-0', 'left-0', 'w-40', 'sm:w-48', 'md:w-60', 'h-auto', 'opacity-80', 'pointer-events-none', 'select-none', 'z-0')}
      />

      {/* Modelos laterales (ocultos en mobile, visibles desde tablet/desktop) */}
      <img
        src={manImg}
        alt="Traje Hombre"
        className={clsx('hidden', 'md:block', 'absolute', 'left-0', 'lg:left-10', 'bottom-0', 'h-[75vh]', 'lg:h-[85vh]', 'w-auto', 'object-contain', 'z-0', 'pointer-events-none')}
      />
      <img
        src={womanImg}
        alt="Vestido Mujer"
        className={clsx('hidden', 'md:block', 'absolute', 'right-0', 'lg:right-10', 'bottom-0', 'h-[75vh]', 'lg:h-[85vh]', 'w-auto', 'object-contain', 'z-0', 'pointer-events-none')}
      />

      {/* Contenedor central, sobre los modelos y las flores */}
      <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'w-full', 'max-w-xl')}>

        {/* Título */}
        <ScrollReveal y={20} className={clsx('text-center', 'mb-12', 'md:mb-16')}>
          <h2 className={clsx('font-cormorant', 'text-4xl', 'md:text-5xl', 'tracking-[0.2em]', 'uppercase')}>
            Código De Vestimenta
          </h2>
          <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'opacity-70', 'uppercase', 'mt-4')}>
            Formal / Elegante
          </p>
        </ScrollReveal>

        {/* Columnas: Hombres / Mujeres */}
        <ScrollReveal delay={0.15} className={clsx('w-full', 'grid', 'grid-cols-2', 'gap-8', 'md:gap-16', 'mb-20')}>
          <div className={clsx('flex', 'flex-col', 'items-center', 'text-center')}>
            <FloralIcon className={clsx('w-10', 'h-12', 'md:w-12', 'md:h-14', 'mb-4', 'text-[#F6F1E9]/60')} />
            <h3 className={clsx('font-cormorant', 'text-xl', 'md:text-2xl', 'tracking-widest', 'uppercase', 'mb-3')}>
              Hombres
            </h3>
            <p className={clsx('font-montserrat', 'text-[11px]', 'md:text-xs', 'leading-relaxed', 'opacity-80', 'max-w-[200px]')}>
              Traje formal en tonos tierra o neutros, camisa de vestir y, si gustan, corbata o corbatín.
            </p>
          </div>

          <div className={clsx('flex', 'flex-col', 'items-center', 'text-center')}>
            <FloralIcon className={clsx('w-10', 'h-12', 'md:w-12', 'md:h-14', 'mb-4', 'text-[#F6F1E9]/60')} />
            <h3 className={clsx('font-cormorant', 'text-xl', 'md:text-2xl', 'tracking-widest', 'uppercase', 'mb-3')}>
              Mujeres
            </h3>
            <p className={clsx('font-montserrat', 'text-[11px]', 'md:text-xs', 'leading-relaxed', 'opacity-80', 'max-w-[200px]')}>
              Vestido largo o midi en tonos tierra, evitando el blanco y los tonos muy claros.
            </p>
          </div>
        </ScrollReveal>

        {/* Paleta de colores */}
        <ScrollReveal delay={0.3} className={clsx('flex', 'flex-col', 'items-center', 'w-full')}>
          <h3 className={clsx('font-cormorant', 'text-2xl', 'md:text-3xl', 'tracking-[0.15em]', 'uppercase', 'mb-8', 'text-center')}>
            Paleta de tonos tierra sugerida
          </h3>

          <div className={clsx('flex', 'flex-wrap', 'justify-center', 'gap-4', 'md:gap-6', 'mb-8')}>
            {paletteColors.map((color, idx) => (
              <div
                key={idx}
                className={clsx('w-16', 'h-16', 'md:w-20', 'md:h-20', 'rounded-full', 'border-[3px]', 'border-[#F6F1E9]', 'shadow-lg')}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <p className={clsx('font-montserrat', 'text-xs', 'md:text-sm', 'opacity-80', 'tracking-wide')}>
            Inspirada en tonos tierra, neutros y cálidos.
          </p>
        </ScrollReveal>

      </div>

      {/* "Recorte" hacia la siguiente sección (Gifts, fondo #a36d35) */}
      <TornDivider color="#a36d35" />
    </section>
  );
}
