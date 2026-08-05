import clsx from 'clsx';
// Ajusta esta ruta a donde guardes el jarrón.png
import jarronImg from '../assets/itinerario/jarron.png';
import TornDivider from './TornDivider';
import ScrollReveal from './ScrollReveal';
const itinerary = [
  { time: '3:00 PM', title: 'Recepción', desc: 'Llegada de invitados, bienvenida y primer brindis.' },
  { time: '3:30 PM', title: 'Ceremonia', desc: 'Nuestros votos frente a familia y amigos.' },
  { time: '5:10 PM', title: 'El Sí Acepto', desc: 'El momento que estábamos esperando.' },
  { time: '6:10 PM', title: 'Cena', desc: 'Una cena para celebrar juntos.' },
  { time: '8:00 PM', title: 'Fiestuqui', desc: 'Música, baile y buena energía hasta tarde.' },
  { time: '2:00 AM', title: 'Salida', desc: 'Cierre de la celebración.' }
];

export default function Schedule() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'bg-[#F6F1E9]', 'text-[#4A3B32]', 'py-20', 'px-6', 'flex', 'justify-center', 'items-center', 'overflow-hidden')}>
      
      {/* Contenedor Grid Principal */}
      <div className={clsx('w-full', 'max-w-6xl', 'grid', 'grid-cols-1', 'md:grid-cols-12', 'gap-16', 'md:gap-12', 'lg:gap-24')}>
        
        {/* Columna Izquierda: Título, Fecha y Jarrón */}
        <ScrollReveal className={clsx('md:col-span-5', 'flex', 'flex-col', 'items-center', 'md:items-start', 'text-center', 'md:text-left')}>
          
          <div className={clsx('w-full')}>
            <h2 className={clsx('font-cormorant', 'text-5xl', 'md:text-6xl', 'lg:text-7xl', 'tracking-[0.15em]', 'uppercase', 'mb-3')}>
              Itinerario
            </h2>
            <p className={clsx('font-montserrat', 'text-xs', 'md:text-sm', 'tracking-[0.2em]', 'uppercase', 'opacity-70')}>
              24 de Octubre, 2026
            </p>
          </div>
          
          {/* El jarrón empujado hacia abajo en desktop para balancear el diseño */}
          <img 
            src={jarronImg} 
            alt="Ilustración Jarrón" 
            className={clsx('w-32', 'sm:w-40', 'md:w-56', 'mt-12', 'md:mt-32', 'opacity-90', 'select-none', 'pointer-events-none')}
          />

        </ScrollReveal>

        {/* Columna Derecha: Cronograma (Timeline) */}
        <div className={clsx('md:col-span-7', 'flex', 'flex-col', 'w-full')}>
          {itinerary.map((item, index) => (
            <ScrollReveal
              key={index}
              y={20}
              delay={index * 0.08}
              className={clsx(
                'flex', 'flex-col', 'sm:flex-row', 'items-start', 'py-6', 'md:py-8',
                // Agrega la línea divisoria a todos menos al último elemento
                index !== itinerary.length - 1 && 'border-b border-[#4A3B32]/15'
              )}
            >
              {/* Hora con ancho fijo para que todos los títulos queden perfectamente alineados */}
              <div className={clsx('sm:w-32', 'shrink-0', 'font-montserrat', 'font-bold', 'text-sm', 'md:text-base', 'tracking-widest', 'mb-2', 'sm:mb-0', 'sm:pt-1')}>
                {item.time}
              </div>
              
              {/* Contenido (Título y Descripción) */}
              <div className={clsx('flex', 'flex-col')}>
                <h3 className={clsx('font-cormorant', 'text-2xl', 'md:text-3xl', 'font-bold', 'tracking-wide', 'mb-2')}>
                  {item.title}
                </h3>
                <p className={clsx('font-cormorant', 'text-base', 'md:text-xl', 'opacity-80', 'leading-relaxed')}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* "Recorte" hacia la siguiente sección (DressCode, fondo #563b31) */}
      <TornDivider color="#563b31" />
    </section>
  );
}