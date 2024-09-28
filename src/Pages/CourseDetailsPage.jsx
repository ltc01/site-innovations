import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import Loader from "../Components/Loader";
import Brochure from "../Brochure.txt";
import {
  CollegeCourseData,
  Highlights,
  OtherCourseData,
  School,
} from "../Data";
import Testimonials from "../Components/Testmonials/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import courseDetailSlice, {
  fetchCourseDetails,
} from "../Redux/slices/courseDetailSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import CourseHero from "../Components/CourseDetails/CourseHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
const apiUrl = import.meta.env.VITE_API_URL;

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [showTab, setShowTab] = useState("premium");
  const [otherCourses, setOtherCourses] = useState();
  const [fixed, setFixed] = useState(false);
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

  const EnrollNow = ({ showForm, setShowForm }) => {
    const [animatePing, setAnimatePing] = useState(false);

    // Function to toggle the popup
    const togglePopup = () => {
      console.log(showForm);
      setShowForm(true);
      setAnimatePing(true);

      // Remove ping animation after a short duration
      setTimeout(() => {
        setAnimatePing(false);
      }, 1000); // Adjust duration as needed
    };
  };

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

  const fetchCourseCategory = async (CourseId) => {
    const response = await axios.get(
      `${apiUrl}/api/courses/?category=${CourseId}`
    );
    // return response.data;
    // console.log(response.data, "fetchCourseCategory");
    setOtherCourses(response.data);
  };

  const otherCou = otherCourses?.filter(
    (other) => other?.title !== course?.title
  );
  console.log(otherCou, "Filtered");

  useEffect(() => {
    // If the course is not in the store, fetch it
    if (!course && status !== "loading") {
      dispatch(fetchCourseDetails(id));
    }
  }, [dispatch, id, course, status]);
  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setFixed(false);
    } else if (window.scrollY > 500) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  fetchCourseCategory(course?.category);

  window.addEventListener("scroll", handleScroll);

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
      <CourseHero
        course={course}
        downloadBrochure={downloadBrochure}
        enrollNowScroll={enrollNowScroll}
      />

      {/* Course Details */}
      <div className="flex flex-col w-full lg:gap-11 p-5 md:flex-row ">
        <div className="md:w-[60%] w-full space-y-4 ">
          {/* Course Details */}
          <div className="w-full md:w-[95%] p-8 shadow-md dark:shadow-slate-100 rounded-xl">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Course{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Details
              </span>
            </h2>
            <hr className="my-2" />
            <p className="text-sm leading-snug lg:text-[1rem] text-left">
              {course?.description}
            </p>
          </div>

          {/* Course Overview */}
          <div className="w-full  md:w-[95%] p-8 shadow-md dark:shadow-slate-100 rounded-xl">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Course{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <hr className="my-2" />
            <p className="text-sm leading-snug lg:text-[1rem] text-left">
              {course?.program_overview}
            </p>
          </div>

          {/* Course Curriculum */}
          <div className="w-full md:w-[95%] p-8 shadow-md dark:shadow-slate-100 rounded-xl">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Course{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Curriculum
              </span>
            </h2>
            <hr className="my-2" />
            <ul className="list-inside list-disc marker:text-orange-600 mt-4">
              {course?.curriculum?.split(";").map((o, i) => (
                <li
                  className="py-1 text-sm leading-snug lg:text-[1rem] text-left"
                  key={i}
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plans Section */}
        <div className="relative mx-auto w-[90%] md:w-[40%]">
          {/* Plans Section */}
          <div
            className={` mt-5 lg:w-80 md:w-72  ${
              fixed ? "md:fixed md:top-16" : ""
            } bg-white dark:bg-black shadow-md rounded-xl p-4`}
          >
            <div className="flex items-center justify-center gap-8 mb-4">
              {course?.plans?.map((p, i) => {
                return (
                  <p
                    key={i}
                    onClick={() => setShowTab(p.name)}
                    className={`capitalize text-lg md:text-xl cursor-pointer ${
                      showTab === p.name
                        ? "text-orange-500 border rounded-md border-orange-500 px-3 py-1"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {p.name}
                  </p>
                );
              })}
            </div>

            {course?.plans?.map((p, i) => {
              if (p.name === showTab) {
                return (
                  <>
                    <div
                      key={i}
                      className={`flex flex-col w-full items-center justify-center rounded-lg border ${
                        p.name === "premium"
                          ? "border-orange-500"
                          : "border-stone-500 dark:border-white"
                      } relative p-4 pt-6`}
                    >
                      {p.name === "premium" && (
                        <div className="absolute inset-x-0 -top-3 mb-4 flex justify-center">
                          <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                            most popular
                          </span>
                        </div>
                      )}

                      {/* <div className="mb-2 text-center capitalize text-2xl md:text-xl dark:text-white font-extrabold text-gray-800">
                        {p.name}
                      </div> */}
                      <div className="">

                      <p className="mx-auto mb-2 px-8 text-center text-lg md:text-base dark:text-white text-gray-500 font-medium">
                        {course.title}
                      </p>

                      <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                        All Contents of Plus
                      </p>
                      <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                        Personal Mentorship
                      </p>
                      <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                        Experts Counseling
                      </p>
                      <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                        Live Projects
                      </p>
                      <p className="text-sm md:text-base  mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                        Dedicated Placement Cell
                      </p>

                      <div className="mt-auto flex flex-col gap-8">
                        <div className="flex items-center justify-center gap-1">
                          <span className="self-start dark:text-white text-gray-600">
                            ₹
                          </span>
                          <span className="text-2xl md:text-xl dark:text-white font-bold text-gray-800">
                            {p.price}
                          </span>
                          <span className="text-gray-500 dark:text-white text-xs md:text-sm">
                            /{p.name !== "premium" ? p.duration : "Unlimited"}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            if (localStorage.getItem("access_token"))
                              navigate(
                                `/checkout/${id}/${
                                  p.name === "premium" ? "Premium" : "Plus"
                                }`
                              );
                            else navigate("/login");
                          }}
                          className={`block rounded-lg ${
                            p.name === "premium"
                              ? "bg-orange-500 text-white"
                              : "bg-gray-500"
                          } px-8 py-3 mt-4 text-center text-sm md:text-base font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700`}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>

      <CourseHighlights />

      {/* <Testimonials /> */}

      {/* Related Courses */}
      {otherCou && (
        <div className="my-8 px-4 lg:px-8 xl:px-24 w-full h-full relative">
          <h2 className="text-3xl font-semibold text-center">
            Related{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0} // Adjust the space between cards
            slidesPerView={1} // Default number of slides per view
            dot={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            className="swiper-container lg:px-6 mt-4"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              740: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {otherCou.map((o, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="h-80 overflow-hidden dark:bg-indigo-900 dark:border shadow-md rounded-xl m-2">
                    <div className="relative h-[50%]">
                      <img
                        src={o.thumbnail_image}
                        alt={o.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-4 flex">
                        <span className="text-xs mr-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                          Premium
                        </span>
                        <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-3 py-1">
                          Plus
                        </span>
                      </div>
                    </div>
                    <div className="h-fit flex flex-col justify-between px-4">
                      <Link
                        to={`/course/${o?.slug}/${o?.id}`}
                        className="text-lg font-semibold my-2"
                      >
                        {o.title}{" "}
                      </Link>
                      <p className="text-sm pr-3 text-slate-600">
                        {o.description.slice(0, 60) + "..."}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute top-[60%] left-14 transform z-10">
            <button className="swiper-button-prev text-indigo-600 bg-white transition"></button>
          </div>
          <div className="absolute top-[60%] right-14 transform z-10">
            <button className="swiper-button-next text-indigo-500 bg-white transition"></button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CourseDetailsPage;
