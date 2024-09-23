"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";
import Navbar from "@/components/Navbar";

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
      <div className="absolute top-0 left-0 p-10">
        <h1 className="text-5xl text-white ">MARIA TORRECILLAS</h1>
        <p className="text-2xl text-white">FOTOGRAFÍA</p>
      </div>

      <div className="flex justify-center items-center h-full">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="w-1/2"
        />
      </div>

      {/* Navbar a la derecha */}
      <Navbar />
    </div>
  );
};

export default Inicio;
