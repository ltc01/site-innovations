import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import googleImage from "../../assets/Images/google.svg";
import exampleImage from "../../assets/Images/image.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "react-toastify/dist/ReactToastify.css";
const apiUrl = import.meta.env.VITE_API_URL;
const domain = import.meta.env.VITE_DOMAIN_URL;

const Login = () => {
  document.title = 'Baoiam - Login'
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const requestRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("access_token")) navigate("/profile");
    const values = queryString.parse(location.search);
    const state = values.state || null;
    const code = values.code || null;

    console.log("State:", state);
    console.log("Code:", code);

    if (state && code && !localStorage.getItem("authenticated")) {
      googleAuthenticate(state, code);
    }
  }, [location]);

  const googleAuthenticate = async (state, code) => {
    if (requestRef.current) return;
    requestRef.current = true;

    const details = {
      state: state,
      code: code,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    try {
      toast.loading("Verifying...");
      const response = await axios.post(
        `${apiUrl}/api/auth/o/google-oauth2/?${formBody}`,
        config
      );

      console.log(response, "response");
      if (response.status == 201) {
        const data = response.data;
        console.log(data, "data");
        toast.success("Login succcessful");

        localStorage.setItem("access", data.access);
        localStorage.setItem("authenticated", true);

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
    } catch (error) {
      console.error("Google Authentication failed:", error);
      toast.error("Authentication failed. Please try again.");
    } finally {
      requestRef.current = false;
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const toastId = toast.loading("Processing your login...");

      const response = await axios.get(
        `${apiUrl}/api/auth/o/google-oauth2/?redirect_uri=${domain}/login`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log(response, "response received");
        toast.update(toastId, {
          render: "Redirecting to Google login...",
          type: "success",
          isLoading: true,
          autoClose: 2000,
        });
        window.location.replace(response.data.authorization_url);
      } else {
        throw new Error("Failed to get authorization URL.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Processing your login...");

    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/jwt/create/`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        toast.update(toastId, {
          render: "Login successful!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else {
        throw new Error(response.data?.detail || "Login failed.");
      }
    } catch (error) {
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log("error", error);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animation-container {
            animation: fadeIn 0.8s ease-in-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 1.2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 1s ease-in-out forwards;
          }

          .animate-slideInUp {
            animation: slideInUp 1s ease-in-out forwards;
          }
        `}
      </style>

      <ToastContainer />

      <div className="flex items-center justify-center py-16 bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-lg lg:shadow-xl rounded-2xl md:flex-row md:space-y-0">
          {/* Left Side */}
          <div className="flex flex-col justify-center p-8 md:p-14 animate-slideInLeft">
            <span className="mb-3 text-4xl font-bold text-blue-500">
              Welcome back
            </span>
            <span className="font-light text-gray-400 mb-8 animate-fadeIn">
              Welcome back! Please enter your details
            </span>
            <form onSubmit={handleLogin}>
              <div className="py-4 animate-slideInUp">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-4 animate-slideInUp">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between w-full py-4 animate-fadeIn">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember for 30 days</span>
                </div>
                <Link
                  to={"/forget-password"}
                  className="font-bold text-md cursor-pointer"
                >
                  Forgot password
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 transform hover:scale-105 transition-all duration-300 animate-slideInUp"
              >
                Sign in
              </button>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 animate-slideInUp"
            >
              <img
                src={googleImage}
                alt="Google"
                className="w-6 h-6 inline mr-2"
              />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400 animate-fadeIn">
              Don't have an account?{" "}
              <span className="font-bold text-black cursor-pointer">
                Sign up for free
              </span>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative animate-fadeIn">
            <img
              src={exampleImage}
              alt="Example"
              className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
