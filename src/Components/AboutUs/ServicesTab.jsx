import React from "react";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Career, Perks, Review, Service } from "../../assets/assets";

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState("services");
  const renderContent = () => {
    switch (activeTab) {
      case "services":
        return (
          <div className="p-4">
            <div className="container mx-auto ">
              <div className="text-start ">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Expand your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    knowledge
                  </span>
                  , boost your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    career
                  </span>
                </h1>
                <p className="text-gray-500 text-sm">
                  Instead of results speak louder than words we can use we don't deliver promises, we believe in achievements.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Service}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Get Employed in International Firms
                      </div>
                      <p className="text-gray-600 text-sm">
                        Accelerating professional development with guidance from industry experts, driving impactful career outcomes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Top Tier Earning Packages
                      </div>
                      <p className="text-gray-600 text-sm">
                        Get a top tier salary package with our right guidance and secure a great lifestyle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Contest Champions
                      </div>
                      <p className="text-gray-500 text-sm">
                        Encouraging learners to participate in competitions, get rewarded by us, and boosting confidence to excel in cutting-edge challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Proficient Expert
                      </div>
                      <p className="text-gray-500 text-sm">
                        Achieve professional development with our top mentorship from industry experts and drive major impact and career results.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Ignite your professional path, aim for highest {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    achievements
                  </span>
                </h1>
                <p className="text-gray-500 text-sm">
                  Baoiam offers interactive session with live experts class mock test and real time projects and targeted feedback
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%] ">
                  <img
                    src={Career}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Interactive Session
                      </div>
                      <p className="text-gray-600 text-sm">
                        Encouraging learners through highly interactive sessions with experts, creating a comfortable environment that drives engagement and knowledge transfer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Doubts Clearing Session
                      </div>
                      <p className="text-gray-600 text-sm">
                        Clear every doubt with engaging doubts clearing session led by professional, fostering clarity and boosting confidence
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        How to Crack Interview
                      </div>
                      <p className="text-gray-500 text-sm">
                        Crack every interview on your path to success with our expert guidance, and secure a top position in your dream company
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Workshops and Intern Experience
                      </div>
                      <p className="text-gray-500 text-sm">
                        Gain valuable work experience with our diving internships and accurate your career development through immersive workshops
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );

      case "perks":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Uplift and {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    secure organizational
                  </span>{" "}
                  identity
                </h1>
                <p className="text-gray-500 text-sm">
                  Baoiam offers various perks to boost students and learners overall learning and satisfaction, common benefits include total academic and career support, placements assistance etc.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Perks}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Total Academic and Career Support
                      </div>
                      <p className="text-gray-600 text-sm">
                        We're here to support you at every stage offering comprehensive assistance for both academic and career growth
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        One-on-one Sessions with Experts
                      </div>
                      <p className="text-gray-500 text-sm">
                        Receive personalized one on one sessions with top exports for tailored guidance and valuable insights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Interactive Dissection Session
                      </div>
                      <p className="text-gray-500 text-sm">
                        Participate in group discussions that enhance your learning and foster meaningful exchanges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Contests and Tech Competitions
                      </div>
                      <p className="text-gray-500 text-sm">
                        Participate in various contests and tech competitions to showcase and test your skills gaining valuable recognition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Broaden your {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    skills
                  </span>{" "}
                  with our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    advanced
                  </span>{" "}
                  services.
                </h2>
                <p className="text-gray-500 text-sm">
                  Our highly qualitative services include professional counseling, mentoring, guidance, building connections etc.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Review}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Professional Counseling
                      </div>
                      <p className="text-gray-600 text-sm">
                        Get top notch counseling from leading professionals to drive your career growth and achieve your goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                      Mentoring 
                      </div>
                      <p className="text-gray-600 text-sm">
                      Receive expert advice tailored to your domain and make a lasting impact on your career
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                      Guidance 
                      </div>
                      <p className="text-gray-500 text-sm">
                      Gain valuable insights to create a clear career roadmap and reach your destination safely with our guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                      Encouragement 
                      </div>
                      <p className="text-gray-500 text-sm">
                      Motivation is key, but encouragement makes it possible to stay motivated. Cultivate a positive study spirit at every stage with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div>
      <div className="p-4 mx-4 sm:mx-10 ">
        <div className="flex flex-col mb-2 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <button
            className={`text-sm md:text-base font-semibold ${activeTab === "services"
              ? "border-b-4 border-indigo-600 text-indigo-600"
              : "text-blue-950"
              }`}
            onClick={() => setActiveTab("services")}
          >
            What we provide
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${activeTab === "features"
              ? "border-b-4 border-indigo-600 text-indigo-600"
              : "text-blue-950"
              }`}
            onClick={() => setActiveTab("features")}
          >
            Our unique elements
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${activeTab === "perks"
              ? "border-b-4 border-indigo-600 text-indigo-600"
              : "text-blue-950"
              }`}
            onClick={() => setActiveTab("perks")}
          >
            Rewards / Special offerings
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${activeTab === "reviews"
              ? "border-b-4 border-indigo-600 text-indigo-600"
              : "text-blue-950"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Highlights of top appraisals
          </button>
        </div>

        {/* Render content based on selected tab */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default ServicesTab;
