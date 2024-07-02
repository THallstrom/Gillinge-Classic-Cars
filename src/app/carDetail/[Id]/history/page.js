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
                <h1 className="block text-center sm:hidden">
                    {car.Brand} {car.Model}
                </h1>
                <div className="object-cover ">
                    <Image
                        src={car.Images.MainImage}
                        alt={`${car.Brand} ${car.Model}`}
                        width={500}
                        height={500}
                        className="w-full aspect-square object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="sm:w-1/2 pt-3">
                <div className="flex justify-between gap-3 sm:flex-col  lg:flex-row md:flex-wrap">
                    <Button info={{ link: `/carDetail/${car.Id}`, text: "Data" }}></Button>
                    <Button
                        info={{
                            link: `/carDetail/${car.Id}/history`,
                            text: "Historia",
                        }}></Button>
                        {/* <Button
                        info={{
                            link: `/cars`,
                            text: "Våra Bilar",
                        }}></Button> */}
                </div>
                <p>
                    {car.Brand} {car.Year}
                </p>
                <p>Model: {car.Model}</p>
                <p>Ägare: {car.MiscInfo.Owner}</p>
                <p>Inköpt: {car.MiscInfo.BoughtDate}</p>
                <p>Importerad: {car.MiscInfo.Imported}</p>
                <p>Info: {car.MiscInfo.Description}</p>
            </div>
        </div>
    );
}

export default Page;
