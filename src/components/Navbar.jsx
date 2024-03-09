import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<div className="flex justify-between items-center px-4 lg:px-16 pt-8 lg:pt-16">
    <Link href="/" className="logo">
        <Image
            width={150}
            height={150}
            src="/platformx.png"
            alt='Platform-X Brand'
        />
    </Link>

    <nav className="nav__links hidden md:flex">
        <Link href="/" className="mx-2 lg:mx-4 text-white">
            Home
        </Link>
    
        <Link href="/#speakers" className="mx-2 lg:mx-4 text-white">
            Speakers
        </Link>

        <Link href="/#schedule" className="mx-2 lg:mx-4 text-white">
            Schedule
        </Link>

        <Link href="/#about" className="mx-2 lg:mx-4 text-white">
            About
        </Link>
    </nav>

    <button className="px-4 sm:px-8 py-2 sm:py-4 bg-transparent border-[1px] border-solid border-[#FF4204] text-white rounded-lg hover:bg-white hover:border-transparent hover:text-black">
    Register Now
</button>

</div>


  )
}

export default Navbar