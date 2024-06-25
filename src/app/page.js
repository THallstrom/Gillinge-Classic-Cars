import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import Image from "next/image";
import UpperImg from "@/components/upperImg";
import LeftImg from "@/components/leftImg";
import RightImg from "@/components/rightImg";
import img1 from "/public/images/bellair.png";

export default function Home() {
  return (
    <div className="flex w-full flex-grow overflow-auto flex-col items-center m-0 p-0 bg-white">
      {/* <Slider/> */}
      <Image src={img1} alt="En till bil..." className="w-full"/>
      <UpperImg />
      <div className="w-full flex flex-col lg:flex-row object-cover">
        <LeftImg />
        <RightImg />
      </div>
    </div>
  );
}
