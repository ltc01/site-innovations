import React from 'react';
import { useNavigate } from 'react-router-dom';
import Trending from '../Components/School/Trending'
import WhyUs from '../Components/School/WhyUs'
import SkillCatalog from '../Components/School/SkillCatalog'
import SliderHero from '../Components/School/SliderHero'
import TypewriterText from '../Components/School/TypewiterText'
import { Link } from 'react-router-dom'
import { InstructorSlider } from '../Components/School/InstructorSlider';


const School = () => {
  document.title = 'Baoiam - School'
  const navigate = useNavigate(); 

  const handleExploreCourses = () => {
    navigate('/ITIE'); 
  };

  return (
    <>
     <TypewriterText />
    <div className="pl-10 dark:bg-black dark:text-white p-4 bg-white text-black">
    <h2 className="text-3xl font-bold mb-5">Courses 
    <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
    </h2>
    
    <div className="flex pt-10 items-center justify-center p-6 w-fit mx-auto">
  <div className="flex flex-col-reverse lg:flex-row items-center mx-auto w-full">
    
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Welcome to Our School Courses
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6">
        Explore our wide range of courses designed to help you achieve your academic goals.
        Whether you're looking to improve your skills or start a new learning journey, 
        we have something for everyone.
      </p>
      <Link to={'/courses'} className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg">
        Explore Courses
      </Link>
    </div>

            <div className="h-96 md:h-full  md:w-[40%] pt-8 md:pt-0">
              <SliderHero />
            </div>
          </div>
        </div>
        <SkillCatalog />
        <Trending />
        <WhyUs />
        <InstructorSlider/>
      </div>
    </>
  );
};

export default School;
