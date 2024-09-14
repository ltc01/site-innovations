import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const navigate = useNavigate();
  const getCourseDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.baoiam.com/api/courses?subcategory=${id}`
      );
      // console.log(data);
      setCourseDetails(data[0]);
    } catch (error) {
      console.log(error.stack);
    }
  };
  console.log(courseDetails);
  document.title = `Baoiam - ${courseDetails.title}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourseDetails();
    return () => { };
  }, [id]);

  const planRef = useRef();
  const enrollNowScroll = () => {
    planRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Course Description */}
      <div className="flex items-center flex-col md:flex-row gap-12 md:gap-4 lg:gap-24 justify-between px-4 lg:px-24 my-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.7rem] lg:text-4xl font-bold text-neutral-600 dark:text-white">
            {courseDetails?.title}
          </h3>
          <Link to={`/book-a-demo/${courseDetails.id}`} className="relative group">
            <button
              type="button"
              class="hidden sm:flex text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-md px-8 py-2.5 text-center"
            >
             Book a Demo
            </button>
          </Link>
          <p className="text-[0.8rem] lg:text-base">
            {courseDetails?.description}
          </p>

          <div className="flex flex-col md:flex-row lg:flex-row  gap-2">
            <button
              onClick={enrollNowScroll}
              className="pl-4 mr-6 pr-6 py-2 border text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white"
            >
              Enroll Now{" "}
              <FaArrowRight size={22} className="group-hover:animate-pulse" />{" "}
            </button>
            <button className="pl-4 pr-6 py-2 border text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white">
              Download Brochure{" "}
              {/* <FaDownLong size={22} className="group-hover:animate-pulse" />{" "} */}
              <FaDownload size={18} />
            </button>
          </div>
        </div>

        <img
          src={CourseDesc2}
          alt=""
          className="w-72 h-72 lg:w-full lg:h-96 rounded-ss-[7rem] rounded-ee-[7rem] shadow-2xl shadow-black"
        />
      </div>

      {/* Course Overview */}
      <div className="px-8 lg:px-24 my-12 py-12 flex justify-between flex-col-reverse md:flex-row gap-12 md:gap-8 lg:gap-24 w-full">
        <div className="w-full md:w-[40%]">
          <img
            src={CourseOverview}
            alt=""
            className="w-full md:w-72 h-72 lg:w-full lg:h-96 object-cover shadow-[-15px_15px_#ea580c] lg:shadow-[-20px_20px_#ea580c]"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h4 className="text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mt-12 lg:mb-4">
            Course{" "}
            <span className="border-b border-orange-500 text-orange-500">
              Overview
            </span>
          </h4>

          <ul className="list-inside list-disc marker:text-orange-600 marker:text-md flex flex-col gap-2 w-full">
            <li className="font-medium text-[0.8rem] lg:text-base">
              {courseDetails.program_overview}
            </li>
          </ul>
        </div>
      </div>

            {/* Course Curriculum */}
            <div className="w-full px-8 lg:px-24 my-12 md:my-20 h-full flex flex-col items-center">
                <h4 className="text-[2rem] lg:text-4xl font-semibold text-neutral-600 mb-2 lg:mb-4 dark:text-white">
                    Course{" "}
                    <span className="text-orange-500 border-b border-orange-500">
                        Curriculum
                    </span>
                </h4>

        <ul className="list-inside list-disc marker:text-orange-500 marker:text-md mt-4">
          <li>{courseDetails.curriculum}</li>
        </ul>
      </div>

      {/* Course Highlights */}
      <CourseHighlights />

      {/* Join we us */}
      {courseDetails.plans && courseDetails.plans.length > 0 ? (
        <div
          id="plans"
          ref={planRef}
          className="my-12 px-8 lg:px-24 w-full h-full"
        >
          <div className="bg-white dark:bg-[#080529] py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 dark:text-white md:mb-8 lg:text-4xl xl:mb-12">
                Join With Us Find the{" "}
                <span className="text-orange-500 border-b border-orange-500">
                  Right Course
                </span>
              </h2>

              <div className="mb-6 flex justify-center flex-wrap gap-10">
                {courseDetails?.plans?.map((p, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex  flex-col  rounded-lg border ${p.name === "premium" ? "border-orange-500 relative" : ""
                        } p-4 pt-6`}
                    >
                      <div className="mb-8">
                        {p.name === "premium" ? (
                          <>
                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                              <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                                most popular
                              </span>
                            </div>

                            <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                              {p.name}
                            </div>

                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              {courseDetails.title}
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Doubt Support
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Personnal Mentorship
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Course Duration 6 Months
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Experts councelling
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Live Projects 4+
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Dedicated Placement cell
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                              {p.name}
                            </div>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Course Duration 4 Months
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Live classes
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Webinars
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              101 sessions
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Live Projects 2+
                            </p>
                            <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                              Interview Preparation
                            </p>
                          </>
                        )}
                      </div>

                      <div className="mt-auto flex flex-col gap-8">
                        <div className="flex items-end justify-center gap-1">
                          <span className="self-start text-gray-600 dark:text-white">
                            ₹
                          </span>
                          <span className="text-4xl font-bold text-gray-800 dark:text-white">
                            {p.price}
                          </span>
                          <span className="text-gray-500 dark:text-white">
                            /Full Course
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            if (localStorage.getItem("access_token"))
                              navigate(
                                `/checkout/school/${p.id}/${p.name == "premium" ? "Premium" : "Plus"

                                }`
                              );
                            else navigate("/login");
                          }}
                          className={`block  rounded-lg ${p.name === "premium"



                              ? "bg-orange-500 text-white"
                              : "bg-gray-500"
                            } px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center text-sm text-gray-500 dark:text-white sm:text-base">
                Need help deciding?{" "}
                <Link
                  to={"/"}
                  className="text-gray-600 dark:text-orange-500 underline transition duration-100 hover:text-orange-600 active:text-orange-400"
                >
                  Get in touch
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-14"></div>
      )}

      {/* Emi & Placement */}
      <div className="w-full h-auto flex justify-center items-center relative">
        <div className="relative xs:w-[300px] w-[350px] lg:w-[530px] mx-auto">
          <img
            className="z-0 opacity-40 absolute inset-0 w-full h-full object-cover"
            src="https://images.stockcake.com/public/1/a/3/1a34b575-b411-49cf-8943-922dcb8fc637_large/payment-in-progress-stockcake.jpg"
            alt="EMI background"
          />
          <div className="relative z-20 w-full text-white p-4 flex justify-center flex-col text-center">
            <p className="font-semibold text-black text-[1.2rem] lg:text-2xl mb-2 dark:text-white">
              Easy EMI
            </p>
            <p className="text-black dark:text-white mb-2 text-sm lg:text-base">
              Easy monthly payment options with our emi facilities
            </p>
            <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-black dark:text-white'>
              <li className="text-sm lg:text-base">
                No upfront payment required
              </li>
              <li className="text-sm lg:text-base">
                Fixed monthly installments
              </li>
              <li className="text-sm lg:text-base">
                Flexible repayment options
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Amazing Offer */}
      <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-[#F6A611] dark:bg-gray-700 text-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
          Amazing <span className="border-b">Career</span>
        </h4>
        <p className="text-sm lg:text-lg">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-4 justify-center w-full mt-8">
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
