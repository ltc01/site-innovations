import React, { useEffect, useState } from "react";
import { FiCalendar, FiEdit, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaUniversity, FaUserCircle } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import Recommendations from "../StudentDasboard/Recommendations";
import HeroDp from "../../assets/Images/dp.jpg";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setProfile } from "../../redux/user/userSlice.js";

function Profile({ userInfo }) {
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const [profileImage, setProfileImage] = useState(
    HeroDp || "https://via.placeholder.com/150"
  );
  const navigate = useNavigate();
  // Load profile image from local storage
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    // dispatch(setProfile(userInfo));
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  // Handle profile image change
  const handleChangeProfile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // Save the image in localStorage
        localStorage.setItem("profileImage", base64String);
        // Update the state to reflect the new image
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 string
    }
  };

  return (
    <div className="relative bg-slate-100 dark:bg-black dark:text-white dark:border dark:border-white p-4 py-8 md:p-6 rounded-lg shadow-md">
      {/* {user.profile} */}
      <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-8 xl:py-4">
        <div className="profile-pic">
          <FaUserCircle size={60} />
          {/* <div className="relative flex bg-gray-300 rounded-full items-center justify-center aspect-square mx-auto md:w-40 md:h-40 w-20 h-20">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover rounded-full mx-auto"
            />
            <label htmlFor="profileImageInput">
              <FiEdit className="absolute bottom-2 text-xl md:text-3xl right-2 text-gray-500 rounded-full p-1 bg-white hover:text-gray-800 cursor-pointer" />
            </label>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChangeProfile}
            />
          </div> */}
          <div className="flex items-center gap-2 my-4 justify-center socials">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <FaLinkedin size={20} />
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <FaGithub size={20} />
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <SiLeetcode size={20} />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="flex flex-col lg:mt-0 space-y-4">
            <p className="uppercase font-bold text-lg">
              {userInfo.first_name + " " + userInfo.last_name || "John Doe"}
            </p>

            <div className="flex items-center">
              <FiMail className="mr-2" />
              <p>{userInfo.email}</p>
            </div>
            {/* <div className="flex items-center">
              <FaUniversity className="mr-2" />
              <p>{userInfo.college}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {" "}
            {/* Right side with 2 items */}
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <p>{userInfo.mobile}</p>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <p>{userInfo.dob}</p>
            </div>
            <div className="flex items-center">
              {" "}
              {/* Optional: Location on right side if needed */}
              <FiMapPin className="mr-2" />
              <p>{userInfo.location}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
