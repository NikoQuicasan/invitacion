import clsx from "clsx";
export default function RsvpForm() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[80dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-20', 'bg-[#d18567]', 'text-[#F6F1E9]', 'text-center', 'px-4')}>
      
      {/* Mes */}
      <h2 className={clsx('font-pinyon', 'text-7xl', 'md:text-8xl', 'mb-8', 'drop-shadow-sm')}>
        Octubre
      </h2>

      {/* Estructura de la Fecha */}
      <div className={clsx('flex', 'items-center', 'justify-center', 'gap-6', 'md:gap-10', 'mb-16')}>
        
        {/* Día de la semana */}
        <div className={clsx('flex', 'flex-col', 'items-center')}>
          <div className={clsx('h-[1px]', 'w-20', 'md:w-28', 'bg-[#F6F1E9]/40', 'mb-3')}></div>
          <span className={clsx('font-cormorant', 'italic', 'text-3xl', 'md:text-4xl', 'tracking-wider')}>Sabado</span>
          <div className={clsx('h-[1px]', 'w-20', 'md:w-28', 'bg-[#F6F1E9]/40', 'mt-3')}></div>
        </div>
        
        {/* Número */}
        <span className={clsx('font-pinyon', 'text-7xl', 'md:text-8xl', 'px-2')}>22</span>
        
        {/* Año */}
        <div className={clsx('flex', 'flex-col', 'items-center')}>
          <div className={clsx('h-[1px]', 'w-20', 'md:w-28', 'bg-[#F6F1E9]/40', 'mb-3')}></div>
          <span className={clsx('font-cormorant', 'italic', 'text-3xl', 'md:text-4xl', 'tracking-wider')}>2026</span>
          <div className={clsx('h-[1px]', 'w-20', 'md:w-28', 'bg-[#F6F1E9]/40', 'mt-3')}></div>
        </div>

      </div>

      {/* Botón de Confirmación */}
      <button className={clsx('bg-[#6c4b39]', 'hover:bg-[#563b31]', 'text-[#F6F1E9]', 'font-montserrat', 'font-bold', 'text-xs', 'md:text-sm', 'tracking-widest', 'uppercase', 'px-12', 'py-4', 'rounded-full', 'transition-transform', 'hover:scale-105', 'shadow-xl')}>
        CONFIRMAR ASISTENCIA
      </button>

    </section>
  );
}