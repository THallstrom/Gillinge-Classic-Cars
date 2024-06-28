import { useRouter } from 'next/router';
import carData from "/public/json/carData.json";
import Image from 'next/image';

function Page() {
    const router = useRouter();
    const { id } = router.query;
    const car = carData.find((car) => car.Id == id);
    if (!car) {
        return <p>Car not found</p>;
    }

    return (
        <div>
            <h1>{car.Brand} {car.Model}</h1>
            {/* <Image 
                src={`/images/${car.Images[0]}`} 
                alt={`${car.Brand} ${car.Model}`} 
                width={500} 
                height={300} 
            /> */}
            <p>Year: {car.Year}</p>
            <p>Engine Info: {car.EngineInfo}</p>
            <p>Misc Info: {car.MiscInfo}</p>
        </div>
    );
}

export default Page;
