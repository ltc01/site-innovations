import React, { useEffect, useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp, FaSchool } from 'react-icons/fa6';
import { IoBookSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Logo from './Logo';
// import { CollegeCourse, OtherCourse, School } from "../../Data";


const MobNavbar = ({ showmenu, setShowmenu, courses, isDark, setIsDark }) => {
    const mobTabtyles = `flex items-center p-2 pt-4 text-base font-medium rounded-lg`;
    const [activeTab, setActiveTab] = useState('Home');
    const [subCateDrop, setSubCateDrop] = useState(false);
    const [schoolCate, setSchoolCate] = useState(false);
    const [collegeCate, setCollegeCate] = useState(false);
    const [otherCourses, setOtherCourses] = useState(false);

    const [schoolCourses, setSchoolCourses] = useState([]);

    const changeTheme = () => {
        setIsDark();
    }

    useEffect(() => {
        console.log(isDark);
    }, [isDark])

    const closeSideBar = () => {
        setShowmenu(false)
    }

    return (
        <div>

            <aside className={`fixed lg:hidden top-0 left-0 z-[100] w-10/12 sm:w-2/5 h-screen transition-transform  ${showmenu ? 'translate-x-0' : '-translate-x-full'}  `}>
                <div className="h-full px-3 pb-8 overflow-y-auto rounded-r-lg  bg-white border taxt-gray-600 dark:text-white dark:bg-[#080529]">
                    <div className="flex justify-between items-center w-full px-2 py-4 sticky top-0 bg-white z-50 dark:bg-[#080529] shadow-md ">
                       <Logo isDark={isDark}/>
                        <RxCross2
                            className="text-black dark:text-white"
                            onClick={() => setShowmenu(old => !old)}
                            size={25}
                        />

                    </div>

                    <ul className="space-y-2 font-medium divide-y ">
                        <li className={`${mobTabtyles} ${activeTab === 'Home' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("Home");
                            closeSideBar();
                        }} >
                            <Link to={"/"} className="ms-3">
                                Home
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} flex-col items-start ${activeTab === 'Course' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                            <button
                                onClick={() => {
                                    setSubCateDrop(old => !old);
                                    setActiveTab("Course")
                                }
                                }
                                className="flex justify-between w-full items-center"
                                type="button"
                            >
                                <span className="flex-1  ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Course
                                </span>
                                {subCateDrop ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {subCateDrop && (
                                <ul className="py-2 relative flex flex-col gap-2 w-full items-start ">
                                    <li
                                        onClick={() => {
                                            setSchoolCate(old => !old)
                                            setOtherCourses(false)
                                            setCollegeCate(false)
                                        }}
                                        className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-700 relative"
                                    >

                                        <div className='flex items-center gap-2'>
                                            <FaSchool />
                                            <h1>School</h1>
                                        </div>
                                        {schoolCate ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                    </li>
                                    {schoolCate && (
                                        <div className=" w-72 right-4 md:right-80 text-gray-600 dark:text-gray-400 bg-white border-black/20  text-sm p-1 shadow-lg z-50 md:w-96 h-64 md:h-fit overflow-auto flex flex-col max-h-56 divide-y gap-2">
                                            {courses[0]?.subcategories.map((course, i) => {
                                                return (
                                                    <Link
                                                        onClick={() => {
                                                            setShowmenu(old => !old);
                                                            setSubCateDrop(old => !old);
                                                            setSchoolCate(old => !old);
                                                        }}
                                                        key={i}
                                                        to={`/course/${course.name}`}
                                                        className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                                    >
                                                        {course.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <li
                                        onClick={() => {
                                            setCollegeCate(old => !old)
                                            setOtherCourses(false)
                                            setSchoolCate(false)
                                        }}
                                        className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-700"
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FaUniversity />
                                            <h1>College</h1>
                                        </div>
                                        {collegeCate ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                    </li>
                                    {collegeCate && (
                                        <div className="w-72 text-gray-600 dark:text-gray-400 bg-white border-black/20  text-sm p-1 shadow-lg z-50 md:w-96 h-64 overflow-auto flex flex-col gap-2 divide-x">
                                            {courses[1]?.subcategories.map((course, i) => {
                                                return (
                                                    <Link
                                                        onClick={() => {
                                                            setShowmenu(old => !old);
                                                            setSubCateDrop(old => !old);
                                                            setCollegeCate(old => !old);
                                                        }}
                                                        key={i}
                                                        to={`/course/${course.name}`}
                                                        className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                                    >
                                                        {course.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <li
                                        onClick={() => {
                                            setOtherCourses(old => !old)
                                            setCollegeCate(false)
                                            setSchoolCate(false)
                                        }}
                                        className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-700"
                                    >
                                        <div className='flex items-center gap-2'>
                                            <IoBookSharp />
                                            <h1>Others</h1>
                                        </div>
                                        {collegeCate ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                    </li>
                                    {otherCourses && (
                                        <div className="w-72 text-gray-600 dark:text-gray-400 bg-white border-black/20  text-sm p-1 shadow-lg z-50 md:w-96 h-64 overflow-auto flex flex-col gap-2 divide-x">
                                            {courses[2]?.subcategories.map((course, i) => {
                                                return (
                                                    <Link
                                                        onClick={() => {
                                                            setShowmenu(old => !old);
                                                            setSubCateDrop(old => !old);
                                                            setOtherCourses(old => !old);
                                                        }}
                                                        key={i}
                                                        to={`/course/${course.name}`}
                                                        className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                                                    >
                                                        {course.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </ul>
                            )}
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'About Us' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("About Us")
                            closeSideBar();
                        }}>

                            <Link to={"/about-us"} className="ms-3 text-nowrapx" >
                                About Us
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'PAP' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("PAP")
                            closeSideBar();
                        }}>

                            <Link to={"/pap"} className="ms-3" >
                                PAP
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'ITIE' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("ITIE")
                            closeSideBar();
                        }}>

                            <Link to={"/itie"} className="ms-3" >
                                ITIE
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'GCSP' ? 'text-[#1638C9]  dark:text-white dark:bg-[#060606]' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("GCSP")
                            closeSideBar();
                        }}>

                            <Link to={"/gcsp"} className="ms-3" >
                                GCSP
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'Blogs' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("Blogs")
                            closeSideBar();
                        }}>

                            <Link to={"/blogs"} className="ms-3" >
                                Blogs
                            </Link>
                        </li>
                        <li className={`${mobTabtyles} ${activeTab === 'Contact' ? 'text-[#1638C9]  dark:text-white' : 'text-gray-600 dark:text-gray-400'}`} onClick={() => {
                            setActiveTab("Contact")
                            closeSideBar();
                        }}>

                            <Link to={"/contact"} className="ms-3" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div
                        onClick={changeTheme}
                        className="flex items-center gap-2 p-2 px-4 mt-4 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                    >
                        {isDark ? <BsSun size={18} /> : <BsMoonStars size={18} />} Theme
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default MobNavbar