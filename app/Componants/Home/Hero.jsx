import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
      <main className='sm:p-10 p-5 flex gap-5 flex-col md:flex-row justify-center items-center'>
        <div className='order-1 md:order-2 w-full md:w-1/2'>
          <h3 className=' text-5xl'>
            Great <span className='text-green-400'>Product</span> is
            <span className='font-bold'> built by great</span> <span className='text-green-400'>teams</span>
          </h3>
          <p className='my-7 md:pe-10'>We help build and manage a team of world-class developers to bring your vision to life</p>
          <button className='btn'>Lets Talk</button>
        </div>
        <div className='order-1 md:order-2'>
          <Image
            width={500}
            height={500}
            src="/images/hero.png"
          />
        </div>
      </main>
    </section>
  )
}

export default Hero