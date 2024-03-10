import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="box-border flex flex-col gap-y-12 justify-between items-center px-4 py-8 lg:px-16 pt-8 lg:pt-16 bg-[#232529] ">
      <Link
        href="/"
        className="logo flex justify-center items-center font-bold text-2xl"
      >
        <h1>Platform</h1>
        <Image width={24} height={24} src="/x.png" alt="Platform-X Brand" />
      </Link>

      <nav className="nav__links flex">
        <Link
          href="/"
          className="mx-2 text-[12px] md:text-[14px] lg:mx-4 text-white"
        >
          Home
        </Link>

        <Link
          href="/#speakers"
          className="mx-2 text-[12px] md:text-[14px] lg:mx-4 text-white"
        >
          Speakers
        </Link>

        <Link
          href="/#schedule"
          className="mx-2 text-[12px] md:text-[14px] lg:mx-4 text-white"
        >
          Schedule
        </Link>

        <Link
          href="/#about"
          className="mx-2 text-[12px] md:text-[14px] lg:mx-4 text-white"
        >
          About
        </Link>
      </nav>

      <div className="flex justify-center items-center gap-x-8">
        <Link href="https://www.instagram.com/theplatformxng?igsh=MXI1d3lpZzg2eGY2Yw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://x.com/ThePlatformXng?t=n9xBWHt0G2IwO8uMM_BIMw&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
          <FaFacebookF />
      </div>
    </div>
  );
};

export default Footer;
