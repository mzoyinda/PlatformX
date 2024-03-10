import React from "react";

const EventSchedule = () => {
  return (
    <section className="bg-[#1C1E23] h-auto md:min-h-[600px] flex flex-col justify-start py-32 items-center bg-cover bg-no-repeat">
      <div className="w-[150px] mb-4 h-[3px] bg-[#fa3f01]" />
      <h3 className="text-3xl mb[-5px] ">Event Schedule</h3>
      <div className="gallery mt-12 md:mt-24 flex flex-wrap justify-center md:flex-row md:items-center">
        {/* <h2>Coming Soon...</h2> */}

        <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Event Schedule</h2> */}
      <div className="flex flex-col gap-8">
        <div className="program bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">Program 1</h3>
          <p className="text-gray-600 mb-4">Time: 10:00 AM - 11:00 AM</p>
          <p className="text-gray-800">Description of Program 1.</p>
        </div>
   
      </div>
    </div>

      </div>
    </section>
  );
};

export default EventSchedule;
