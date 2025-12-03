'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navlink({href, title}) {
    const pathname = usePathname();
    const active = pathname == href ? true : false;
  return (
    <Link href={href} className={`link ${active && "active"}`}>{title}</Link>
  )
}
