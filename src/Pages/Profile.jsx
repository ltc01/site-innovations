import React, { useEffect, useState } from 'react'
import ProfileComp from '../Components/Profile/ProfileComp';
import Logo from '../Components/Home/Logo';
import { LogoDark } from '../assets/assets';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProfile1 } from '../Redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import Courses from '../Components/StudentDasboard/Courses';
import Achievements from '../Components/StudentDasboard/Achievements';
import Payment from '../Components/StudentDasboard/Payment';
import ProfileManage from '../Components/StudentDasboard/ProfileManage';
import { FaGraduationCap, FaTrophy, FaUser } from 'react-icons/fa6';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa';
const apiUrl = import.meta.env.VITE_API_URL;

const Profile = () => {
    const sideBarLink = [
        { id: 1, name: 'Profile', tab: "profile", icon: <FaUser /> },
        { id: 2, name: 'Courses', tab: "courses", icon: <FaGraduationCap /> },
        { id: 3, name: 'Achievements', tab: "achievements", icon: <FaTrophy /> },
        { id: 4, name: 'Payment', tab: "payment", icon: <RiSecurePaymentFill /> },
        { id: 5, name: 'Manage', tab: "manage", icon: <FaCog /> },
    ]

    const [activeTab, setActiveTab] = useState("profile"); // Default active tab
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUserDetails = async () => {
        const { data } = await axios.get(`${apiUrl}/api/auth/users/me/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem("access_token")}`,
            },
        });
        console.log("user data got:", data);
        setUserInfo(data)
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch(setProfile1(data));
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        if (localStorage.getItem("access_token")) {
            getUserDetails();
            console.log(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        } else {
            navigate("/login");
        }
    }, []);

    const handleLogoutClick = () => {
        // Perform any logout logic here (e.g., clearing authentication tokens)
        localStorage.removeItem("access_token");
        localStorage.removeItem("userInfo");
        navigate("/login", { replace: true });
    };

    if (
        localStorage.getItem("access_token") ||
        localStorage.getItem("userInfo") === null
    ) {
        return (
            <div className='flex lg:items-center w-full h-full bg-blue-100'>
                <div className='py-6 bg-indigo-600 fixed top-0 md:w-[10%] lg:w-[15%] h-screen'>
                    <div>
                        <Link to={'/'}>
                        <FaHome className='block w-14 pl-4 md:w-16 md:pl-8 text-xl text-white lg:hidden' />
                            <div className='hidden lg:block w-32 pl-8'>
                                <img src={LogoDark} alt='logo' />
                            </div>
                        </Link>
                    </div>

                    <ul className='mt-4 lg:mt-12 pl-4'>
                        {sideBarLink.map((l, i) => {
                            return <li onClick={() => setActiveTab(l.tab)} key={i} className={`flex items-center gap-2 py-3 px-4 my-2 rounded-l-xl cursor-pointer hover:bg-blue-50/40 hover:text-black ${activeTab === l.tab ? 'text-black bg-blue-100' : 'text-white'}`}>{l.icon} <span className='hidden lg:block'>{l.name}</span></li>
                        })}
                        <li onClick={handleLogoutClick} className={`py-3 px-4 my-2 rounded-l-xl flex items-center gap-2 text-white cursor-pointer hover:bg-blue-50/40 hover:text-black`}><FaSignOutAlt /> <span className='hidden lg:block'>Logout</span></li>
                    </ul>
                </div>
                <div className="w-[85%] md:w-[90%] lg:w-[85%] ml-auto h-full">
                    {activeTab === "profile" && <ProfileComp userInfo={userInfo} />}
                    {activeTab === "courses" && <Courses />}
                    {activeTab === "achievements" && <Achievements />}
                    {activeTab === "payment" && <Payment />}
                    {activeTab === "manage" && <ProfileManage />}
                </div>
            </div>
        )
    } else {
        return (
            <div onMouseEnter={handleLogoutClick} className="w-screen h-screen"></div>
        );
    }
}

export default Profile