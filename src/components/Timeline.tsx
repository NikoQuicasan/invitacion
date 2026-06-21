import { Wine, Church, Heart, ConciergeBell, PartyPopper, Clock } from 'lucide-react';
import clsx from 'clsx';
export default function Timeline() {
  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'py-20', 'bg-[#F6F1E9]', 'text-oliva-oscuro', 'overflow-hidden')}>
      
      <h2 className={clsx('font-pinyon', 'text-5xl', 'md:text-6xl', 'mb-16', 'drop-shadow-sm', 'text-center')}>
        Itinerario De Actividades
      </h2>

      <div className={clsx('relative', 'w-full', 'max-w-sm', 'md:max-w-md', 'mx-auto', 'px-4')}>
        
        {/* Línea central continua */}
        <div className={clsx('absolute', 'left-1/2', 'top-4', 'bottom-4', 'w-[1px]', 'bg-oliva-oscuro/40', '-translate-x-1/2')}></div>

        {/* 1. Recepción */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full', 'mb-12')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'text-right', 'pr-4', 'md:pr-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>Recepcion</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>3:00 PM</p>
          </div>
          <div className={clsx('w-[45%]', 'pl-4', 'md:pl-8', 'flex', 'justify-start', 'opacity-80')}>
            <Wine size={36} strokeWidth={1} />
          </div>
        </div>

        {/* 2. Ceremonia */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full', 'mb-12')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'pr-4', 'md:pr-8', 'flex', 'justify-end', 'opacity-80')}>
            <Church size={36} strokeWidth={1} />
          </div>
          <div className={clsx('w-[45%]', 'text-left', 'pl-4', 'md:pl-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>Ceremonia</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>3:30 PM</p>
          </div>
        </div>

        {/* 3. El Sí Acepto */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full', 'mb-12')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'text-right', 'pr-4', 'md:pr-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>El Sí Acepto</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>5:10 PM</p>
          </div>
          <div className={clsx('w-[45%]', 'pl-4', 'md:pl-8', 'flex', 'justify-start', 'opacity-80')}>
            <Heart size={36} strokeWidth={1} />
          </div>
        </div>

        {/* 4. Cena */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full', 'mb-12')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'pr-4', 'md:pr-8', 'flex', 'justify-end', 'opacity-80')}>
            <ConciergeBell size={36} strokeWidth={1} />
          </div>
          <div className={clsx('w-[45%]', 'text-left', 'pl-4', 'md:pl-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>Cena</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>6:10 PM</p>
          </div>
        </div>

        {/* 5. Fiestuqui */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full', 'mb-12')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'text-right', 'pr-4', 'md:pr-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>Fiestuqui</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>6:10 PM</p>
          </div>
          <div className={clsx('w-[45%]', 'pl-4', 'md:pl-8', 'flex', 'justify-start', 'opacity-80')}>
            <PartyPopper size={36} strokeWidth={1} />
          </div>
        </div>

        {/* 6. Salida */}
        <div className={clsx('relative', 'flex', 'items-center', 'justify-between', 'w-full')}>
          <div className={clsx('absolute', 'left-1/2', 'w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro', '-translate-x-1/2')}></div>
          <div className={clsx('w-[45%]', 'text-right', 'pr-4', 'md:pr-8')}>
            <h3 className={clsx('font-pinyon', 'text-4xl', 'md:text-5xl')}>Salida</h3>
            <p className={clsx('font-montserrat', 'text-[10px]', 'md:text-xs', 'tracking-widest', 'mt-1', 'opacity-80', 'uppercase')}>7:00 PM</p>
          </div>
          <div className={clsx('w-[45%]', 'pl-4', 'md:pl-8', 'flex', 'justify-start', 'opacity-80')}>
            <Clock size={36} strokeWidth={1} />
          </div>
        </div>

      </div>
    </section>
  );
}