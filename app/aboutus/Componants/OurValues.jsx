import React from 'react'
import { MdOutlineVerified } from "react-icons/md";

const values = [
    {
        title: "Innovation",
        description:
            "We continuously push boundaries to build modern, future-ready software solutions."
    },
    {
        title: "Collaboration",
        description:
            "We work closely with clients to understand their vision and deliver tailored results."
    },
    {
        title: "Excellence",
        description:
            "We maintain the highest standards to ensure quality, performance, and reliability."
    },
    {
        title: "Integrity",
        description:
            "We believe in honesty, transparency, and delivering on our promises every time."
    }
];

export default function OurValues() {
    return (
        <section className="py-10 mb-10">
            <h2 className="text-center text-2xl font-semibold text-green-500 mb-15">
                Our Values
            </h2>

            <div className="mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-5">


                {values.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-full h-auto w-full lg:w-[calc(100%+2rem)] mx-auto flex flex-col justify-center items-center text-center p-6 border border-green-300 shadow-lg shadow-green-300 bg-white"
                    >
                        <MdOutlineVerified className="w-10 h-10 text-green-400 mb-3" />

                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                        <p className="text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
