import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import Loader from "../Components/Loader";
import Brochure from "../Brochure.txt";
import { CollegeCourseData, Highlights, OtherCourseData, School } from "../Data";
import Testimonials from "../Components/Testmonials/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetails } from "../Redux/slices/courseDetailSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io";
import CourseHero from "../Components/CourseDetails/CourseHero";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [showTab, setShowTab] = useState('plus');
  const [fixed, setFixed] = useState(false)
  const [coursePlusContent, setCoursePlusContent] = useState([
    "Doubt clearing sessions",
    "Material & Assignment Management",
    "Live Sessions",
    "Project based learning",
    "Mentorship & Evaluation",
    "Mentor Feedback",
    "Regular Quizzes & Assessment",
  ]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // useEffect(() => {
  //   const getCourseDetails = async () => {
  //     // setCourseDetails(data[0]);
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(
  //         `https://api.baoiam.com/api/courses?subcategory=${id}`
  //       );
  //       // console.log(data);
  //       setCourseDetails(data[0]);
  //       console.log(data[0], "live");
  //       console.log(data, "all");

  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error.stack);
  //       setLoading(true);
  //     }
  //   };
  //   getCourseDetails()
  // },[id])
  // console.log("course details: ", courseDetails);
  // document.title = `Baoiam - ${courseDetails.title}`;

  // useEffect(() => {
  //   if (id >= 1 && id <= 10) {
  //     // setCoursePlusContent(schoolCoursePlusContent);
  //     // console.log("school is : ", school[0].id);
  //     const d = School.filter((data) => data.id == id);
  //     console.log("d is:", d);
  //     setCourseDetails(School[0].subCate.filter((data) => data.id == id)[0]);
  //     console.log("course details:", courseDetails);
  //   } else if (id >= 11 && id <= 22) {
  //     // setCoursePlusContent(collegeCoursePlusContent);
  //     setCourseDetails(
  //       CollegeCourseData[0].subCate.filter((data) => data.id == id)[0]
  //     );
  //   } else {
  //     // setCoursePlusContent(otherCoursePlusContent);
  //     setCourseDetails(
  //       OtherCourseData[0].subCate.filter((data) => data.id == id)[0]
  //     );
  //   }

  //   return () => {};
  // }, [id]);

  // } else if (id >= 11 && id <= 22) {
  //   // setCoursePlusContent(collegeCoursePlusContent);
  //   setCourseDetails(
  //     CollegeCourseData[0].subCate.filter((data) => data.id == id)[0]
  //   );
  // } else {
  //   // setCoursePlusContent(otherCoursePlusContent);
  //   setCourseDetails(
  //     OtherCourseData[0].subCate.filter((data) => data.id == id)[0]
  //   );
  // }

  const planRef = useRef();
  const enrollNowScroll = () => {
    planRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // console.log("id is:", id);

  // redux start

  const { courses, currentCourseId, status, error } = useSelector(
    (state) => state.courseDetails
  );
  const dispatch = useDispatch();
  const course = courses[id]; // Retrieve the course from the store by its id

  useEffect(() => {
    // If the course is not in the store, fetch it
    if (!course && status !== "loading") {
      dispatch(fetchCourseDetails(id));
    }
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setFixed(false);
      } else if (window.scrollY > 500) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [dispatch, id, course, status]);
  console.log(course, " course action");
  // console.log(courses, ' courses dkdkdkdk action')
  if (status === "loading" && !course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#4F46E5" loading={true} size={15} />
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="text-center p-4 bg-red-100 text-red-600 rounded-lg ">
        <p>Error: {error}</p>
      </div>
    );
  }

  // redux end

  const downloadBrochure = async (brochureUrl) => {
    if (!brochureUrl) {
      console.error("Brochure file URL is missing.");
      return;
    }
    const toastId = toast.loading("download starting...");

    try {
      const response = await axios.get(brochureUrl, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.update(toastId, {
        render: "downloaded successfully !!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error downloading the brochure:", error);
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div>

      {/* Hero Section */}
      {/* <div className="pb-12 pt-4 px-4 lg:px-24 bg-gradient-to-t from-orange-100 to-transparent">
        <div className="flex items-center gap-2 text-xs">
          <Link to={`/courses`}>Courses</Link>
          <span><IoIosArrowForward /></span>
          <span>School</span>
          <span><IoIosArrowForward /></span>
          <Link to={`/course/${course.slug}/${course.id}`}>{course?.title}</Link>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="w-[60%]">
            <div className="mt-4 w-3/4">
              <h1 className="text-6xl font-bold mb-4">{course?.title}</h1>
              <p>Many online courses are self-paced, allowing learners to complete coursework at their own convenience.</p>
              <div className="mt-8 flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <button
                    onClick={enrollNowScroll}
                    className="relative inline-flex items-center bg-orange-400 px-8 md:px-12 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <IoIosArrowRoundForward size={30} />
                    </span>
                    <span className="relative">Enroll Now</span>
                  </button>
                  <Link
                    to={`/book-a-demo/${course?.title}/${course?.id}`}
                    className="relative inline-flex items-center bg-orange-400 px-6 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                    <span className="relative">Book a Demo</span>
                  </Link>
                </div>
                <span>6,000 Students</span>
              </div>
            </div>

          </div>
          <div className="hidden md:block md:w-[40%] h-96 rounded-[2rem] relative overflow-hidden">
            <img
              src={
                course?.thumbnail_image ? course?.thumbnail_image : CourseDesc2
              }
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
              <button
                onClick={() => downloadBrochure(course?.brochure_file)}
                className="relative inline-flex items-center bg-white/50 backdrop-blur-sm px-8 md:px-12 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-orange-600 font-medium border border-orange-400 rounded-lg hover:text-white group"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-orange-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <FaDownload size={18} />
                </span>
                <span className="relative">Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <CourseHero course={course} downloadBrochure={downloadBrochure} enrollNowScroll={enrollNowScroll} />

      {/* Course Details */}
      <div className="grid grid-cols-3 gap-4 mt-8 px-4 lg:px-24 relative">

        <div className="col-span-2 h-fit p-6 shadow-xl rounded-xl mb-4">
          <h2 className="text-2xl font-semibold">Course <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Details</span></h2>
          <hr className="my-2" />
          <div>
            <p>{course?.description}</p>
          </div>
        </div>

        {/* Plans */}
        <div className={`col-span-1 bg-white ${fixed ? "fixed top-28 right-24" : "absolute top-0 right-24 "} shadow-xl rounded-xl p-6`}>
          <div className="flex items-center w-full justify-around mb-4">
            {course?.plans?.map((p, i) => {
              return <p key={i} onClick={() => setShowTab(p.name)} className={`capitalize text-xl cursor-pointer ${showTab === p.name ? "text-orange-500" : ""}`}>{p.name}</p>
            })}

          </div>
          {course?.plans?.map((p, i) => {
            if (p.name === showTab) {
              return <>
                <div
                  key={i}
                  className={`flex flex-col rounded-lg lg:w-80 border ${p.name === "premium" ? "border-orange-500" : "border-stone-500"} relative p-4 pt-6`}
                >
                  {p.name === "premium" && (
                    <div className="absolute inset-x-0 -top-3 flex justify-center">
                      <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                        most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                    {p.name}
                  </div>

                  <p className="mx-auto mb-2 px-8 text-center text-lg text-gray-500 font-medium dark:text-white">
                    {course.title}
                  </p>
                  <p className="mx-auto mb-2 px-8 text-gray-500 font-medium text-center dark:text-white">
                    All Contents of Plus
                  </p>
                  <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                    Personal Mentorship
                  </p>
                  <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                    Experts councelling
                  </p>
                  <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                    Live Projects
                  </p>
                  <p className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                    Dedicated Placement cell
                  </p>
                  <div className="mt-auto flex flex-col gap-8">
                    <div className="flex items-end justify-center gap-1">
                      <span className="self-start text-gray-600 dark:text-white">
                        ₹
                      </span>
                      <span className="text-4xl font-bold text-gray-800 dark:text-white">
                        {p.price}
                      </span>
                      <span className="text-gray-500 dark:text-white">
                        /{p.name != "premium" ? p.duration : "Unlimited"}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        if (localStorage.getItem("access_token"))
                          navigate(
                            `/checkout/${id}/${p.name == "premium" ? "Premium" : "Plus"
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
              </>
            } else if (p.name === showTab) {
              return <>
                <div
                  key={i}
                  className={`flex flex-col rounded-lg lg:w-80 relative p-4 pt-6`}
                >
                  <div className="mb-2 text-center capitalize text-2xl font-bold text-gray-800 dark:text-white">
                    Plus
                  </div>
                  {/* <p className="mx-auto  mb-2 px-8 text-center text-gray-500 font-medium dark:text-white">
                      Course Duration: {p.duration}
                    </p> */}
                  {coursePlusContent.map((content, i) => (
                    <p
                      key={i}
                      className="mx-auto mb-2 px-8 text-center text-gray-500 font-medium dark:text-white"
                    >
                      {content}
                    </p>
                  ))}
                  <div className="mt-auto flex flex-col gap-8">
                    <div className="flex items-end justify-center gap-1">
                      <span className="self-start text-gray-600 dark:text-white">
                        ₹
                      </span>
                      <span className="text-4xl font-bold text-gray-800 dark:text-white">
                        {p.price}
                      </span>
                      <span className="text-gray-500 dark:text-white">
                        /{p.name != "premium" ? p.duration : "Unlimited"}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        if (localStorage.getItem("access_token"))
                          navigate(
                            `/checkout/${id}/${p.name == "premium" ? "Premium" : "Plus"
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
              </>
            }


          })}
        </div>

        {/* Overview */}
        <div className="col-span-2 p-6 shadow-xl rounded-xl mb-4">
          <h2 className="text-2xl font-semibold">Course <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Overview</span></h2>
          <hr className="my-2" />
          <p>{course?.program_overview}</p>
        </div>

        {/* Curriculum */}
        <div className="col-span-2 p-6 shadow-xl rounded-xl mb-4">
          <h2 className="text-2xl font-semibold">Course <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Curriculum</span></h2>
          <hr className="my-2" />

          <div className="w-full mt-5 pb-3">
            <ul className="list-inside list-disc marker:text-orange-600 marker:text-md mt-4">
              {course?.curriculum?.split(";").map((o, i) => (
                <li className="py-1 text-sm lg:text-base" key={i}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HighLights */}
        {/* <div className="col-span-2 shadow-xl rounded-xl mb-4"> */}
        {/* <h2 className="text-2xl font-semibold">Course <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">HighLights</span></h2>
          <hr className="my-2" />

          <ul className="list-inside list-disc marker:text-orange-600 marker:text-md mt-4">
            {Highlights.map((h, i) => {
              return <li className="py-1 text-sm lg:text-base" key={i}>
                {h.head} - {h.desc}
              </li>
            })}
          </ul> */}

        {/* </div> */}
      </div>
        <CourseHighlights />

      {/* <Testimonials /> */}

      <ToastContainer />
    </div >
  );
};

export default CourseDetailsPage;
