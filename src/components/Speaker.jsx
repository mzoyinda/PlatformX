import Image from 'next/image'
import React from 'react'

const speakerList = [
    {
        name: "TUNDE ONAKOYA",
        role: "Founder, Chess in slums ",
        url:"/1.png"
    },
    {
        name: "Id Cabasa",
        role: "CEO, Codetunes Africa",
        url:"/2.png"
    },
    {
        name: "JBUMS",
        role: "Founder, Shreddergang",
        url:"/3.png"
    },
    {
        name: "DR. FOY",
        role: "CEO, Energize Music ",
        url:"/4.png"
    }
]

const Speaker = () => {
    return (
      <section className='h-auto md:min-h-[600px] flex flex-col justify-start py-32 items-center bg-[#1C1E23] bg-cover bg-no-repeat'>
        <div className='w-[150px] mb-4 h-[3px] bg-[#fa3f01]' />
        <h3 className='text-3xl mb[-5px] '>Meet Our Speakers</h3>
        <div className="gallery mt-12 md:mt-24 flex flex-wrap justify-center md:flex-row md:items-center">
          {speakerList.map((speaker, index) => (
            <div key={index} className="photo text-center mx-4 mb-8 md:mb-0 mt-4">
              <Image
                src={`${speaker.url}`}
                alt="speaker"
                width={270}
                height={270}
                className='rounded-full'
              />
              <h3 className='font-bold text-lg md:text-xl uppercase mt-2'>{speaker.name}</h3>
              <p className="text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  

export default Speaker