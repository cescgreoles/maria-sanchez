import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 h-full flex flex-col p-20">
      <ul className="space-y-6">
        <li>
          <Link href="/" className="text-white underline text-lg">
            INCIO
          </Link>
        </li>
        <li>
          <Link href="/proyectos" className="text-white underline text-lg">
            PROYECTOS
          </Link>
        </li>
        <li>
          <Link href="/contactar" className="text-white underline text-lg">
            CONTACTAR
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
