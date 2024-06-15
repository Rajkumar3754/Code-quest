import React from 'react'

import aboutimg from '../assets/about.png'

const About = () => {
  const config = {
    line1:'Hi,My name is Rajkumar.Im a Full stack web developer. I can built beautiful with React.js and Tailwinds Css',
    line2:'I am proficient in Frontend skills like React.js Redux,Redux Tool Kit,Axios,Tailwinds Css and many more',
    line3:'In backend I know Node.js,Express.js ,MongoDB,and Mongoose'
  }

  
  return (
    <section className='flex flex-col  md:flex-row bg-secondary px-5'id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={aboutimg} alt="" />
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5' >{config.line3}</p>
            </div>
        </div>
      
    </section>
  )
}

export default About
