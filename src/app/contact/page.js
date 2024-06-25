"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Edsel from "/public/images/Edsel.jpeg";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_pq629jd", "contact_form", form.current, {
                publicKey: "HE-AZx8JS3qIYmGb8",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="h-full relative">
            <Image
                src={Edsel}
                alt="test"
                className="w-full object-cover h-full"
            />
            <div className="absolute top-2/4 -translate-y-1/2 left-2/4 transform -translate-x-1/2">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col w-full h-full p-5 items-center justify-center backdrop-blur-[2px] rounded-lg text-lg font-semibold">
                    <div className="flex flex-col gap-3">

                        <input type="text" name="user_name" className="rounded-lg border-0
                        " placeholder="Name"/>

                        <input type="email" name="user_email" placeholder="Email" className="rounded-lg border-0
                        "/>

                        <textarea name="message" rows={6} placeholder="Message" className="rounded-lg border-0
                        "/>
                        <div className="flex py-3 justify-between">
                            <input
                                type="submit"
                                value="Skicka"
                                className="bg-main text-text-color px-3 py-2 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main"
                            />
                            <input
                                type="reset"
                                value="Töm Formulär"
                                className="bg-main text-text-color px-3 py-2 rounded-lg font-semibold border-text-color border hover:bg-text-color hover:text-main"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
