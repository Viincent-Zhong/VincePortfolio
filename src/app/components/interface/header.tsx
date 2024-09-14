'use client'

import Image from "next/image"

export default function Header() {
    return (
      <div className="w-full h-24 bg-slate-700 opacity-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 grid-rows-1">
        {/* Logo */}
        <div className="relative col-start-1 col-span-1 row-start-1 row-span-1">
          <Image src="/images/logo.png" alt="Logo" fill={true} sizes="w-full h-full" className="p-4"/>
        </div>
        {/* Translation */}
        <div className="row-start-1 row-span-1 col-start-4 md:col-start-6 lg:col-start-10 col-span-1">
          <h1 className="bg-slate-300 w-full h-full">Translate</h1>
        </div>
      </div>
    )
}