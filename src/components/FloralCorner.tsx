import clsx from 'clsx';

interface FloralCornerProps {
  className?: string;
  flip?: boolean;
}

// Detalle floral en línea, reutilizable en cualquier sección.
// Usa "currentColor" para heredar el color de texto del contenedor,
// así se adapta automáticamente a fondos claros u oscuros.
export default function FloralCorner({ className, flip = false }: FloralCornerProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={clsx('pointer-events-none', 'select-none', flip && 'scale-x-[-1]', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
        <path d="M10 10 C 40 20, 60 45, 55 80 C 90 65, 120 75, 130 110" />
        <path d="M20 25 C 35 30, 45 45, 40 60" />
        <path d="M45 50 C 60 50, 70 65, 65 82" />
        <path d="M70 90 C 85 85, 100 95, 108 112" />
        <ellipse cx="35" cy="22" rx="9" ry="5" transform="rotate(-30 35 22)" fill="currentColor" opacity="0.5" />
        <ellipse cx="55" cy="42" rx="7" ry="4" transform="rotate(20 55 42)" fill="currentColor" opacity="0.4" />
        <ellipse cx="80" cy="70" rx="10" ry="5" transform="rotate(-15 80 70)" fill="currentColor" opacity="0.45" />
        <ellipse cx="110" cy="100" rx="8" ry="4" transform="rotate(35 110 100)" fill="currentColor" opacity="0.4" />
        <circle cx="30" cy="15" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="62" cy="58" r="3.5" fill="currentColor" opacity="0.5" />
        <circle cx="95" cy="88" r="3" fill="currentColor" opacity="0.45" />
      </g>
    </svg>
  );
}
