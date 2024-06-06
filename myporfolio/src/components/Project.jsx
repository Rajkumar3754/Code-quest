import React from 'react';
import webimg1 from '../assets/ecommerce-websites.jpg';
import webimg2 from '../assets/food-ecommerce.jpg';
import webimg3 from '../assets/website-blog.jpg';

const Project = () => {
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='project'>
      <div className='w-full flex flex-col justify-center px-5  '>
        <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        <p>These are some of my best projects . I have built these with React ,MERN and vanilla Css.Check them  out</p>
      </div>

      <div className="w-full py-5">
        <div className="flex flex-col md:flex-row px-10 gap-5 justify-center">
          <div className="relative flex-shrink-0 w-[300px] h-[200px]">
            <img src={webimg1} className="w-full h-full object-cover" alt="Ecommerce Website" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 hover:opacity-100 duration-500 flex items-center justify-center">
              <p className="text-center">A Ecommerce Website. Built with MERN Stack</p>
            </div>
          </div>
          <div className="relative flex-shrink-0 w-[300px] h-[200px]">
            <img src={webimg2} className="w-full h-full object-cover" alt="Chatbot Website" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 hover:opacity-100 duration-500 flex items-center justify-center">
              <p className="text-center">Chatbot website Built with MERN stack</p>
            </div>
          </div>
          <div className="relative flex-shrink-0 w-[300px] h-[200px]">
            <img src={webimg3} className="w-full h-full object-cover" alt="Food Ecommerce Website" />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 hover:opacity-100 duration-500 flex items-center justify-center">
              <p className="text-center">Food-Ecommerce website with MERN Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
