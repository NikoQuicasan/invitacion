import { Gift } from 'lucide-react';
import qrImg from '../assets/qr/qr.png';
import clsx from 'clsx';
export default function Gifts() {
  return (
    <section className={clsx('relative', 'w-full', 'py-24', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-[#d49b5d]', 'text-[#F6F1E9]', 'text-center', 'px-6')}>
      
      <h2 className={clsx('font-pinyon', 'text-6xl', 'md:text-7xl', 'mb-4', 'drop-shadow-sm')}>
        Lluvia De Sobres
      </h2>
      
      <p className={clsx('font-cormorant', 'text-xl', 'md:text-2xl', 'leading-relaxed', 'tracking-wide', 'mb-10', 'max-w-sm', 'opacity-90')}>
        Tu Presencia Es Nuestro Mejor Regalo, Pero Si Deseas Tener Un Detalle Con Nosotros...
      </p>

      {/* Ícono de regalo lineal */}
      <div className={clsx('mb-8', 'opacity-90')}>
        <Gift size={56} strokeWidth={1} />
      </div>

      {/* Contenedor del QR */}
      <div className={clsx('w-48', 'h-48', 'md:w-56', 'md:h-56', 'bg-transparent', 'border', 'border-[#F6F1E9]/30', 'rounded-lg', 'p-2', 'shadow-xl', 'flex', 'items-center', 'justify-center', 'overflow-hidden', 'hover:scale-105', 'transition-transform', 'duration-300')}>
        {/* Usamos el QR exportado. Si no lo encuentra, no rompe la página */}
        <img 
          src={qrImg} 
          alt="Código QR para Lluvia de Sobres" 
          className={clsx('w-full', 'h-full', 'object-cover', 'rounded')}
          onError={(e) => e.currentTarget.style.display = 'none'} 
        />
      </div>

    </section>
  );
}