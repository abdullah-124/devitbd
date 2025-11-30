import React from 'react'
import { FiLayers, FiTrendingUp, FiCode, FiTool } from "react-icons/fi";
import { FaBug } from "react-icons/fa";

export default function Service_card({ service }) {
    const iconMap = {
        FiLayers: FiLayers,
        FiTrendingUp: FiTrendingUp,
        FiCode: FiCode,
        FiTool: FiTool,
        FaBug: FaBug,
    };
    const Icon = iconMap[service.icon];
    return (
        <div className='border border-green-400 hover:border-green-700 p-5 rounded-md transition-all duration-500 flex-1'>
            <div className='text-2xl border text-green-400 inline-block p-1 rounded-full'>
                <Icon />
            </div>
            <h3 className='text-base font-bold mb-2'>{service.name}</h3>
            <p className='text-sm'>{service.description}</p>
        </div>
    )
}
