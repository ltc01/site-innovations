import { useEffect } from "react";
import { Advertiseteam } from "../Components/OurTeam Components/Advertiseteam";
import { LeadershipTeam } from "../Components/OurTeam Components/LeadershipTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import { WebDevTeam } from "../Components/OurTeam Components/WebDevTeam";
import JoinUs from "../Components/OurTeam Components/JoinUs";

export const OurTeam = () => {
  document.title = 'Baoiam - Our Team'
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { };
  }, []);

  return (
    <div className=" w-11/12 pb-12 mx-auto flex flex-col gap-4">
      <div className="">
        <h1 className="p-6 font-serif text-center text-4xl md:text-5xl font-extrabold">
          Meet Our <span className="text-indigo-800">Team</span>
        </h1>
        <div className="p-4 w-[80%] lg:w-[60%] mx-auto">
          <p className="text-md text-center md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="my-6">
      <TeamSwiper />
      </div>
      <div className="flex flex-col divide-y divi divide-double gap-8">
        <WebDevTeam />
        <LeadershipTeam />
        <Advertiseteam />
      </div>
      <JoinUs/>
    </div>
  );
};
