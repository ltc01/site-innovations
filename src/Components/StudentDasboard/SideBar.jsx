import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaTrophy,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import ProfilePage from "./ProfilePage";
import Certificate from "./Certificate"; // Import the Certificate component
import Courses from "./Courses"; // Import the Courses component
import ProfileManage from "./ProfileManage";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { useDispatch } from "react-redux";
// import { setProfile1 } from "../../redux/user/userSlice";
import { setProfile1 } from "../../Redux/user/userSlice.js";
// import { setProfile } from "../../redux/user/userSlice";
const apiUrl = import.meta.env.VITE_API_URL;

const Sidebar = () => {
  document.title = "Baoiam - User Profile";
  const [activeTab, setActiveTab] = useState("profile"); // Default active tab
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/auth/users/me/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(data);
      dispatch(setProfile1(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(
        "from local storage:",
        JSON.parse(localStorage.getItem("userInfo"))
      );
      // setUserInfo(localStorage.getItem("userInfo"));
    } catch (err) {
      console.log(err.stack);
    }
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserDetails();
    console.log(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  // Function to determine class names for the tabs based on active state
  const tabClassNames = (tab) =>
    activeTab === tab
      ? " glass bg-white backdrop-filter backdrop-blur-lg dark:bg-black dark:text-white p-4 rounded-l-full flex gap-2 text-sm lg:text-lg items-center cursor-pointer relative"
      : "p-4 rounded-l-full flex gap-2 text-sm lg:text-lg items-center cursor-pointer text-white relative";

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfilePage userInfo={userInfo} />;
      case "courses":
        return <Courses />;
      case "achievements":
        return <Certificate />;
      case "payments":
        return <Payment />;
      case "management":
        return <ProfileManage userInfo={userInfo} setUserInfo={setUserInfo} />; // Replace with the actual Profile Management component
      default:
        return <ProfilePage userInfo={userInfo} />;
    }
  };
  const ActiveTabColor = (tab) => {
    return activeTab === tab ? " text-lg" : " text-lg";
  };
  const navigate = useNavigate(); // Initialize navigate

  const handleLogoutClick = () => {
    // Perform any logout logic here (e.g., clearing authentication tokens)
    localStorage.removeItem("access_token");
    localStorage.removeItem("userInfo");
    navigate("/login"); // Redirect to the home page
  };

  return (
    <div className="flex relative bg-gradient-to-r z-40 from-indigo-700 to-indigo-500 h-full pt-8 transition duration-500">
      {/* Sidebar */}
      <div className="absolute py-2 top-0 w-full md:hidden">
        <button className="px-4" onClick={openSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40  md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed md:static pl-3.5 py-8 top-0 left-0 h-full md:h-auto w-64 bg-gradient-to-r z-40 from-indigo-700 to-indigo-500 dark:bg-black dark:text-white transition-transform transform duration-200 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <button className="absolute top-4 right-4 md:hidden">
          <IoCloseSharp onClick={closeSidebar} size={24} />
        </button>
        {/* Dashboard Heading */}
        <h2 className="xl:text-3xl md:text-lg w-fit mx-auto text-base text-white font-bold">
          My Account
        </h2>

        {/* Sidebar Tabs */}
        <ul className="my-6">
          {/* My Profile Tab */}
          <li
            onClick={() => setActiveTab("profile")}
            className={`${tabClassNames("profile")}`}
          >
            <FaUser className={ActiveTabColor("profile")} />
            <span className=" ">My Profile</span>
          </li>

          {/* All Courses Tab */}
          <li
            onClick={() => setActiveTab("courses")}
            className={tabClassNames("courses")}
          >
            <FaGraduationCap className={ActiveTabColor("courses")} />
            <span className=" ">My Courses</span>
          </li>

          {/* Achievements Tab */}

          <li
            onClick={() => setActiveTab("achievements")}
            className={tabClassNames("achievements")}
          >
            <FaTrophy className={ActiveTabColor("achievements")} />
            <span className=" ">Achievements</span>
          </li>

          {/* Payment */}
          <li
            onClick={() => setActiveTab("payments")}
            className={tabClassNames("payments")}
          >
            <RiSecurePaymentFill className={ActiveTabColor("payments")} />
            <span className=" ">Payment</span>
          </li>

          {/* Profile Management Tab */}
          <li
            onClick={() => setActiveTab("management")}
            className={`${tabClassNames("management")} `}
          >
            <FaCog className={ActiveTabColor("management")} />
            <span className=" ">Manage</span>
          </li>

          {/* Logout Tab */}

          <li onClick={handleLogoutClick} className={tabClassNames("logout")}>
            <FaSignOutAlt className={ActiveTabColor("logout")} />
            <span className="">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-white dark:bg-black md:p-6 p-4">{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
