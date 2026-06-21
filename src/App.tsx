import { useState } from 'react';
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
import PolaroidGallery from './components/PolaroidGallery';

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <>
      {/* Muestra la Intro por encima de todo. Cuando termina, cambia el estado a true */}
      {!isIntroDone && <Intro onOpenComplete={() => setIsIntroDone(true)} />}

      {/* Contenido principal de la invitación */}
<main 
        id="main-scroll"
        className={`font-sans text-crema h-[100dvh] w-screen overflow-x-hidden no-scrollbar bg-[#F6F1E9] transition-opacity duration-1000 ${
          isIntroDone ? 'opacity-100 overflow-y-scroll snap-y snap-mandatory' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        <Hero />
        <VerseMusic />
        <LoveVerse />
        <CountdownLocation />
        <HotelLocation />
        <PolaroidGallery />
        <Timeline />
        <DressCode />
        <Gifts />
        <RsvpForm />
      </main>
    </>
  );
}

export default App;