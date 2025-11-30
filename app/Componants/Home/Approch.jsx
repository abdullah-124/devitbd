import React from 'react'
import {
    FiSearch,
    FiPenTool,
    FiCode,
    FiCheckCircle,
    FiUploadCloud,
    FiTool
} from "react-icons/fi";

const developmentApproach = [
    {
        name: "Planning & Research",
        description:
            "We analyze requirements and create a clear roadmap for successful development.",
        icon: FiSearch
    },
    {
        name: "UI/UX Design",
        description:
            "Designing visually appealing and user-friendly interfaces for better engagement.",
        icon: FiPenTool
    },
    {
        name: "Development",
        description:
            "Building fast, scalable, and maintainable applications using modern technologies.",
        icon: FiCode
    },
    {
        name: "Testing & QA",
        description:
            "Ensuring every feature works smoothly with manual and automated testing.",
        icon: FiCheckCircle
    },
    {
        name: "Deployment",
        description:
            "Releasing applications using CI/CD pipelines for efficient and reliable deployment.",
        icon: FiUploadCloud
    },
    {
        name: "Maintenance & Support",
        description:
            "Providing long-term improvements, monitoring, and technical support.",
        icon: FiTool
    }
];

export default function Approch() {
    return (
        <main className='px-5 md:px-10 py-5'>
            <section>
                <header className='mb-10 max-w-[400px] mx-auto'>
                    <h3 className='text-2xl text-center text-green-400 font-bold'>Our design and
                        development approach</h3>
                </header>
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        {developmentApproach.map((approach, index) => (
                            <div key={index} className="border border-gray-300 p-4 rounded-md">
                                <div className='mb-3'>
                                    <approach.icon className="text-4xl text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">{approach.name}</h4>
                                    <p>{approach.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}
