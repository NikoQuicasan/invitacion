import qrImg from '../assets/qr/qr.jpg';
import clsx from 'clsx';
import FloralCorner from './FloralCorner';
import ScrollReveal from './ScrollReveal';
import flor1 from '../assets/hotel/flor1.png';
// Ícono de sobre personalizado con sello de cera e iniciales
function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Contorno del sobre */}
        <rect x="5" y="5" width="110" height="70" rx="2" />
        {/* Solapas */}
        <path d="M5 5 L60 45 L115 5" />
        <path d="M5 75 L45 45" />
        <path d="M115 75 L75 45" />
      </g>
      {/* Sello de cera (el fill debe coincidir con el fondo de la tarjeta) */}
      <circle cx="60" cy="45" r="14" fill="#c48a4a" stroke="currentColor" strokeWidth="1.5" />
      {/* Detalle interno del sello */}
      <circle cx="60" cy="45" r="11" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      {/* Iniciales */}
      <text x="60.5" y="48" fontSize="9" textAnchor="middle" fill="currentColor" fontFamily="serif" letterSpacing="0.5">
        N&amp;A
      </text>
    </svg>
  );
}

export default function Gifts() {
  return (
    
    <section className={clsx(
      'relative', 'w-full', 'min-h-[100dvh]', 'flex', 'items-center', 'justify-center', 
      'py-16', 'px-4', 'md:px-8', 
      'bg-[#a36d35]', // Fondo exterior (ligeramente más oscuro para contrastar)
      'overflow-hidden'
    )}>
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

      {/* Tarjeta Central que simula la invitación física */}
      <ScrollReveal y={50} className={clsx(
        'relative', 'w-full', 'max-w-2xl', 
        'bg-[#c48a4a]', // Color principal de la tarjeta
        'text-[#F6F1E9]', 'text-center', 
        'py-16', 'md:py-20', 'px-6', 'md:px-12', 
        'shadow-2xl', 'flex', 'flex-col', 'items-center'
      )}>

        {/* Esquinas Florales de la Tarjeta */}
        <FloralCorner className={clsx('absolute', 'top-5', 'left-5', 'w-16', 'h-16', 'md:w-20', 'md:h-20', 'text-[#F6F1E9]/30')} />
        <FloralCorner className={clsx('absolute', 'bottom-5', 'right-5', 'w-16', 'h-16', 'md:w-20', 'md:h-20', 'text-[#F6F1E9]/30', 'scale-[-1]')} />

        <h2 className={clsx('relative', 'z-10', 'font-pinyon', 'text-5xl', 'md:text-7xl', 'mb-6', 'drop-shadow-sm')}>
          Lluvia De Sobres
        </h2>

        <p className={clsx('relative', 'z-10', 'font-cormorant', 'text-lg', 'md:text-2xl', 'leading-relaxed', 'tracking-wide', 'mb-10', 'max-w-md', 'opacity-90')}>
          Tu Presencia Es Nuestro Mejor Regalo, Pero Si Deseas Tener Un Detalle Con Nosotros...
        </p>

        {/* Ícono de Sobre */}
        <EnvelopeIcon className={clsx('w-24', 'md:w-32', 'h-auto', 'mb-10', 'text-[#F6F1E9]/90')} />

        {/* Contenedor del QR con marco decorativo (doble borde) */}
        <div className={clsx(
          'relative', 'z-10', 'mb-10',
          'border-double', 'border-4', 'border-[#F6F1E9]/50', 'rounded-sm', 'p-3',
          'hover:scale-105', 'transition-transform', 'duration-300', 'shadow-lg'
        )}>
          <p>NEQUI</p>
          <div className={clsx('w-32', 'h-32', 'md:w-44', 'md:h-44','p-2')}>
            <img
              src={qrImg}
              alt="Código QR"
              className={clsx('w-full', 'h-full', 'object-contain')}
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
        </div>

        {/* Datos Bancarios Opcionales */}
        <div className={clsx('relative', 'z-10', 'font-montserrat', 'text-[9px]', 'md:text-[11px]', 'opacity-80', 'tracking-widest', 'uppercase')}>
          <p className="mb-2">O si lo prefieres, por transferencia:</p>
          <p>
            Bancolombia / Cuenta: 229-000042-62 / Titular: Nikolas Quicasan
          </p>
        </div>

      </ScrollReveal>

    </section>
  );
}