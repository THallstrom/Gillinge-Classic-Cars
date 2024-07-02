import carData from "/public/json/carData.json";
import Image from "next/image";
import Link from "next/link";

function Page() {
    return (
        <main className="min-h-screen p-5">
            <p>Våra bilar</p>
            <div className="grid gap-5 pt-6 sm:flex">
                {carData.map((car, index) => (
                    <div key={index}>
                        <div className="min-h-72 max-h-72 w-56 rounded-md p-3 hover:shadow-xl">
                            <Link href={`/carDetail/${car.Id}`} passHref>
                                <Image
                                    src={car.Images.MainImage}
                                    alt="Test bild"
                                    width={500}
                                    height={500}
                                    className="h-56 w-56 object-cover rounded-md shadow-md"
                                />
                                {car.Brand} {car.Model}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Page;
