import heroImg from '../assets/banner/hero-banner.png';
import clsx from 'clsx';
import FloralCorner from './FloralCorner';
import TornDivider from './TornDivider';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className={clsx('relative', 'w-full', 'h-[100dvh]', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'overflow-hidden')}>

      <div
        className={clsx('absolute', 'inset-0', 'w-full', 'h-full', 'bg-cover', 'bg-center')}
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-b', 'from-black/45', 'via-black/15', 'to-black/55')} />

      <FloralCorner className={clsx('absolute', 'top-4', 'left-4', 'w-28', 'h-28', 'md:w-40', 'md:h-40', 'text-[#F6F1E9]/70', 'z-10')} />
      <FloralCorner className={clsx('absolute', 'bottom-4', 'right-4', 'w-28', 'h-28', 'md:w-40', 'md:h-40', 'text-[#F6F1E9]/70', 'z-10', 'scale-[-1]')} />

      <ScrollReveal start="top 95%" duration={1.4} className={clsx('relative', 'z-20', 'flex', 'flex-col', 'items-center', 'text-crema', 'mt-[-10vh]')}>
        <p className={clsx('font-cormorant', 'text-[#F6F1E9]', 'text-xl', 'md:text-2xl', 'tracking-widest', 'mb-2', 'drop-shadow-md')}>
          Guarda La Fecha
        </p>
        <h1 className={clsx('font-pinyon', 'text-[#F6F1E9]', 'text-7xl', 'md:text-8xl', 'drop-shadow-lg', 'mb-4')}>
          Niko Y Aleja
        </h1>

        <div className={clsx('flex', 'items-center', 'gap-3')}>
          <span className={clsx('h-[1px]', 'w-8', 'md:w-12', 'bg-[#F6F1E9]/60')} />
          <p className={clsx('font-cormorant', 'text-[#F6F1E9]', 'text-xl', 'md:text-2xl', 'tracking-[0.2em]', 'drop-shadow-md')}>
            24 - 10 - 2026
          </p>
          <span className={clsx('h-[1px]', 'w-8', 'md:w-12', 'bg-[#F6F1E9]/60')} />
        </div>
      </ScrollReveal>

      {/* "Recorte" hacia la siguiente sección (OurStory, fondo #F6F1E9) */}
      <TornDivider color="#F6F1E9" />
    </section>
  );
}