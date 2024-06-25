import Image from "next/image";
import img1 from "/public/images/hyundai.svg";
import Button from "./button";

function UpperImg() {
  return (
    <div className="w-full object-cover relative">
      <Image src={img1} alt="testar"></Image>
      <Button info={{ link: "/cars", text: "Våra Bilar" }} />
    </div>
  );
}

export default UpperImg;
