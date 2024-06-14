import React from "react";

const Headline = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid gap-6 md:grid-cols-3 sm:grid-cols-1">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl text-white flex flex-col justify-center items-center p-4">
          <p className="text-center text-2xl font-bold px-2 pt-4 ">Sun's Out, BOGO's Out</p>
          <p className="text-center">Through 8/26</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mt-2 rounded-lg focus:outline-none ">Order Now</button>
        </div>
        {/* Image */}
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
        />
      </div>
      {/* cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl text-white flex flex-col justify-center items-center p-4">
          <p className="text-center text-2xl font-bold px-2 pt-4 ">We Deliver Desserts Too </p>
          <p className="text-center">Tasty Treats</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mt-2 rounded-lg focus:outline-none ">Order Now</button>
        </div>
        {/* Image */}
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
        />
      </div>


       {/* cards */}
       <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl text-white flex flex-col justify-center items-center p-4">
          <p className="text-center text-2xl font-bold px-2 pt-4 ">New Restaurants </p>
          <p className="text-center">Addded Daily</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mt-2 rounded-lg focus:outline-none ">Order Now</button>
        </div>
        {/* Image */}
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
        />
      </div>
      
    </div>
  );
};

export default Headline;
