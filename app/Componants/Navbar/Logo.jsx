import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='inline-flex items-center'>
      <Image src="/logo.png" alt="DevIT BD Logo" width={50} height={50} />
        <h2 className=' text-2xl font-bold'>DevIT BD</h2>
    </div>
  )
}

export default Logo