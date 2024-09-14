import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Home/Navbar";
import { Route, Routes } from "react-router-dom";
import GSCB from "./Pages/GSCB";
import Home from "./Pages/Home";
import School from "./Pages/School";
import ContactUs from "./Components/Contact/ContactUs";
import Maintenance from "./Components/Contact/Maintenance";
import ITIE from "./Pages/ITIE";
import AboutUs from "./Pages/AboutUs";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blogs from "./Pages/Blogs";
import Career from "./Components/Career/Career";
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
import FAQS from "./Components/FAQ/FAQ"
import BookADemo from "./Pages/BookADemo";

const App = () => {
  const [dark, setDark] = useState(false);

  const theme = () => {
    setDark(old=>!old);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="dark:bg-[#080529] w-full h-full dark:text-white ">
      <Navbar theme={theme} />

      <Routes>
        {/* NavLinks */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gcep" element={<GSCB />} />
        <Route path="/pap" element={<PAP />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ITIE" element={<ITIE />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Courses */}
        <Route path="/courses/school" element={<School />} />
        <Route path="/courses/college" element={<College />} />
        <Route path="/course/:name/:id" element={<CourseDetailsPage />} />

        <Route
          path="/course/:course"
          element={<div>colleg Sub Category</div>}
        />

        {/* Blog */}
        <Route path="/Blog_detail/:id" element={<Blog_detail />} />
        <Route path="/Blog_detail" element={<Blog_detail />} />

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
        <Route path="/checkout/:course/:id/:plan?" element={<Checkout />} />

        {/* Profile & Dashboard */}
        <Route path="/profile" element={<SideBar />} />
        <Route path="/instructor-dashboard" element={<TeacherDashboard />} />

        {/* Maintenace */}
        <Route path="/Maintenance" element={<Maintenance />} />

        {/* accounts */}
        <Route path="/activate/:uid/:token" element={<ActivateEmail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/password-reset/:uid/:token" element={<ResetPassword />} />

        {/* Help */}
        <Route path="/help-center" element={<HelpCenter />} />

        {/* Hire */}
        <Route path="/hire" element={<HireFromUs />} />

        <Route path="/instructor" element={<InstructorCard />} />

        {/*FAQ*/}
        <Route path="/FAQ" element={<FAQS />} />

        {/* Book a demo */}
        <Route path="/book-a-demo/:courseId" element={<BookADemo />} />

      </Routes>
      <Footer dark={dark} />
    </div>
  );
};

export default App;
