import icon1 from "../../assets/ITIE&Entre/graduated (3).png";
import icon2 from "../../assets/ITIE&Entre/knowledge.png";
import icon3 from "../../assets/ITIE&Entre/education.png";
import icon4 from "../../assets/ITIE&Entre/deep-learning.png";
import icon5 from "../../assets/ITIE&Entre/academic.png";
import icon6 from "../../assets/ITIE&Entre/machine-learning.png";
import icon7 from "../../assets/ITIE&Entre/online-lesson.png";

export const CarrerSection2 = () => {
  const benefits = [
    {
      title: "Large Beautiful Office",
      description: "Enjoy a spacious beautiful office .",
      icon: icon3,
    },
    {
      title: "Great Co-Workers",
      description: "Work with supportive colleagues.",
      icon: icon5,
    },
    {
      title: "Easy Location",
      description: "Conveniently located office .",
      icon: icon6,
    },
    {
      title: "Education Opportunities",
      description: "Continuous learning and development.",
      icon: icon4,
    },
    {
      title: "Free Lunch & Snacks",
      description: "Enjoy free meals and snacks every day.",
      icon: icon4,
    },
    {
      title: "Performance Awards",
      description: "Get rewarded .",
      icon: icon7,
    },

    {
      title: "Technical Support",
      description: "You get support .",
      icon: icon2,
    },

    {
      title: "Finance And Banking",
      description: "You get finance support .",
      icon: icon1,
    },
  ];
  return (
    <>
      <div className='bg-white dark:bg-black flex flex-col'>
        <main className='flex flex-col items-center justify-center px-4 sm:px-8 md:px-15 lg:px-0 xl:px-0 m-4 md:m-8'>
          <h1 className='text-3xl sm:text-4xl dark:text-zinc-100 lg:text-5xl font-bold mb-6 text-center text-[#0a0a0a] pt-4 sm:pt-5 mb-0'>
            Your Life At BAOIAM
          </h1>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='p-4 md:p-6 flex flex-col items-center cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-white hover:bg-gray-100 transition border border-gray-300 rounded-lg shadow-sm lg:mt-0'
              >
                {/* Image Icon */}
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className='w-12 h-12 mb-4'
                />

                {/* Title */}
                <h2 className='text-lg md:text-lg font-bold dark:text-zinc-400 text-gray-900 text-center mb-2'>
                  {benefit.title}
                </h2>

                {/* Description */}
                <p className='text-sm text-gray-600 text-center'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
