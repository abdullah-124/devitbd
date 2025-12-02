'use client';
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    return (
        <section className='py-10'>
            <div>
                <header className='text-center font-semibold'>
                    <h2 className='mb-10 text-2xl text-green-400 font-bold'>Services We Offer</h2>
                </header>
                <section className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {services.map((service, index) => (
                                    <Service_card service={service} key={index} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

