import carData from "/public/json/carData.json";
import Image from "next/image";
import Link from "next/link";

function Page() {
    return (
        <main className="min-h-screen p-24">
            <p>Våra bilar</p>
            <div className="flex gap-12 pt-6">
                {carData.map((car, index) => (
                    <div key={index}>
                        <Link href={`/carDetail/${car.Id}`} passHref>
                            <div className="">
                                <Image
                                    src={car.Images.MainImage}
                                    alt="Test bild"
                                    width={500}
                                    height={500}
                                    className="h-auto w-auto"
                                />
                            </div>
                            {car.Brand} {car.Model}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Page;
