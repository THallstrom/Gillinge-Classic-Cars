import Link from "next/link";

function ButtonDetail({ info }) {
  return (
    <Link
      href={info.link}
      className="bg-main text-text-color text-center px-3 py-2 min-w-36 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main ">
      {info.text}
    </Link>
  );
}

export default ButtonDetail;
