import React from 'react'

export default function AboutUsHeader() {
    return (
        < section className = "py-20 text-center " >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-green-400">Our Company</span>
        </h1>
        <p className=" max-w-2xl mx-auto text-lg">
          We build innovative software solutions that empower businesses to grow,
          scale, and succeed in the digital world.
        </p>
      </ section>
  )
}
