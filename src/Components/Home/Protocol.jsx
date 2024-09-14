import React from 'react';
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";



const Protocol = () => {
  return (
    <>

      <div className='mt-[4rem]'><h1 className='text-[2rem] my-2 text-center font-bold'>Virtues and protocols <span className='text-indigo-600'>BAOIAM</span> works on</h1></div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-14 px-12'>

        <div className='flex flex-col items-center'>
          <MdOutlineSupportAgent className='text-[8rem] text-indigo-500' />
          <div className=' text-center p-2.5 lg:p-0'>
            <h2 className='font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2'>FULL-TIME SUPPORT</h2>
            <p className='text-sm tracking-tight'>Baoiam is the e-learning platform that focuses on the overall skill development of it's learners by furnishing courses in a variety of disciplines that can help anyone level their skills and pursue their passion. </p>
          </div>
        </div>


        <div className='flex flex-col items-center'>
          <FaChalkboardTeacher className='text-[7rem] text-indigo-500' />
          <div className=' text-center p-3'>
            <h2 className='font-bold lg:text-[1.1rem] sm:text-[1.2rem] my-2'>EXPERIENCED TRAINERS</h2>
            <p className='text-sm tracking-tight'>The guidance and expertise that the learners receives from the course is a lifetime experience. As our skilled trainers give their best to provide you with a remembering experience. </p>
          </div>
        </div>


        <div className='flex flex-col items-center'>
          <FaTabletScreenButton className='text-[7rem] pt-6  text-indigo-500' />
          <div className=' text-center p-3'>
            <h2 className='font-bold sm:text-[1.2rem] lg:text-[1.1rem] my-2 '>EASE OF USE</h2>
            <p className='text-sm tracking-tight'>The user-friendly interface and intuitive design of our platform make the finest learning experience. The platform is easy to navigate and understand, making it accessible to people of all age groups and backgrounds.  </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Protocol
