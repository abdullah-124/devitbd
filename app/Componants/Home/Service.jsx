import React from 'react'
import { FaCode } from "react-icons/fa";
import Service_card from './Service_card';

const services = [
    {
        name: "Sass Product",
        description: "We build scalable, cloud-ready SaaS products with modern architecture and high performance.",
        icon: "FiLayers", // react-icons/fi
    },
    {
        name: "Code Optimization",
        description: "Optimize existing applications for speed, efficiency, and better performance.",
        icon: "FiTrendingUp",
    },
    {
        name: "Bug Fixing",
        description: "Identify, debug, and fix issues to ensure smooth and stable application performance.",
        icon: "FaBug", // react-icons/fa
    },
    {
        name: "Web Development",
        description: "Full-stack web development using modern frameworks like Next.js, React, and Django.",
        icon: "FiCode",
    },
    {
        name: "Software Maintenance",
        description: "Long-term support, updates, security patches, and performance monitoring.",
        icon: "FiTool",
    }
];
export default function Service() {
    return (
        <section className='py-5 px-5 md:px-10'>
            <div>
                <header className='text-center font-semibold'>
                    <h2 className='mb-10 text-2xl text-green-400 font-bold'>Service We Offer</h2>
                </header>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
                    {services.map((service, index) => (
                        <Service_card key={index} service={service}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
