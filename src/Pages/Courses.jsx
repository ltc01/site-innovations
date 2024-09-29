import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SliderHero from "../Components/School/SliderHero";
import OurHands from "../assets/Team/TeamHands.jpg";
import { FaHandsHelping} from "react-icons/fa";
import { FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";
import Program from "../Components/CourseCommon/Program";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const Courses = () => {
  const { allCourses, status, error } = useSelector((state) => state.courses);
  useEffect(() => {
    console.log("allCourses: ", allCourses);
    return () => {};
  }, []);
  const static_data = allCourses[0]?.courses;
  const static_data2 = allCourses[1]?.courses;
  const static_data3 = allCourses[2]?.courses;

  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const benefitsRef = useRef([]);

  useEffect(() => {
    // Animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Animation for the slider
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for each benefit item
    benefitsRef.current.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefit,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: index * 0.1, // Stagger the animations
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="flex mt-20 gap-8 lg:gap-0 justify-center flex-col-reverse lg:flex-row items-center mx-auto w-full p-5 sm:px-6 xs:px-4">
        <div ref={textRef} className="w-full lg:w-1/2 text-left md:text-center lg:text-left">
          <h1 className="text-xl pt-3 md:pt-0 pr-6 md:pr-0 md:text-4xl font-bold mb-4">
            Explore Our Range of Courses for Schools and Colleges
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 ">
            At BAOIAM, we offer a wide range of courses designed for students
            from schools and colleges. Whether you're preparing for board exams
            or pursuing a degree, our courses provide comprehensive, engaging
            content to help you succeed academically.
          </p> 
        </div>
        <div ref={sliderRef} className="h-80 md:h-full md:w-[40%] pt-3 md:pt-0">
          <SliderHero />
        </div>
      </div>
      <Program title={"Junior Courses"} data={static_data} />
      <Program title={"University Courses"} data={static_data2} />
      <Program title={"Other Courses"} data={static_data3} />
      <section ref={sectionRef} className="py-16 dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              ref={headingRef}
              className="text-3xl font-extrabold sm:text-4xl"
            >
              Why Choose Us?
            </h2>
            <p ref={paragraphRef} className="mt-4 text-lg">
              We deliver the best service with the highest quality and
              commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Expert Mentors",
              "Engaging Content",
              "Flexible Learning",
              "Certification",
            ].map((title, index) => (
              <div
                ref={(el) => (benefitsRef.current[index] = el)}
                key={index}
                className="flex flex-col items-center"
              >
                <div className="bg-indigo-600 p-4 rounded-full mb-4">
                  {index === 0 && (
                    <FiCheckCircle className="h-10 w-10 text-white" />
                  )}
                  {index === 1 && (
                    <FiTrendingUp className="h-10 w-10 text-white" />
                  )}
                  {index === 2 && <FiClock className="h-10 w-10 text-white" />}
                  {index === 3 && (
                    <FaHandsHelping className="h-10 w-10 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-center">
                  {index === 0 &&
                    "Courses led by experienced teachers and professionals."}
                  {index === 1 &&
                    "Interactive lessons with quizzes, assignments, and projects."}
                  {index === 2 && "Study at your own pace, anytime, anywhere."}
                  {index === 3 &&
                    "Receive certificates upon completion of courses."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* Call to Action */}
      <div className="w-full h-52 md:h-80 my-6 relative ">
        <div className="absolute w-full h-full hover:opacity-100 backdrop-blur-sm bg-black/80"></div>
        <img
          src={OurHands}
          alt="Join Us"
          className="w-full absolute-z-10 h-full object-cover"
        />
        <div className="flex absolute top-0 right-0 items-center gap-4 z-20 w-full h-full justify-center flex-col">
          {/* <h1 className="text-white text-xl max-w-[80%] text-center md:text-2xl lg:text-4xl font-serif">
            you'll look better{" "}
            <span className="text-indigo-500 uppercase">with us</span>{" "}
          </h1> */}
          <a
            href={"#courses"}
            className="relative transition-all px-3 py-2 rounded text-white ease-in duration-75 bg-indigo-500 group-hover:bg-opacity-0"
          >
            Browse All Courses
          </a>
          <Link
            to={"/contact"}
            className="relative transition-all px-3 py-2 rounded bg-indigo-500 text-white ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0"
          >
            Contact
          </Link>
          {/* <FaArrowRight color="white" /> */}
        </div>
      </div>
    </>
  );
};

export default Courses;
