import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/img1.png";
import { FaBars, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
// import CoursesList from "../CoursesList";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { CollegeCourseData, OtherCourseData, School } from "../../Data";
// import { RxCross2 } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu3Line, RiSearch2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import logo from "../../assets/BAOAM.png";
import logoDark from "../../assets/logo-bg-removed.png";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { deleteUserData } from "../../redux/user/userSlice";
import { deleteUserData1 } from "../../Redux/user/userSlice";
import MobNavbar from "./MobNavbar";
import Logo from "./Logo";

const Navbar = ({ theme }) => {

  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);
  const [subCateDrop, setSubCateDrop] = useState(false);
  const [schoolCate, setSchoolCate] = useState(false);
  const dispatch = useDispatch();
  const [collegeCate, setCollegeCate] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [userDrop, setUserDrop] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [linkActive, setLinkActive] = useState("Home");
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const userDropDownRef = useRef();
  const navigate = useNavigate();
  const userhandleDropDownRef = useRef();
  const darkTheme = () => {
    setIsDark(!isDark);
    theme();
  };

  const handleLinkClick = (link) => {
    setLinkActive(link);
  };

  const getCourseData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.baoiam.com/api/categories/"
      );
      setSchoolCourses(data[0].subcategories);
      setCourses(data);
      console.log(data);
    } catch (err) {
      // console.log(err.message);
    }
  };

  const HideUserDrop = (event) => {
    if (
      userDropDownRef.current &&
      !userDropDownRef.current.contains(event.target) &&
      userhandleDropDownRef.current &&
      !userhandleDropDownRef.current.contains(event.target)
    ) {
      setUserDrop(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    getCourseData();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", HideUserDrop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", HideUserDrop);
    };
  }, []);

  // Function to handle mouse entering the dropdown
  const handleMouseEnter = () => {
    if (delayHide) clearTimeout(delayHide); // Clear any existing timeout
    setShow(true);
  };

  // Function to handle mouse leaving the dropdown
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setShow(false), 300); // Set a 300ms delay
    setDelayHide(timeout); // Store the timeout so it can be cleared if necessary
  };




  return (
    <>
    {showmenu && <div className="overlay fixed top-0 right-0 w-full h-full bg-black opacity-40 z-40 lg:hidden" onClick={()=>setShowmenu(false)}></div>}
      <div
        className={`flex z-[90] items-center justify-between px-4 py-2 w-full sticky top-0 ${isTransparent
          ? "bg-white dark:bg-[#080529]"
          : "bg-white/70 backdrop-blur dark:bg-black/30 "
          }`}
      >

        {/* Logo */}

        <Logo isDark={isDark}/>

        {/* NavLinks */}
        <div
          className={`hidden lg:flex items-center ${isDark ? "font-semibold" : "font-medium"
            } justify-between `}
        >
          <Link
            to={"/"}
            onClick={() => handleLinkClick("Home")}
            className={`mx-4 ${
              location.pathname === "/" && linkActive === "Home"
                ? "text-orange-500"
                : ""
            }`}
          >
            Home
          </Link>
          <li
            onClick={() => setShow(!show)}
            className={`mx-4 cursor-pointer flex gap-2 items-center`}
          >
            Courses
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>

          {show && (
            <div
              className="absolute px-4 top-[4.5rem] font-normal left-52 bg-white dark:bg-gray-700 border-black/20 border-[1px] rounded-b-3xl text-sm p-1 shadow-lg z-50 dark:text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex relative rounded-md">
                <div className="absolute left-[6%] bottom-[101%]  border- cd 8 border-x-transparent border-t-transparent border-b-gray-100"></div>

                {/* School Course */}
                {courses[0] && (
                  <div className="p-4">
                    <Link
                      onClick={() => setShow(false)}
                      to={`/courses/school`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[0]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[0]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            onClick={() => setShow(false)}
                            to={`/course/${sub.name}/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {courses[1] && (
                  <div className="p-4">
                    <Link
                      onClick={() => setShow(false)}
                      to={`/courses/college`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[1]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[1]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            onClick={() => setShow(false)}
                            to={`/course/${sub.name}/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {courses[2] && (
                  <div className="p-4">
                    <Link
                      onClick={() => setShow(false)}
                      to={`/courses/other`}
                      className="font-semibold mb-2 px-2 text-base text-slate-800 dark:text-white hover:underline"
                    >
                      {/* {c.Cate} */}
                      {courses[2]?.name}
                    </Link>
                    <ul className="flex flex-col">
                      {courses[2]?.subcategories.map((sub, index) => {
                        return (
                          <Link
                            key={index}
                            onClick={() => setShow(false)}
                            to={`/course/${sub.name}/${sub.id}`}
                            className="px-2 py-1 text-slate-800 dark:text-slate-200 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:text-slate-500"
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          <Link
            to={"/about-us"}
            onClick={() => handleLinkClick("About")}
            className={`mx-4 text-nowrap hover:text-indigo-500 ${
              location.pathname === "/about-us" && linkActive === "About"
                ? "text-indigo-600"
                : ""
            } `}
          >
            About Us
          </Link>

          <Link
            to={"/pap"}
            onClick={() => handleLinkClick("PAP")}
            className={`mx-4 hover:text-indigo-500 ${
              location.pathname === "/pap" && linkActive === "PAP"
                ? "text-indigo-600"
                : ""
            } `}
          >
            PAP
          </Link>

          <Link
            to={"/itie"}
            onClick={() => handleLinkClick("ITIE")}
            className={`mx-4 hover:text-indigo-500 ${
              location.pathname === "/itie" && linkActive === "ITIE"
                ? "text-indigo-600"
                : ""
            } `}
          >
            ITIE
          </Link>

          <Link
            to={"/blogs"}
            onClick={() => handleLinkClick("Blog")}
            className={`mx-4 hover:text-indigo-500 ${
              location.pathname === "/blogs" && linkActive === "Blog"
                ? "text-indigo-600"
                : ""
            } `}
          >
            Blog
          </Link>

          <Link
            to={"/contact"}
            onClick={() => handleLinkClick("Contact")}
            className={`mx-4 hover:text-indigo-500 ${
              location.pathname === "/contact" && linkActive === "Contact"
                ? "text-indigo-600"
                : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Last */}
        <div>
        <div className="flex items-center gap-4 text-black dark:text-white">
          <div className="flex items-center gap-2">
          
            <SearchBox />
           
            <div ref={userhandleDropDownRef}>
              <FaRegUser
                onClick={() => setUserDrop(!userDrop)}
                size={18}
                className="z-10 relative cursor-pointer"
              />
            </div>

            {userDrop && (
              <div
                ref={userDropDownRef}
                className="z-40 absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 md:w-28 dark:bg-gray-700 dark:divide-gray-600"
              >
                {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div> */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {!localStorage.getItem("access_token") ? (
                    <Link
                      to={"/login"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/login">Login</NavLink>
                    </Link>
                  ) : (
                    <Link
                      to={"/profile"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/profile">Profile</NavLink>
                    </Link>
                  )}
                  {!localStorage.getItem("access_token") ? (
                    <Link
                      to={"/signup"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to="/signup">Sign Up</NavLink>
                    </Link>
                  ) : (
                    <p
                      onClick={() => {
                        localStorage.removeItem("access_token");
                        localStorage.removeItem("userInfo");
                        navigate("/login");
                        dispatch(deleteUserData1());
                      }}
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </p>
                  )}
                </ul>
                {/* <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
              </div>
            )}
          </div>

          <span
            onClick={darkTheme}
            className="text-xl hidden lg:block cursor-pointer"
          >
            {isDark ? <BsSun /> : <BsMoonStars />}
          </span>
          <Link to={"/gcep"} className="relative group">
            <button
              type="button"
              class="hidden sm:flex text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 font-semibold rounded-lg text-sm px-8 py-2.5 text-center"
            >
              GCEP
            </button>
          </Link>
          <span
            onClick={() => setShowmenu(old => !old)}
            className="block lg:hidden"
          >
            <RiMenu3Line size={22} />
          </span>
        </div>
        <MobNavbar setShowmenu={setShowmenu} showmenu={showmenu} courses={courses} isDark={isDark} setIsDark={darkTheme}/>
        </div>
      </div>
      </>
  );
};

export default Navbar;
