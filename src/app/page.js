"use client";

import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBanner from "./components/MainBanner";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Fixbn from "./components/Fixbn";
//import Canvas from "./components/Canvas";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <Fixbn />
      <main>
        <MainBanner />
        <Introduce />
        <Work />
        <Skill />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
