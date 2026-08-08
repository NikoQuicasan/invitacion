import clsx from "clsx";
import ScrollReveal from './ScrollReveal';
import flor1 from '../assets/hotel/flor1.png';

export default function LoveVerse() {
  return (
    <section className={clsx('relative', 'w-full', 'py-24', 'px-8', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-[#563b31]', 'text-[#F6F1E9]', 'text-center', 'overflow-hidden')}>
      
      {/* Flores decorativas en las esquinas */}
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx('absolute', 'top-0', 'right-0', 'w-40', 'sm:w-48', 'md:w-60', 'h-auto', 'opacity-20', 'pointer-events-none', 'select-none', 'z-0', 'rotate-180')}
      />
      <img
        src={flor1}
        alt=""
        aria-hidden="true"
        className={clsx('absolute', 'bottom-0', 'left-0', 'w-40', 'sm:w-48', 'md:w-60', 'h-auto', 'opacity-20', 'pointer-events-none', 'select-none', 'z-0')}
      />

      <ScrollReveal className={clsx('relative', 'z-10', 'font-cormorant', 'text-lg', 'md:text-xl', 'leading-relaxed', 'tracking-wide', 'mb-4', 'max-w-2xl', 'opacity-90')}>
        El Amor Es Paciente, Es Bondadoso. El Amor No Es Envidioso Ni Jactancioso Ni Orgulloso... El Amor Todo Lo Sufre, Todo Lo Cree, Todo Lo Espera, Todo Lo Soporta.
      </ScrollReveal>
      <ScrollReveal delay={0.2} className={clsx('relative', 'z-10', 'font-pinyon', 'text-3xl', 'md:text-4xl', 'opacity-80')}>
        1 Corintios 13:4, 7
      </ScrollReveal>

    </section>
  );
}