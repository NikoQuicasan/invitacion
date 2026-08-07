import clsx from 'clsx';
import TornDivider from './TornDivider';
import ScrollReveal from './ScrollReveal';
import manImg from '../assets/dresscode/men.png';
import womanImg from '../assets/dresscode/woman.png';
import bgImg from '../assets/dresscode/fondo.png';

export default function DressCode() {
  // Paleta de colores exacta de la imagen
  const paletteColors = ['#D98353', '#747F58', '#FFDF98', '#B9AEC6', '#C7D4E6'];

  return (
    <section 
      className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-24', 'px-6', 'text-[#F6F1E9]', 'overflow-hidden', 'bg-cover', 'bg-center')}
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* Modelos laterales */}
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

      {/* Contenedor central con fondo marrón */}
      <div className={clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'w-full', 'max-w-xl', 'bg-[#4a3229]', 'p-10', 'rounded-3xl', 'shadow-2xl')}>

        {/* Título Principal */}
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
            <h3 className={clsx('font-cormorant', 'text-xl', 'md:text-2xl', 'tracking-widest', 'uppercase', 'mb-3')}>
              Hombres
            </h3>
            <p className={clsx('font-montserrat', 'text-[11px]', 'md:text-xs', 'leading-relaxed', 'opacity-80')}>
              Traje formal en tonos tierra o neutros, acompañado de camisa de vestir y, opcionalmente, corbata o corbatín.
            </p>
          </div>

          <div className={clsx('flex', 'flex-col', 'items-center', 'text-center')}>
            <h3 className={clsx('font-cormorant', 'text-xl', 'md:text-2xl', 'tracking-widest', 'uppercase', 'mb-3')}>
              Mujeres
            </h3>
            <p className={clsx('font-montserrat', 'text-[11px]', 'md:text-xs', 'leading-relaxed', 'opacity-80')}>
              Vestido largo o midi en tonos tierra, con opción de estampado floral. Por favor, reservamos el blanco y los tonos muy claros exclusivamente para la novia.
            </p>
          </div>
        </ScrollReveal>

        {/* Paleta de colores */}
        <ScrollReveal delay={0.3} className={clsx('flex', 'flex-col', 'items-center', 'w-full')}>
          <h3 className={clsx('font-cormorant', 'text-2xl', 'md:text-3xl', 'tracking-[0.15em]', 'uppercase', 'mb-8', 'text-center')}>
            Paleta de tonos
          </h3>

          <div className={clsx('flex', 'flex-wrap', 'justify-center', 'gap-4', 'md:gap-6', 'mb-8')}>
            {paletteColors.map((color, idx) => (
              <div
                key={idx}
                className={clsx('w-16', 'h-16', 'md:w-20', 'md:h-20', 'rounded-full', 'border-[3px]', 'border-[#F6F1E9]')}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <p className={clsx('font-montserrat', 'text-xs', 'md:text-sm', 'opacity-80', 'tracking-wide')}>
            Inspirada en tonos tierra, neutros y cálidos.
          </p>
        </ScrollReveal>

      </div>

      {/* "Recorte" hacia la siguiente sección */}
      <TornDivider color="#a36d35" />
    </section>
  );
}