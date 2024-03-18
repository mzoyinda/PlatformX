import Image from "next/image";
import React from "react";

const programs = [
  {
    name: "WELCOME ADDRESSS",
    time: "10:00 AM - 10:05 AM",
  },
  {
    name: "WELCOME PRESENTATION",
    time: "10:05 AM - 10:25 AM",
  },
  {
    name: "INTRODUCTION OF SPEAKERS [4X]",
    time: "10:25 AM - 10:30 AM",
  },
  {
    name: "SPEAKER SESSION - [TEDX STYLE- 4X]",
    time: "10:30 AM - 1:20 AM",
  },
  {
    name: "WORSHIP & PRAYER",
    time: "1:20 AM - 1:50 AM",
  },
  {
    name: "ANNOUNCEMENTS",
    time: "1:50 AM - 1:55 AM",
  },
  {
    name: "NETWORKING & CLOSING REMARK",
    time: "1:55 AM - 2:00 AM",
  },
];
const EventSchedule = () => {
  return (
    <section
      id="schedule"
      className="bg-[#1C1E23] w-full h-auto md:min-h-[600px] flex flex-col justify-start py-24 md:py-32 items-center bg-cover bg-no-repeat"
    >
      <div className="w-[150px] mb-4 h-[3px] bg-[#fa3f01]" />
      <h3 className="text-3xl mb[-5px] ">Event Schedule</h3>
      <div className="gallery mt-12 md:mt-24 flex flex-wrap justify-center md:flex-row md:items-center">
        <div className="container md:flex justify-center items-center mx-auto px-4">
          <Image
          width={200}
          height={200}
          alt="coming soon"
          src="/csoon.png"
          className='rounded-full mr-8'
          />
            
            <h3 className="-ml-8 mt-4 md:ml-0 md:mt-0 center font-semibold text-[20px] capitalize">stay tuned for more details..</h3>
            {/* <div className="flex w-full justify-center items-center flex-col gap-8">
           {programs.map((program, index)=>{
   return(
     <div key={index} className="program pl-8 pr-2 sm:px-16 py-4 w-[80vw] max-w-[1000px] lg:w-[60vw] flex col-reverse flex-col sm:flex-row sm:justify-between sm:items-center bg-[#42454ce4] text-white rounded-lg shadow-md">
          <p className="text-[#aeafb1] font-bold mb-2">{program.time}</p>
          <div className="w-full max-w-[350px] text-left">
          <h3 className="text-lg opacity-80 font-bold mb-4">{program.name} </h3>
          <p className="text-gray-800">Description of Program 1.</p>
          </div>
        </div>
        )})} 
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
