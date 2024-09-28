import React from 'react'
import { IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CourseDesc2 } from '../../assets/assets'
import { FaDownload } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const CourseHero = ({ course, downloadBrochure, setShowForm,showForm, enrollNowScroll }) => {
    console.log(course);

    const navigate = useNavigate();
    return (
        <div className="pb-12 pt-4 px-4 md:px-8 xl:px-24 dark:bg-none bg-gradient-to-t from-orange-100 to-transparent">
            <div className="flex items-center gap-2 text-xs">
                <Link to={`/courses`}>Courses</Link>
                <span><IoIosArrowForward /></span>
                <Link to={`/`}></Link>
                <span><IoIosArrowForward /></span>
                <Link to={`/course/${course?.slug}/${course?.id}`}>{course?.title}</Link>
                {/* <span onClick={() => window.location.reload()}>{course?.title}</span> */}
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="w-[60%]">
                    <div className="mt-4 w-3/4">
                        <h1 className="text-6xl font-bold mb-4">{course?.title}</h1>
                        <p>Many online courses are self-paced, allowing learners to complete coursework at their own convenience.</p>
                        <div className="mt-8 flex items-center justify-between w-full">
                            <div className="flex gap-2">
                                <button
                                     onClick={() => 
                                        setShowForm(true)
                                      }
                                    className="relative inline-flex items-center bg-orange-400 px-6 md:px-8 lg:px-12 py-2 md:py-3 text-xs md:text-sm overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                                >
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <IoIosArrowRoundForward size={30} />
                                    </span>
                                    <span className="relative text-nowrap">Enroll Now</span>
                                </button>
                                <Link
                                    to={`/book-a-demo/${course?.title}/${course?.id}`}
                                    className="relative inline-flex items-center bg-orange-400 px-6 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                                >
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                    <span className="relative text-nowrap">Book a Demo</span>
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
                            className="relative inline-flex items-center bg-green-500 px-8 md:px-12 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-green-400 rounded-lg hover:text-green-500 group"
                        >
                            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <FaDownload size={18} />
                            </span>
                            <span className="relative text-nowrap">Download Brochure</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHero