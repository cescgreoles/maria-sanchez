import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

type Proyecto = {
  id: number;
  img: string;
  descripcion: string;
};

const proyectosPorAño: Record<number, Proyecto[]> = {
  2019: [
    { id: 1, img: "/photo1.JPG", descripcion: "Descripción del proyecto A1" },
    { id: 2, img: "/photo2.JPG", descripcion: "Descripción del proyecto A2" },
    { id: 3, img: "/photo3.JPG", descripcion: "Descripción del proyecto A3" },
    { id: 4, img: "/photo1.JPG", descripcion: "Descripción del proyecto A4" },
    { id: 5, img: "/photo2.JPG", descripcion: "Descripción del proyecto A5" },
    { id: 6, img: "/photo3.JPG", descripcion: "Descripción del proyecto A6" },
  ],

  2020: [
    { id: 1, img: "/photo1.JPG", descripcion: "Descripción del proyecto B1" },
    { id: 2, img: "/photo2.JPG", descripcion: "Descripción del proyecto B2" },
    { id: 3, img: "/photo3.JPG", descripcion: "Descripción del proyecto B3" },
    { id: 4, img: "/photo1.JPG", descripcion: "Descripción del proyecto B4" },
    { id: 5, img: "/photo2.JPG", descripcion: "Descripción del proyecto B5" },
    { id: 6, img: "/photo3.JPG", descripcion: "Descripción del proyecto B6" },
  ],
  2021: [
    { id: 1, img: "/photo1.JPG", descripcion: "Descripción del proyecto C1" },
    { id: 2, img: "/photo2.JPG", descripcion: "Descripción del proyecto C2" },
    { id: 3, img: "/photo3.JPG", descripcion: "Descripción del proyecto C3" },
    { id: 4, img: "/photo1.JPG", descripcion: "Descripción del proyecto C4" },
    { id: 5, img: "/photo2.JPG", descripcion: "Descripción del proyecto C5" },
    { id: 6, img: "/photo3.JPG", descripcion: "Descripción del proyecto C6" },
  ],
  2022: [
    { id: 1, img: "/photo1.JPG", descripcion: "Descripción del proyecto D1" },
    { id: 2, img: "/photo2.JPG", descripcion: "Descripción del proyecto D2" },
    { id: 3, img: "/photo3.JPG", descripcion: "Descripción del proyecto D3" },
    { id: 4, img: "/photo1.JPG", descripcion: "Descripción del proyecto D4" },
    { id: 5, img: "/photo2.JPG", descripcion: "Descripción del proyecto D5" },
    { id: 6, img: "/photo3.JPG", descripcion: "Descripción del proyecto D6" },
  ],
  2023: [
    { id: 1, img: "/photo1.JPG", descripcion: "Descripción del proyecto E1" },
    { id: 2, img: "/photo2.JPG", descripcion: "Descripción del proyecto E2" },
    { id: 3, img: "/photo3.JPG", descripcion: "Descripción del proyecto E3" },
    { id: 4, img: "/photo1.JPG", descripcion: "Descripción del proyecto E4" },
    { id: 5, img: "/photo2.JPG", descripcion: "Descripción del proyecto E5" },
    { id: 6, img: "/photo3.JPG", descripcion: "Descripción del proyecto E6" },
  ],
};

const Proyectos: React.FC = () => {
  return (
    <div className="container mx-auto px-4 bg-black text-white">
      <header className="flex justify-between items-center py-8">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            className="h-12 w-12 mr-4"
            width={48}
            height={48}
          />
          <h1 className="text-2xl lg:text-4xl">PROYECTOS</h1>
        </div>

        <Link href="/" className="text-white text-1xl uppercase">
          <span className="block lg:hidden">
            <FaTimes className="text-2xl" />
          </span>

          <span className="hidden lg:block">CERRAR</span>
        </Link>
      </header>

      <main className="mt-10">
        {Object.keys(proyectosPorAño).map((año) => (
          <section
            key={año}
            className="mb-8 flex justify-around w-full h-full border-b-2 border-white"
          >
            <h2 className="text-2xl mb-4 mr-4">{año}</h2>
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4  w-full ">
              {proyectosPorAño[Number(año)].map((proyecto) => (
                <div
                  key={proyecto.id}
                  className=" p-4 flex items-center w-full"
                >
                  <Image
                    src={proyecto.img}
                    alt={`Imagen del proyecto ${proyecto.id}`}
                    className="w-100 h-32 mr-2" // Reducir el margen derecho si es necesario
                    width={200}
                    height={128}
                  />
                  <p className="text-xl p-1">{proyecto.id}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Proyectos;
