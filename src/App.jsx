import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Home/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import School from "./Pages/School";
import ContactUs from "./Pages/ContactUs";
import Maintenance from "./Components/Contact/Maintenance";
import ITIE from "./Pages/ITIE";
import AboutUs from "./Pages/AboutUs";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blogs from "./Pages/Blogs";
import Career from "./Pages/Career";
import Blog_detail from "./Pages/Blog_detail";
import HelpCenter from "./Pages/HelpCenter";
import HireFromUs from "./Pages/HireFromUs";
import Enterpunership from "./Pages/Enterpunership";
import PAP from "./Pages/PAP";
import Checkout from "./Pages/Checkout";
import College from "./Pages/College";
import { OurTeam } from "./Pages/OurTeam";
import SideBar from "./Components/StudentDasboard/SideBar";
import ActivateEmail from "./Pages/auth/ActivateEmail";
import ForgetPassword from "./Pages/auth/ForgetPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import SignUp from "./Pages/auth/SignUp";
import Login from "./Pages/auth/Login";
import TeacherDashboard from "./Components/InstructorDashboard/TeacherDashboard";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import InstructorCard from "./Components/CourseDetails/InstructorCard";
import FAQS from "./Components/FAQ/FAQ";

import Refund from "./Components/Refund/Refundpolicy";

import ReferAndEarn from "./Pages/ReferAndEarn";
import BookADemo from "./Pages/BookADemo";
import Loader from "./Components/Loader";
import ChatBot from "./Components/Chatbot/ChatBot";
import GCEP from "./Pages/GCEP";

import { FeaturedBlogDetail } from "./Pages/FeaturedBlogDetail";
import { RecentBlogDetail } from "./Pages/RecentBlogDetail";
import { PopularBlogDetail } from "./Pages/PopularBlogDetail";

import Courses from "./Pages/Courses";
import NotFound from "./Pages/NotFound";
import EnrollNowButton from "./Components/EnrollNowButton/EnrollNowButton";
import Profile from "./Pages/Profile";
import { ContactFormComponent } from "./Components/Contact/ContactForm";
import AuthNavigator from "./Pages/auth/AuthNavigator";

const App = () => {
  const [dark, setDark] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const theme = () => {
    setDark((old) => !old);
    document.body.classList.toggle("dark");
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => {};
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  if(location.pathname === "/profile"){
    return <Profile />
  }

  return (
    <div className="dark:bg-black w-full mx-auto overflow-hidden h-full dark:text-white ">
      <Navbar theme={theme} showForm={showForm} setShowForm={setShowForm} />

      <div className="mt-24 max-w-[1660px] mx-auto">
        <Routes>
          {/* NavLinks */}
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gcep" element={<GCEP dark={dark} />} />
          <Route path="/pap" element={<PAP />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ITIE" element={<ITIE />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Courses */}
          <Route path="/course/:name/:id" element={<CourseDetailsPage />} />

          {/* Blog */}
          <Route path="/Blog_detail/:id" element={<Blog_detail />} />
          <Route path="/Blog_detail" element={<Blog_detail />} />
          <Route path="/Blogdetail/:id" element={<FeaturedBlogDetail />} />
          <Route path="/Blog-detail/:id" element={<RecentBlogDetail />} />
          <Route path="/Blogdetails/:id" element={<PopularBlogDetail />} />

          {/* Career */}
          <Route path="/career" element={<Career />} />

          {/* Our Team */}
          <Route path="/team" element={<OurTeam />} />

          {/* PAP */}
          <Route path="/pap" element={<PAP />} />

          {/* Entrepreneurship */}
          <Route path="/entrepreneurship" element={<Enterpunership />} />

          {/* Terms and Conditions */}
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Privacy policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Checkout */}

          <Route path="/checkout/:id/:plan" element={<AuthNavigator><Checkout /></AuthNavigator>} />
          <Route path="/courses" element={<Courses />} />

          {/* Profile & Dashboard */}
          <Route path="/profile" element={<AuthNavigator><SideBar /></AuthNavigator>} />
          <Route path="/instructor-dashboard" element={<AuthNavigator><TeacherDashboard /></AuthNavigator>} />

          {/* Maintenace */}
          <Route path="/Maintenance" element={<Maintenance />} />

          {/* accounts */}
          <Route path="/activate/:uid/:token" element={<ActivateEmail />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/password-reset/:uid/:token"
            element={<ResetPassword />}
          />
          {/* Help */}
          {/* <Route path='/help' element={<HelpCenter />} /> */}
          {/* Hire */}
          <Route path="/hire" element={<HireFromUs />} />
          {/* <Route path='/instructor' element={<InstructorCard />} /> */}
          <Route path="/hire" element={<HireFromUs />} />
          <Route path="/instructor" element={<InstructorCard />} />
          {/*FAQ*/}
          <Route path="/FAQ" element={<FAQS />} />

          {/*Refund Policy */}
          <Route path="/refund" element={<Refund />} />

          <Route path="/ReferAndEarn" element={<ReferAndEarn />} />
          {/* Book a demo */}

          <Route path="/book-a-demo/:name/:courseId" element={<BookADemo />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {/* <ChatBot /> */}
        <EnrollNowButton showForm={showForm} setShowForm={setShowForm}/>
        {showForm && (
          <ContactFormComponent showForm={showForm} setShowForm={setShowForm} />
        )}
      </div>

      <Footer dark={dark} />
    </div>
  );
};

export default App;
