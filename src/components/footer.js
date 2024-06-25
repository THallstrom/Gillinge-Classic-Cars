import Link from "next/link";

function Footer() {
  return (
    <div className="bg-main text-text-color font-semibold grid justify-center md:grid-cols-footer text-lg py-2">
      <Link href="/" className="px-3">Logo</Link>
      <Link href="/" className="text-center hidden md:block">Gillinge Classic Cars</Link>
    </div>
  );
}

export default Footer;
