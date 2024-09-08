"use client";

import carData from "/public/json/carData.json";
import Image from "next/image";
import { useState } from "react";

function Page(test) {
    const car = carData.find((car) => car.Id == test.params.Id);
    if (!car) {
        return <p>Car not found</p>;
    }

    const [selectedInfo, setSelectedInfo] = useState("Data");

    const handleButtonClick = (option) => {
        setSelectedInfo(option);
    };

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
            <div className="sm:w-1/2 pt-3 sm:px-3">
                <div className="flex justify-between gap-3 sm:flex-col  lg:flex-row md:flex-wrap">
                    {/* Snygga gärna till med en komponent istället för div */}
                    <div className="bg-main text-text-color text-center px-3 py-2 min-w-36 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main " onClick={() => (
                        handleButtonClick("Data")
                    )}>
                        Data
                    </div>
                    <div className="bg-main text-text-color text-center px-3 py-2 min-w-36 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main " onClick={() => (
                        handleButtonClick("test")
                    )}>
                        Historia
                    </div>
                </div>
                {selectedInfo === "Data" ? (
                    <>
                        <p>
                            {car.Brand} {car.Year}
                        </p>
                        <p>Model: {car.Model}</p>
                        <p>
                            Motor: {car.EngineInfo.Motor} {car.EngineInfo.Hp}{" "}
                            {car.EngineInfo.Volym}
                        </p>
                        <p>
                            Antal Tillverkade:{" "}
                            {car.MiscInfo.NumbersManufactured}
                        </p>
                        <p>Toppfart: {car.MiscInfo.TopSpeed}</p>
                    </>
                ) : (
                    <>
                        <p>
                            {car.Brand} {car.Year}
                        </p>
                        <p>Model: {car.Model}</p>
                        <p>Ägare: {car.MiscInfo.Owner}</p>
                        <p>Inköpt: {car.MiscInfo.BoughtDate}</p>
                        <p>Importerad: {car.MiscInfo.Imported}</p>
                        <p>Info: {car.MiscInfo.Description}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Page;