import Image from 'next/image'
import React from 'react'
import leading_trust from '@/public/images/leading_trust.png'

export default function Leading_slogan() {
    return (
        <section className='grid grid-cols-2 gap-5 items-center py-5'>
            <aside>
                <h2 className='text-4xl font-medium'>Leading companies trust us to <span className='font-semibold'>develop software</span></h2>
                <p className='py-5 text-sm w-[80%]'>We add development capacity to tech teams. Our value is not limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
            </aside>
            <aside>
                <Image className='rounded-xl' src={leading_trust} alt="Leading companies trust us" />
            </aside>
        </section>
    )
}
