import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
<div className="box-border md:px-16 flex justify-between items-center">
    <Link href="/" className="logo flex justify-center items-center font-bold text-2xl"  >
        <h1>Platform</h1>
        <Image
            width={24}
            height={24}
            src="/x.png"
            alt='Platform-X Brand'
        />
    </Link>

    <nav className="nav__links hidden md:flex">
        <Link href="/" className="mx-2 lg:mx-4 text-white">
            Home
        </Link>
    
        <Link href="/#about" className="mx-2 lg:mx-4 text-white">
            About
        </Link>
       
        <Link href="/#speakers" className="mx-2 lg:mx-4 text-white">
            Speakers
        </Link>

        <Link href="/#schedule" className="mx-2 lg:mx-4 text-white">
            Schedule
        </Link>

    </nav>

    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8WdAqQ48qdJ9uw5XH0nJygoChwcsqGic5OdMDMoRNGNt9nQ/viewform" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-8 py-2 text-sm md:text-base sm:py-4 bg-transparent border-[1px] border-solid border-[#fa3f01] hover:bg-[#fa3f01] text-white rounded-lg">
    Register Now
</Link>

</div>
  )
}

export default Navbar