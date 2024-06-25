import Image from "next/image";
import img1 from '/public/images/onkar.svg';
import Button from "./button";

function LeftImg() {
    return ( 
        <div className="relative w-full">
            <Image src={img1} alt="nya bilen" className="w-full h-full"/>
            <Button 
            info={{ link: "/contact", text: "Kontakt"}}></Button>
        </div>
     );
}

export default LeftImg;