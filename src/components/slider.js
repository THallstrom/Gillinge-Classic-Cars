import Image from "next/image";
import cars from "/src/carImages.js";

function Slider() {
  const dubbel = [ ...cars, ...cars];
  return (
    <div className="bg-white w-full overflow-hidden p-3">
      <div className="relative flex overflow-hidden bg-white">
        <div className="flex animate-scroll-left gap-3">
          {dubbel.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={150}
              height={150}
              alt="picture of car"
              className="rounded-xl bg-white hover:shadow-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
