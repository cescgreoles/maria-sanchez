"use client";

import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const images = ["./photo1.JPG", "./photo2.JPG", "./photo3.jpg"];

const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute top-10 left-10">
        <h1 className="text-2xl lg:text-4xl text-white">MARIA TORRECILLAS</h1>
        <p className="text-lg lg:text-xl text-white">FOTOGRAFÍA</p>
      </div>

      <div className="flex justify-center items-center h-full">
        <Image src={logo} alt="logo" className="w-12" />
      </div>

      <Navbar />
    </div>
  );
};

export default Inicio;
