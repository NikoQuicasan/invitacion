import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Rewind, FastForward, Heart, ListMusic } from 'lucide-react';
import proposalImg from '../assets/propuesta/propuesta.png'; 
import clsx from 'clsx';

// Importamos el archivo mp3 (Asegúrate de que el nombre coincida con tu archivo)
import miCancion from '../assets/musica.mp3'; 

export default function VerseMusic() {
  // Estado para saber si está sonando o no
  const [isPlaying, setIsPlaying] = useState(false);
  // Referencia al elemento de audio oculto
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={clsx('relative', 'w-full', 'min-h-[100dvh]', 'snap-always', 'snap-start', 'flex', 'flex-col', 'items-center', 'justify-center', 'px-6', 'py-12', 'bg-[#F6F1E9]', 'text-oliva-oscuro')}>
      
      {/* Reproductor de audio oculto */}
      <audio ref={audioRef} src={miCancion} loop />

      {/* Foto de la propuesta */}
      <div className={clsx('w-full', 'max-w-xs', 'md:max-w-sm', 'mb-8', 'shadow-xl')}>
        <img 
          src={proposalImg} 
          alt="Niko y Aleja" 
          className={clsx('w-full', 'h-auto', 'object-cover')}
        />
      </div>

      {/* Versículo */}
      <div className={clsx('text-center', 'max-w-md', 'mb-12')}>
        <h2 className={clsx('font-pinyon', 'text-5xl', 'mb-4')}>Génesis 2:24</h2>
        <p className={clsx('font-cormorant', 'text-lg', 'md:text-xl', 'leading-relaxed', 'tracking-wide', 'opacity-90')}>
          Por Eso El Hombre Dejara A Su Padre Y A Su Madre, Y Se Unira A Su Esposa, Y Los Dos Llegaran A Ser Un Solo Cuerpo.
        </p>
      </div>

      {/* Reproductor de Música UI */}
      <div className={clsx('w-full', 'max-w-xs', 'flex', 'flex-col', 'items-center')}>
        
        <div className={clsx('w-full', 'flex', 'items-center', 'justify-between', 'mb-6')}>
          <div className={clsx('flex-1', 'flex', 'items-center')}>
            <div className={clsx('w-2', 'h-2', 'rounded-full', 'bg-oliva-oscuro')}></div>
            <div className={clsx('h-[1px]', 'bg-oliva-oscuro', 'flex-1', 'ml-1', 'opacity-40')}></div>
          </div>
          <div className={clsx('flex', 'gap-3', 'ml-4', 'opacity-80')}>
            <ListMusic size={18} />
            <Heart size={18} className="fill-current" />
          </div>
        </div>

        {/* Controles de reproducción */}
        <div className={clsx('flex', 'items-center', 'gap-5', 'md:gap-6')}>
          <Rewind size={20} className={clsx('fill-current', 'opacity-70', 'hover:opacity-100', 'cursor-pointer')} />
          <SkipBack size={20} className={clsx('fill-current', 'opacity-70', 'hover:opacity-100', 'cursor-pointer')} />
          
          {/* Botón Play/Pause Gigante con la función onClick */}
          <div 
            onClick={togglePlay}
            className={clsx('w-14', 'h-14', 'bg-oliva-oscuro', 'text-[#F6F1E9]', 'rounded-full', 'flex', 'items-center', 'justify-center', 'shadow-lg', 'cursor-pointer', 'hover:scale-105', 'transition-transform')}
          >
            {isPlaying ? (
              <Pause size={24} className="fill-current" />
            ) : (
              <Play size={24} className={clsx('fill-current', 'ml-1')} />
            )}
          </div>
          
          <SkipForward size={20} className={clsx('fill-current', 'opacity-70', 'hover:opacity-100', 'cursor-pointer')} />
          <FastForward size={20} className={clsx('fill-current', 'opacity-70', 'hover:opacity-100', 'cursor-pointer')} />
        </div>
      </div>

    </section>
  );
}