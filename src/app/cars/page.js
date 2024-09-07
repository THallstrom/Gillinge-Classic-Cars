import carData from "/public/json/carData.json";
import Image from "next/image";
import Link from "next/link";

function Page() {
    return (
        <main className="min-h-screen p-5">
                <p className="text-center">Våra bilar</p>
            <div className="grid gap-3 pt-6 justify-center w-full md:flex">
                {carData.map((car, index) => (
                    <div key={index} className="w-full md:w-auto">
                        <div className="min-h-72 max-h-72 w-full md:w-56 rounded-md p-3 hover:shadow-xl">
                            <Link href={`/carDetail/${car.Id}`} passHref>
                                <Image
                                    src={car.Images.MainImage}
                                    alt="Test bild"
                                    width={500}
                                    height={500}
                                    className="w-full h-56 object-cover rounded-md shadow-md"
                                />
                                <p className="text-center">
                                    {car.Brand} {car.Model}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Page;
