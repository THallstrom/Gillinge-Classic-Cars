"use client";

import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TestPage() {
    const [carData, setCarData] = useState({
        Brand: "",
        Model: "",
        Year: "",
    });

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);  // Ny state för laddningsindikator

    // Funktion för att hantera ändringar i formulärfälten
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Funktion för att lägga till en bil till Firestore
    async function addCars(event) {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Cars"), {
                Brand: carData.Brand,
                Model: carData.Model,
                Year: parseInt(carData.Year),
            });
            console.log("Document written with ID: ", docRef.id);

            // Rensa formuläret efter att en bil har lagts till
            setCarData({
                Brand: "",
                Model: "",
                Year: "",
            });

            // Uppdatera listan med bilar efter att en ny bil har lagts till
            fetchCars();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // Funktion för att hämta bilar från Firestore
    async function GetCars() {
        try {
            const carsRef = collection(db, "Cars");
            const querySnapshot = await getDocs(carsRef);
            const carsList = [];

            querySnapshot.forEach((doc) => {
                carsList.push({ id: doc.id, ...doc.data() });
            });

            return carsList;
        } catch (e) {
            console.error("Error fetching cars: ", e);
            return [];  // Returnera en tom lista om det blir fel
        }
    }

    // Funktion för att hämta bilar och uppdatera state
    async function fetchCars() {
        const carData = await GetCars();
        setCars(carData);
        setLoading(false);  // Stäng av laddningsindikatorn efter hämtning
    }

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div>
            <h1>Test Page</h1>
            <form className="grid gap-3" onSubmit={addCars}>
                <input
                    type="text"
                    placeholder="Brand"
                    name="Brand"
                    value={carData.Brand}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Model"
                    name="Model"
                    value={carData.Model}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Year"
                    name="Year"
                    value={carData.Year}
                    onChange={handleChange}
                />
                <input type="submit" value="Send" className="bg-gray-500" />
            </form>

            <div>
                {loading ? (
                    <p>Loading cars...</p>
                ) : cars.length === 0 ? (
                    <p>No cars found in the collection.</p>
                ) : (
                    <ul>
                        {cars.map((car) => (
                            <li key={car.id}>
                                {car.Brand} - {car.Model} ({car.Year})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
