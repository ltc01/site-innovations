import { CareerSection1 } from "./CareerSection1";
import { CarrerSection2 } from "./CarrerSection2";
import { CareerSection3 } from "./CareerSection3";
import { CareerSection4 } from "./CareerSection4";
import { CareerSection5 } from "./CareerSection5";
import { CareerSection6 } from "./CareerSection6";
import { CareerSection7 } from "./CareerSection7";
import { CareerSection8 } from "./CareerSection8";

const Career = () => {
  document.title = "Baoiam - Career";

  return (
    <div className='dark:bg-zinc-800 min-h-screen flex flex-col justify-center item-center  text-white relative overflow-x-hidden lg:pb-0'>
      <CareerSection1 />
      <CarrerSection2 />
      <CareerSection3 />
      <CareerSection4 />
      <CareerSection5 />
      <CareerSection6 />
      <CareerSection7 />
      <CareerSection8 />
    </div>
  );
};

export default Career;
