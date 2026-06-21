import clsx from "clsx";
export default function LoveVerse() {
  return (
    <section className={clsx('relative', 'w-full', 'py-20', 'px-8', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-[#563b31]', 'text-[#F6F1E9]', 'text-center', 'snap-always', 'snap-start')}>
      <p className={clsx('font-cormorant', 'text-lg', 'md:text-xl', 'leading-relaxed', 'tracking-wide', 'mb-4', 'max-w-2xl', 'opacity-90')}>
        El Amor Es Paciente, Es Bondadoso. El Amor No Es Envidioso Ni Jactancioso Ni Orgulloso... El Amor Todo Lo Sufre, Todo Lo Cree, Todo Lo Espera, Todo Lo Soporta.
      </p>
      <p className={clsx('font-pinyon', 'text-3xl', 'md:text-4xl', 'opacity-80')}>
        1 Corintios 13:4, 7
      </p>
    </section>
  );
}