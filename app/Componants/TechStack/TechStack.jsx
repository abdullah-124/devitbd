'use client'
import React, { useEffect } from 'react'
import { TECH_STACK } from './tech_stack_list'

export default function TechStack() {
    const [category, setCategory] = React.useState("all");
    const [tech_stack, setTechStack] = React.useState(TECH_STACK);
    useEffect(() =>{
        const result = category === 'all' ? TECH_STACK : TECH_STACK.filter(tech => tech.category === category);
        setTechStack(result);
    }, [category])
    const categorys = ["all", "frontend", "backend", "database", "tools"];
    return (
        <main className='py-5'>
            <header className='text-center mb-10'>
                <h2 className='text-3xl font-semibold mb-5'><span className='border-t-3 border-green-500'>
                    Our <br /> </span>Tech Stack</h2>
                    {/* list of different categories */}
                <div>
                    <ul className='flex flex-wrap justify-center gap-2'>
                        {categorys.map((category) => (
                            <li onClick={()=> setCategory(category)} key={category} className='px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-green-400 hover:text-white transition'>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            {/* result of filtering  */}
            <section className='min-h-[200px] flex flex-wrap lg:w-1/2 md:w-2/3 w-full mx-auto justify-center items-start gap-5'>
                {tech_stack.map((item) => (
                    <div key={item.name} className="flex justify-center items-center gap-5">
                        <item.icon className="text-5xl" style={{ color: item.color }} />
                        {/* <span>{item.name}</span> */}
                    </div>
                ))}
            </section>
        </main>
    )
}
