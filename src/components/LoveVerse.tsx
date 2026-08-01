import clsx from "clsx";
import FloralCorner from './FloralCorner';

export default function LoveVerse() {
  return (
    <section className={clsx('relative', 'w-full', 'py-24', 'px-8', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-[#563b31]', 'text-[#F6F1E9]', 'text-center', 'overflow-hidden')}>
      <FloralCorner className={clsx('absolute', 'top-4', 'left-4', 'w-20', 'h-20', 'text-[#F6F1E9]/25')} />
      <FloralCorner className={clsx('absolute', 'bottom-4', 'right-4', 'w-20', 'h-20', 'text-[#F6F1E9]/25', 'scale-[-1]')} />

      <p className={clsx('relative', 'z-10', 'font-cormorant', 'text-lg', 'md:text-xl', 'leading-relaxed', 'tracking-wide', 'mb-4', 'max-w-2xl', 'opacity-90')}>
        El Amor Es Paciente, Es Bondadoso. El Amor No Es Envidioso Ni Jactancioso Ni Orgulloso... El Amor Todo Lo Sufre, Todo Lo Cree, Todo Lo Espera, Todo Lo Soporta.
      </p>
      <p className={clsx('relative', 'z-10', 'font-pinyon', 'text-3xl', 'md:text-4xl', 'opacity-80')}>
        1 Corintios 13:4, 7
      </p>
    </section>
  );
}
