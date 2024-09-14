import React from 'react';
import { GoGear, GoProjectRoadmap, GoGlobe } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const How = () => {
  return (
    <>
      <div className="flex justify-center my-4">
        <div className="w-[80%] xl:w-[85%] text-center">
          <h1 className="text-[2rem] my-5 font-bold">How we <span className="text-indigo-600">Work?</span></h1>
          <p className="mx-auto w-full lg:w-[80%]">We create high-quality courses mentored by experts, offering full-time support, live corporate training, placement help, and networking opportunities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 w-full px-10 mt-10 mb-[4rem] mx-auto">
        <IconBox
          icon={<GoGear />}
          title="Expert Guidance"
          text="Boost your confidence with guidance from top experts." />
        <IconBox
          icon={<IoPeopleOutline />}
          title="Community Support"
          text="Join discussions and share ideas with a supportive community." />
        <IconBox
          icon={<GoProjectRoadmap />}
          title="Live Projects"
          text="Gain practical knowledge by working on live corporate projects." />
        <IconBox
          icon={<HiOutlineRocketLaunch />}
          title="Placement Help"
          text="Learn interview skills and land top jobs with our guidance." />
        <IconBox
          icon={<GoGlobe />}
          title="Networking & Funding"
          text="Enhance networking and secure financial aid for your business." />
      </div>
    </>
  );
};

const IconBox = ({ icon, title, text }) => (
  <div className="text-center my-2">
    <div className="text-[3rem] flex justify-center mb-4">
      <div className="rounded-full p-3 text-indigo-600 border-2 border-indigo-600">{icon}</div>
    </div>
    <h2 className="text-nowrap text-lg font-bold mb-2">{title}</h2>
    <p className='text-sm tracking-tight'>{text}</p>
  </div>
);

export default How;
