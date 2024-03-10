import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id='about' className="bg-[#1C1E23] w-full h-auto md:min-h-[600px] flex flex-col justify-start py-16 items-center bg-cover bg-no-repeat">
      <div className="flex flex-col lg:flex-row max-w-[1200px]">
      <h3 className="mb-10 font-semibold tracking-wide leading-[55px] self-center text-5xl lg:w-[30vw] mb[-5px] ">About <br/>  <span className="flex">Platform 
        <Image
            width={40}
            height={32}
            src="/x.png"
            alt='Platform-X Brand'
        /></span></h3>
      <div className="content px-7 lg:w-[50vw]">
      <p className="mb-8 font-light">
            Platform X stands as a youth movement, deeply rooted in value-driven perspectives on societal challenges. It represents a strategic disruption of mainstream views, elevating the voice of the youth to actively shape societal norms and reinforce ethical values. This platform is not just a forum; it&apos;s a catalyst for change, empowering young individuals to influence and mold a society that reflects sound ideals and principles.
          </p>
          <h3 className="text-xl font-bold mb-4">Vision & Mission</h3>
          <p className="text-[#ffffffd6] mb-8 font-light">
            Our mission is to empower and elevate young individuals by instilling value-based perspectives that provide direction and fortitude. We are committed to nurturing a resilient and enlightened generation, equipped with the wisdom necessary to make significant societal impacts. Our ultimate goal is to see a world where young people lead with purpose, guided by values that uplift and unite.
          </p>
          <h3 className="text-xl font-bold mb-4">Objectives</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="font-light text-[#ffffffd6]">Create a welcoming space for young individuals to connect and engage in meaningful conversations guiding them in the right direction.</li>
            <li className="font-light text-[#ffffffd6] my-2">Inspire and encourage young participants to actively manifest God&apos;s Kingdom in their lives and communities.</li>
            <li className="font-light text-[#ffffffd6]">Inspire and encourage young participants to actively become instruments of divine influence.</li>
          </ul>
      </div>
      </div>
    
    </section>
  );
};

export default About;
