import React from 'react'
import { TECH_STACK } from './tech_stack_list'

export default function TechStack() {
    return (
        <main className='py-5'>
            <header className='text-center mb-8'>
                <h2 className='text-3xl font-semibold mb-5'><span className='border-t-3 border-green-500'>
                    Our <br /> </span>Tech Stack</h2>
                <div>
                    <ul className='flex justify-center gap-2'>
                        <li className='px-2'>All</li>
                        <li className='px-2'>Frontend</li>
                        <li className='px-2'>Backend</li>
                        <li className='px-2'>Database</li>
                        <li className='px-2'>Tools</li>
                    </ul>
                </div>
            </header>
            <section className='flex flex-wrap lg:w-1/2 md:w-2/3 w-full mx-auto justify-center gap-5'>
                {TECH_STACK.map((item) => (
                    <div key={item.name} className="flex justify-center items-center gap-5">
                        <item.icon className="text-5xl" style={{ color: item.color }} />
                        {/* <span>{item.name}</span> */}
                    </div>
                ))}
            </section>
        </main>
    )
}
