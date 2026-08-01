import { useState, useRef } from 'react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import RsvpForm from './components/RsvpForm';
import VerseMusic from './components/VerseMusic';
import LoveVerse from './components/LoveVerse';
import CountdownLocation from './components/CountdownLocation';
import HotelLocation from './components/HotelLocation';
import miCancion from './assets/musica.mp3';

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Se llama en el mismo click con el que se abre el sobre,
  // así el navegador permite el autoplay (requiere gesto del usuario).
  const handlePlayMusic = () => {
    audioRef.current?.play().catch(() => {
      // Si el navegador bloquea el autoplay por alguna razón, no rompemos nada.
    });
  };

  return (
    <>
      {/* Audio global de fondo, ya no hay reproductor visible */}
      <audio ref={audioRef} src={miCancion} loop />

      {/* Muestra la Intro por encima de todo. Cuando termina, cambia el estado a true */}
      {!isIntroDone && (
        <Intro
          onOpenComplete={() => setIsIntroDone(true)}
          onPlayMusic={handlePlayMusic}
        />
      )}

      {/* Contenido principal de la invitación */}
      <main
        id="main-scroll"
        className={`font-sans text-crema h-[100dvh] w-screen overflow-x-hidden no-scrollbar bg-[#F6F1E9] transition-opacity duration-1000 ${
          isIntroDone ? 'opacity-100 overflow-y-auto' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        <Hero />
        <VerseMusic />
        <HotelLocation />
        <Timeline />
        <DressCode />
        <Gifts />
        <CountdownLocation />
        <RsvpForm />
        <LoveVerse />

      </main>
    </>
  );
}

export default App;
