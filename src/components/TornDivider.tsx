import clsx from 'clsx';

interface TornDividerProps {
  color: string;
  flip?: boolean;
  className?: string;
}

export default function TornDivider({ color, flip = false, className }: TornDividerProps) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={clsx(
        'absolute', 'left-0', 'w-full', 'h-12', 'md:h-20', 'z-20', 'pointer-events-none',
        flip ? ['top-0', '-translate-y-px', 'rotate-180'] : ['bottom-0', 'translate-y-px'],
        className
      )}
    >
      <path
        d="M0,30 Q40,52 80,28 Q120,4 160,32 Q198,58 240,20 Q280,-2 320,35 Q358,58 400,22 Q440,0 480,30 Q518,54 560,16 Q600,-4 640,32 Q680,56 720,20 Q758,0 800,30 Q840,54 880,16 Q920,-4 960,32 Q1000,56 1040,20 Q1080,0 1120,30 Q1160,54 1200,24 L1200,60 L0,60 Z"
        fill={color}
      />
    </svg>
  );
}