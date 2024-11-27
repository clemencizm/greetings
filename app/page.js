'use client';
import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Gift from "./components/sections/Gift";
import { useState } from 'react';


export default function Home() {
  const [state, setState] = useState('start')
  return (
    <main>
      <NavBar />
      {state === 'start' && (
        <HeroSection showGift={() => setState('show-gift')} />
      )}
      {state === 'show-gift' && (
        <>
          <HeroSection showGift={() => setState('show-gift')} />
          <Gift />
        </>
      )}
      <Footer />
    </main>
  );
}
