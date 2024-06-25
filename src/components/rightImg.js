import Image from "next/image";
import img1 from '/public/images/porsche.png';
import Button from "./button";

function RightImg() {
    return ( 
        <div className="relative w-full object-cover">
            <Image src={img1} alt="nya bilen" className="w-full"/>
            <Button 
            info={{ link: "/about", text: "Om Oss"}}></Button>
        </div>
     );
}

export default RightImg;