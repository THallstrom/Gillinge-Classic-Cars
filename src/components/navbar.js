import Link from "next/link";
import HamburgerMenu from "./hamburgermenu";

function Navbar() {
  return (
    <div className="bg-main text-text-color font-semibold text-lg h-12">
      <ul className="flex py-2 md:justify-around items-center">
        <HamburgerMenu />
        <Link href="/" className="block text-center w-full md:hidden">Gillinge Custom Cars</Link>
        <Link href="/" className="hidden md:block ">Hem</Link>
        <Link href="/cars" className="hidden md:block">Våra bilar</Link>
        <Link href="/about" className="hidden md:block">Om Oss</Link>
        <Link href="/contact" className="hidden md:block">Kontakt</Link>
        <Link href="/testpage" className="hidden md:block">Test</Link>
      </ul>
    </div>
  );
}

export default Navbar;
