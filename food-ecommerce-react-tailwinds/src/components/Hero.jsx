import React from 'react';

const Hero = () => {
  return (
    <div className='relative w-full h-[500px]'> {/* Removed px-4 for padding */}
      <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-center'> {/* Changed items-start to items-center for centering text */}
        {/* Overlay */}
        <div className='text-white text-center'> {/* Removed text-left for center alignment */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
            The <span className='text-yellow-500'>Best</span>
          </h1>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>
            <span className='text-yellow-500'>Foods</span> <span>Delivered</span>
          </h1>
        </div>
      </div>
      <div className='w-full h-full overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Food delivery'
        />
      </div>
    </div>
  );
};

export default Hero;
