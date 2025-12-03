import React from 'react'

export default function WhoWeAre() {
  return (
    <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className=" leading-relaxed">
            We are a passionate team of developers, designers, and strategic
            thinkers delivering high-quality digital products. Our company
            focuses on blending creativity with cutting-edge technologies to
            create software that truly makes an impact.
          </p>
        </div>

        <div className=" p-6 rounded-xl border border-green-400 shadow-lg">
          <ul className="space-y-4">
            <li>✔ 3+ Years of Experience</li>
            <li>✔ Dedicated Full-Stack Development Team</li>
            <li>✔ Global Client Base</li>
            <li>✔ Software Tailored to Business Needs</li>
          </ul>
        </div>
      </section>

  )
}
