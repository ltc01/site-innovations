import React, { useEffect, useState } from "react";
import Certificate from "../assets/Certificate.jpg";
import mern from "../assets/mern.png";
import razorpay from "../assets/razorpay.png";
import secure from "../assets/secure.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserIcon,
  PencilIcon,
  ComputerDesktopIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { School, CollegeCourseData, OtherCourseData } from "../Data";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const razorpayKeyId = import.meta.env.RAZORPAY_KEY_ID;

const Checkout = () => {
  const navigate = useNavigate();
  const invalidCouponToast = () => toast("Invalid Referral Code!");
  const { id, plan, course } = useParams();
  const [proceedButton, setProceedButton] = useState(
    `PROCEED TO PAY ₹${plan == "Premium" ? 11999 : 2999}`
  );
  const [referral, setReferral] = useState("");
  const [enrollingCourse, setEnrollingCourse] = useState({});
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/login");
    // alert('id is:',id , ' and plan is:',plan)
    else {
      window.scrollTo(0, 0);
      console.log(course, id, plan);
      if (course == "school") {
        const course = School[0].subCate.filter((item) => {
          return item.id == id;
        });
        setEnrollingCourse(course[0]);
        console.log("course is: ", course);
      } else if (course == "college") {
        const course = CollegeCourseData[0].subCate.filter((item) => {
          return item.id == id;
        });
        setEnrollingCourse(course[0]);
        console.log(course);
      } else {
        const course = OtherCourseData[0].subCate.filter((item) => {
          return item.id == id;
        });
        setEnrollingCourse(course[0]);
        console.log(course);
      }
    }
    return () => {};
  }, []);


  const handleCheckout = () => {
    setProceedButton("Loading....");
    const buyCourse = async () => {
      console.log(localStorage.getItem("access_token"));
      try {
        const { data } = await axios.post(
          `${apiUrl}/api/orders/`,
          {
            plan_id: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const { order_id, total_amount } = data;
        console.log("order_id: " + order_id);
        const options = {
          key: razorpayKeyId,
          amount: total_amount,
          currency: "INR",
          order_id: order_id,
          handler: async function (res) {
            const payment_id = res.razorpay_payment_id;
            const signature = res.razorpay_signature;
            console.log("payment_id:", payment_id);
            console.log("signature:", signature);
            console.log("order_id:(inside razorpay)", order_id);
            try {
              setProceedButton("Verifying....");
              const { data } = await axios.post(
                `${apiUrl}/api/orders/verify_payment/`,
                JSON.stringify({
                  payment_id,
                  order_id,
                  signature,
                }),
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem(
                      "access_token"
                    )}`,
                  },
                }
              );
              console.log("data from razorpay:", data);
              if (data.message == "Payment verified successfully!") {
                toast.success("Enrollment completed successfully!");
                setProceedButton("Success");
                navigate("/profile");
              }
            } catch (err) {
              toast.error(err.message);
              console.log("err.stack: ", err.stack);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          console.error("Razorpay SDK not loaded");
          toast.error("Payment gateway not available");
        }
        // console.log("FROM CHECKOUT: ", data);
      } catch (err) {
        console.log(err.stack);
        console.log(proceedButton);
        setProceedButton(`PROCEED TO PAY ₹${plan == "Premium" ? 11999 : 2999}`);
        // toast.error("Something went wrong");
      }
    };
    buyCourse();
  };

  document.title = `Baoiam - ${enrollingCourse?.course}`;
  

  return (
    <div className="flex flex-wrap dark:bg-black dark:text-white py-4 pb-12 px-4 sm:px-14">
      {/* left section */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 py-6 px-6 lg:px-20 ">
        <div className="flex flex-col py-20">
          <h2 className="font-semibold text-xl mb-4">
            Enhance your programming journey by getting Certified
          </h2>
          <div className="w-full md:max-w-[80%] lg:max-w-[95%]">
            <img
              className="h-full w-full"
              src={Certificate}
              alt="Certificate"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-[90%]">
          <div className="flex items-center mb-2">
            <PercentBadgeIcon className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">No cost EMI</p>
          </div>
          <p className="text-slate-500 mb-6 px-10">
            Easy on your wallet. Choose No cost EMI when paying with credit
            cards.
          </p>
          <div className="flex items-center">
            <HiShieldCheck className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">100% safe & secure payment</p>
          </div>
          <div className="flex justify-start px-8 w-full">
            <img className="h-14 w-28 mr-4" src={secure} alt="secure img" />
            <img className="h-16 w-28" src={razorpay} alt="razorpay img" />
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-col w-full lg:w-1/2 dark:border-gray dark:border-[1.5px] border-slate-400 shadow-lg py-6 px-6 rounded-lg">
        <h1 className="font-semibold text-2xl mb-4">Confirm your order</h1>
        <div className="flex">
          {/* <UserIcon className="h-8 w-8 mr-2 rounded-full border-[1.5px] border-emerald-500 text-white bg-gray-200" /> */}
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="text-sm text-slate-600 font-semibold dark:text-white">
                {JSON.parse(localStorage.getItem("userInfo"))?.first_name +
                  " " +
                  JSON.parse(localStorage.getItem("userInfo"))?.last_name}
              </p>
              {/* <p className="text-sm text-slate-400">8785144645</p> */}
            </div>
            <div className="flex items-center cursor-pointer">
              <PencilIcon className="h-4 w-4 text-orange-500" />
              <span className="ml-2 text-orange-500">Edit</span>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-300 mt-4 mb-4" />
        <div className="flex flex-col mb-10 sm:flex-row">
          {/* <div className="h-38 w-38 mr-4">
            <img
              className="w-full h-full object-cover"
              src={mern}
              alt="course_logo"
            />
          </div> */}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="rounded-md bg-green-200 p-1 w-fit">
                <p></p>
                <p className="text-green-700 px-1 font-medium text-xs">
                  {plan} Plan
                </p>
              </div>

              <h2 className="font-semibold text-lg mb-2">
                {/* {plan} | MERN Stack | Java | English */}
                {course == "school"
                  ? enrollingCourse?.course
                  : course == "college"
                  ? enrollingCourse.courseName
                  : enrollingCourse.course}
              </h2>
              {/* <button
                className="text-[14px] px-3 py-1 rounded-sm ml-5 bg-[#F39B0B] w-[110px] mb-4"
                onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
              >
                {isDescriptionVisible ? "Hide Info" : "View more"}
              </button> */}
              {isDescriptionVisible && (
                <p className="w-3/4 mb-5 mt-1 p-3 border-gray-400 border-2 rounded">
                  {enrollingCourse.desc.substring(0, 150) + "..."}
                </p>
              )}
              <p className="text-slate-500 text-base dark:text-gray-400">
                English • Batch Starts: 26 Sep 2024
              </p>
            </div>
            <p className="text-slate-700 dark:text-white  font-medium text-lg">
              ₹{plan == "Premium" ? 11999 : 2999}
            </p>
          </div>
        </div>
        <div className="mb-5 mx-auto">
          <p className="text-gray-700 text-[12px] font-semibold dark:text-slate-400">
            Have a referral code?
          </p>
          <div className="flex mt-3 gap-5 justify-center items-center flex-wrap">
            <input
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              className="border-2 flex-1 border-gray-400 text-black dark:text-white rounded-sm outline-none dark:border-white dark:bg-black dark:border-2  py-1 px-1"
              type="text"
            />
            <button
              className="px-5 flex-1 py-1 rounded border-indigo-600 hover:bg-indigo-600 hover:text-white transition border-2 w-full"
              onClick={() => {
                if (!referral) {
                  toast.error("Please enter a referral code");
                } else invalidCouponToast();
              }}
            >
              Apply
            </button>
            <ToastContainer />
          </div>
        </div>
        <hr className="border-t-1 border-gray-300 mb-4" />
        <div className="flex justify-between mb-5">
          <h2 className="text-2xl text-black font-semibold dark:text-white">
            Total
          </h2>
          <p className="text-black text-2xl font-semibold dark:text-white">
            ₹{plan == "Premium" ? 11999 : 2999}
          </p>
        </div>

        <button
          disabled={proceedButton === "Loading...."}
          onClick={handleCheckout}
          className={`w-full flex  justify-center rounded-md font-bold text-lg p-2 text-white bg-gradient-to-r 
           
               from-indigo-800 to-indigo-500
                ${
                  proceedButton === "Loading...." &&
                  "from-slate-400 to-slate-400"
                }
          }`}
        >
          <HiShieldCheck className="h-6 w-6 text-white" />
          &nbsp; {proceedButton}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
