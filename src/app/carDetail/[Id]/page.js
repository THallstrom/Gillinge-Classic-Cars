"use client";

import { usePathname } from "next/navigation";
import carData from "/public/json/carData.json";
import Image from "next/image";
import Button from "@/components/buttonDetail";

function Page(test) {
    const car = carData.find((car) => car.Id == test.params.Id);
    if (!car) {
        return <p>Car not found</p>;
    }
    return (
        <div className="p-3 flex flex-col w-full sm:flex-row">
            <div className="sm:w-1/2">
            <h1 className="block sm:hidden">
                    {car.Brand} {car.Model}
                    Data
                </h1>
                <div className="w-58 h-58 ">
                    <Image
                        src={car.Images.MainImage}
                        alt={`${car.Brand} ${car.Model}`}
                        width={500}
                        height={500}
                        className="w-auto rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="sm:w-1/2 pt-3 sm:px-3">
                <div className="flex justify-between gap-3 sm:flex-col  lg:flex-row md:flex-wrap">
                    <Button
                        info={{
                            link: `/carDetail/${car.Id}`,
                            text: "Data",
                        }}></Button>
                    <Button
                        info={{
                            link: `/carDetail/${car.Id}/history`,
                            text: "Historia",
                        }}></Button>
                    <Button
                        info={{
                            link: `/cars`,
                            text: "Våra Bilar",
                        }}></Button>
                </div>
                <p>
                    {car.Brand} {car.Year}
                </p>
                <p>Model: {car.Model}</p>
                <p>
                    Motor: {car.EngineInfo.Motor} {car.EngineInfo.Hp}{" "}
                    {car.EngineInfo.Volym}
                </p>
                <p>Antal Tillverkade: {car.MiscInfo.NumbersManufactured}</p>
                <p>Toppfart: {car.MiscInfo.TopSpeed}</p>
            </div>
        </div>
    );
}

export default Page;

// "MiscInfo": {
//             "NumbersManufactured": "7839",
