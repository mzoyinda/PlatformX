import React from "react";

const EventSchedule = () => {
  return (
    <section className="bg-[#1C1E23] h-auto md:min-h-[600px] flex flex-col justify-start py-32 items-center bg-cover bg-no-repeat">
      <div className="w-[150px] mb-4 h-[3px] bg-[#fa3f01]" />
      <h3 className="text-3xl mb[-5px] ">Event Schedule</h3>
      <div className="gallery mt-12 md:mt-24 flex flex-wrap justify-center md:flex-row md:items-center">
        <div className="container mx-auto px-4">
      <div className="flex w-full justify-center items-center flex-col gap-8">
    

        <div className="program px-4 sm:px-16 py-4 w-[80vw] max-w-[1000px] lg:w-[60vw] text-black flex col-reverse flex-col sm:flex-row sm:justify-between sm:items-center bg-white rounded-lg shadow-md">
          <p className="text-gray-600 font-bold mb-2">10:00 AM - 11:00 AM</p>
          <div>
          <h3 className="text-lg mb-4">Program 1 </h3>
          <p className="text-gray-800">Description of Program 1.</p>
          </div>
        </div>

        <div className="program px-4 sm:px-16 py-4 w-[80vw] max-w-[1000px] lg:w-[60vw] text-black flex col-reverse flex-col sm:flex-row sm:justify-between sm:items-center bg-white rounded-lg shadow-md">
          <p className="text-gray-600 font-bold mb-2">10:00 AM - 11:00 AM</p>
          <div>
          <h3 className="text-lg mb-4">Program 1 </h3>
          <p className="text-gray-800">Description of Program 1.</p>
          </div>
        </div>
        
      </div>
    </div>

      </div>
    </section>
  );
};

export default EventSchedule;
