// import React, { useEffect, useRef } from "react";
// import work from "../../assets/Images/work7.jpg";
// import work1 from "../../assets/Images/work8.jpg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// export const CareerSection7 = () => {
//   const animRefs = useRef([]);

//   useEffect(() => {
//     animRefs.current.forEach((ref, index) => {
//       gsap.fromTo(
//         ref,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           delay: index * 0.2, // Stagger the animations
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ref,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//             markers: false,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="mb-10 pt-0">
//       {/* First Section */}
//       <div className="animediv1 w-full px-2 lg:px-0 my-4 lg:my-10">
//         <div
//           ref={(el) => (animRefs.current[0] = el)}
//           className="flex flex-col md:flex-row justify-center items-center w-full lg:px-20"
//         >
//           {/* Image Section: Right side in the first section */}
//           <div className="w-full md:w-[40%] h-[250px] pl-6 pr-4 lg:pr-6">
//             <img
//               src={work}
//               alt="mission-image"
//               className="w-[90%] h-full rounded-tr-[30px] rounded-bl-[30px] object-cover"
//             />
//           </div>

//           {/* Content Section: Left side in the first section */}
//           <div className="w-full md:w-[60%] h-full mt-8 md:mt-0 px-4 md:px-8">
//             <h2 className="text-xl lg:text-2xl mb-2 font-bold text-black text-center md:text-left">
//               Why{" "}
//               <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
//                 Work With Us{" "}
//               </span>
//             </h2>
//             <p className="text-sm lg:text-base text-slate-600 mt-4 mb-4 text-center md:text-left">
//               At BAOIAM, we create pathways to success, offering limitless
//               opportunities where innovation and creativity thrive. Join our
//               dynamic, inclusive team dedicated to making a difference in your
//               career and the world.
//             </p>
//           </div>
//         </div>

//         {/* Second Section - Reverse Layout */}
//         <div className="w-full px-2 lg:px-0 mt-10">
//           <div
//             ref={(el) => (animRefs.current[1] = el)}
//             className="flex flex-col md:flex-row-reverse justify-center items-center w-full lg:px-20"
//           >
//             {/* Image Section: Left side in the second section */}
//             <div className="w-full md:w-[40%] h-[250px] pl-6  mb-6 mt-8 md:mt-0 lg:pl-10 ">
//               <img
//                 src={work1}
//                 alt="vision-image"
//                 className="w-[90%] h-full rounded-tr-3xl rounded-bl-3xl object-cover  "
//               />
//             </div>

//             {/* Content Section: Right side in the second section */}
//             <div className="w-full md:w-[60%] h-full px-4 md:px-8">
//               <h2 className="text-xl lg:text-2xl mb-2 font-bold text-black text-center md:text-left">
//                 Work{" "}
//                 <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
//                   Environment{" "}
//                 </span>
//               </h2>
//               <p className="text-sm lg:text-base text-slate-600 mt-4 text-center md:text-left">
//                 At BAOIAM, we offer an inspiring environment where creativity
//                 thrives and collaboration drives innovation. Our inclusive
//                 culture celebrates diverse perspectives, fostering teamwork that
//                 sparks fresh ideas. With flexible working options, a focus on
//                 work-life balance, and a commitment to continuous learning.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


























import React, { useEffect, useRef } from "react";
import work from "../../assets/Images/work7.jpg";
import work1 from "../../assets/Images/work8.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CareerSection7 = () => {
  const animRefs = useRef([]);

  useEffect(() => {
    animRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2, // Stagger the animations
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="mb-0 pt-0 ">
      {/* First Section */}
      <div className="animediv1 w-full px-2 lg:px-0  lg:pt-10 lg:mb-0 bg-gray-50 rounded-lg  p-4 bg-white dark:bg-black">
        <div
          ref={(el) => (animRefs.current[0] = el)}
          className="flex flex-col md:flex-row justify-center items-center w-full lg:px-20 "
        >
          {/* Image Section: Right side in the first section */}
          <div className="w-full md:w-[40%] h-[250px] pl-8 pr-4 lg:pr-2">
            <img
              src={work}
              alt="mission-image"
              className="w-[90%] h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section: Left side in the first section */}
          <div className="w-full md:w-[60%] h-full mt-8 md:mt-0 px-4 md:px-4">
            <h2 className="text-xl lg:text-2xl mb-2 font-bold text-black text-center md:text-left dark:text-white dark:font-semibold">
              Why{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Work With Us{" "}
              </span>
            </h2>
            <p className="text-sm lg:text-base text-slate-600 mt-4 mb-4 text-center md:text-left dark:text-gray-400">
              At BAOIAM, we create pathways to success, offering limitless
              opportunities where innovation and creativity thrive. Join our
              dynamic, inclusive team dedicated to making a difference in your
              career and the world.
            </p>
          </div>
        </div>

        {/* Second Section - Reverse Layout */}
        <div className="w-full px-2 lg:px-0 mt-10 bg-gray-50 rounded-lg  p-4 bg-white dark:bg-black">
          <div
            ref={(el) => (animRefs.current[1] = el)}
            className="flex flex-col md:flex-row-reverse justify-center items-center w-full lg:px-20 "
          >
            {/* Image Section: Left side in the second section */}
            <div className="w-full md:w-[40%] h-[250px] pl-6 mb-6 mt-8 md:mt-0 lg:pl-10 ">
              <img
                src={work1}
                alt="vision-image"
                className="w-[90%] h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content Section: Right side in the second section */}
            <div className="w-full md:w-[60%] h-full px-4 md:px-4 ">
              <h2 className="text-xl lg:text-2xl  mb-2 font-bold text-black text-center md:text-left lg:pl-2 dark:text-white dark:font-semibold">
                Work{" "}
                <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                  Environment{" "}
                </span>
              </h2>
              <p className="text-sm lg:text-base text-slate-600 mt-4 text-center md:text-left lg:pl-2 dark:text-gray-400">
                At BAOIAM, we offer an inspiring environment where creativity
                thrives and collaboration drives innovation. Our inclusive
                culture celebrates diverse perspectives, fostering teamwork that
                sparks fresh ideas. With flexible working options, a focus on
                work-life balance, and a commitment to continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
