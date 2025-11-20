"use client"

import Link from "next/link"
import { useState } from "react"

export default function NavMobile() {
  const [showLink, setShowLink] = useState(false)

  return (
    <>
      
      <div
        className="MopailDisplay text-white text-3xl cursor-pointer z-50 relative"
        onClick={() => setShowLink(!showLink)}
      >
        ☰
      </div>

     
      <div
        className={`absolute top-16 left-0 right-0 bg-amber-50 origin-top transition-transform duration-500 ease-in-out ${
          showLink ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start pl-12 gap-4 py-4 text-white bg-black">
           <Link href="#Home">
            <p className="link">Home</p>
            </Link>

            <Link href="#About">
            <p className="link">About Me</p>
            </Link>

            <Link href="#Skills">
            <p className=" link">My Skills</p>
            </Link>

            <Link href="#Services">
            <p className="link">My Services</p>
            </Link>

            <Link href="#Portfolio">
            <p className="link">Portfolio</p>
            </Link>

            <Link href="#Contact">
            <p className="link">Contact Me</p>
            </Link>
        </ul>
      </div>
    </>
  )
}