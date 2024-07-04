import React from 'react'

import Resumeimg from '../assets/resume.jpg'

const Contact = () => {
  const config ={
    ref:"If you want to discuss more in detail.please contact me",
    email:"u.rajkumar2001@gmail.com",
    phone:"9360550686"
  }
  return (
    <section className='flex flex-col bg-primary px-5 py-32  text-white ' id='contact'>

     

        <div className=' flex flex-col items-center'>
          
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>{config.ref} </p>
            <p><span className='font-bold py-2'>Email:</span>{config.email}</p>
            <p><span className='font-bold py-2'>Phone:</span>{config.phone}</p>
            
            </div>
        
      
    </section>
  )
}

export default Contact
