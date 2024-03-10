import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {

  return (
    <header className="overflow-hidden px-4 pt-8 lg:pt-16">
      <Navbar />
      <div
        className={`h-[600px] w-full aspect-[4/3] px-4 md:px-0 flex flex-col text-center items-center justify-center  bg-[url("../../public/banner.png")] bg-cover bg-no-repeat md:bg-left bg-center`}
      >
        <div className="max-w-[500px] md:max-w-[650px] flex flex-col items-center justify-center">
          <h2 className="text-[55px] tracking-wide leading-[50px] md:text-[60px] lg:text-[70px] md:leading-[70px] font-bold">
            Influencer or Influenza
          </h2>
          <p className="opacity-75 leading-[25px] text-sm py-8">
            Join youths, thought leaders, tech enthusiasts and industry experts
            as we engage in thoughtful conversations on pressing societal
            issues, rooted in values and aiming for meaningful impact
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8WdAqQ48qdJ9uw5XH0nJygoChwcsqGic5OdMDMoRNGNt9nQ/viewform" target="_blank" rel="noopener noreferrer" className="px-4 mt-4 sm:px-8 py-2 text-sm md:text-base sm:py-4 hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#fa3f01] bg-[#fa3f01] text-white rounded-lg">
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
