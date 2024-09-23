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
                  Baoiam provides various services, including personalized
                  career counseling, resume and cover letter writing, interview
                  preparation, and networking opportunity to ensure students'
                  career growth is accelerated.
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Counseling
                      </div>
                      <p className="text-gray-600 text-sm">
                        Guiding students with personalized education advice for
                        academic success digitally.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Mentorship
                      </div>
                      <p className="text-gray-600 text-sm">
                        Guidance, support, and growth through personalized
                        learning from expert mentors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Assistance
                      </div>
                      <p className="text-gray-500 text-sm">
                        We have the best personalized learning, expert guidance,
                        and innovative educational solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Networking
                      </div>
                      <p className="text-gray-500 text-sm">
                        Building connections for knowledge sharing and growth in
                        educational technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Investment
                      </div>
                      <p className="text-gray-500 text-sm">
                        We invest in technology, innovation, and personalized
                        learning solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Support
                      </div>
                      <p className="text-gray-500 text-sm">
                        Provides efficient, personalized assistance for seamless
                        learning experiences and growth.
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
          <div className="p-4 sm:p-8 md:mr-20">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Accelerate your career, unleash your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    potential
                  </span>
                </h1>
                <p className="text-gray-500 text-sm">
                  Baoiam provides various features like live expert classes,
                  mock tests, and real-time projects to make sure students'
                  career growth is accelerated. These interactive sessions
                  provide students with the oppotunity to learn from the best,
                  ask questions, clear doubts, and receive proper feedback.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%] ">
                  <img
                    src={Career}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Live Expert Classes
                      </div>
                      <p className="text-gray-600 text-sm">
                        Live expert classes deliver personalized, interactive
                        learning experiences for everyone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Doubts & Query Sessions
                      </div>
                      <p className="text-gray-600 text-sm">
                        Empowering learners through interactive doubt resolution
                        and query sessions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Real-Time Projects
                      </div>
                      <p className="text-gray-500 text-sm">
                        Empowering students through innovative real-time
                        projects and interactive learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Interview Preparations
                      </div>
                      <p className="text-gray-500 text-sm">
                        Empowering learners with innovative tools for growth and
                        success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Internships and Trainings
                      </div>
                      <p className="text-gray-500 text-sm">
                        Offering cutting-edge internships and training programs
                        to boost career skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Mock Assessments
                      </div>
                      <p className="text-gray-500 text-sm">
                        Offering innovative mock assessments to evaluate and
                        enhance learning outcomes.
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
          <div className="p-4 sm:p-8 md:mr-20">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Perks{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    strengthen & reinforce
                  </span>{" "}
                  company culture
                </h1>
                <p className="text-gray-500 text-sm">
                  Companies often provide various perks to their employees in
                  order to enhance their overall job satisfaction and well being.
                  Perks offered by our company includes the following.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Perks}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        100% Learning and Employment
                      </div>
                      <p className="text-gray-600 text-sm">
                        Delivering excellence and career success for every
                        learner.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Placement Assistance
                      </div>
                      <p className="text-gray-600 text-sm">
                        Placement assistance ensures students secure job
                        opportunities with top companies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Real-Time Group Discussion Rounds
                      </div>
                      <p className="text-gray-500 text-sm">
                        We provide revolutionized learning with cutting-edge
                        technology and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Personal Interaction
                      </div>
                      <p className="text-gray-500 text-sm">
                        Transforming education through innovative technology,
                        empowering learners to succeed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Membership Access
                      </div>
                      <p className="text-gray-500 text-sm">
                        Unlock exclusive learning with Membership Access:
                        growth, skills, empowerment, and success!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Hackathons and Contest Entries
                      </div>
                      <p className="text-gray-500 text-sm">
                        Hackathons and contest entries foster innovation,
                        creativity, learning, and growth.
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
          <div className="p-4 sm:p-8 md:mr-20">
            <div className="container mx-auto">
              <div className="text-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  We don't deliver promises, we{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    believe
                  </span>{" "}
                  in achievements
                </h2>
                {/* <p className="text-gray-500 text-sm">
                  Check out the top reviews from our top performers.
                </p> */}
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Review}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Be employed in international firms
                      </div>
                      <p className="text-gray-600 text-sm">
                        Empowering learners through innovative technology,
                        fostering growth, success, and transformation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Top tier earning packages
                      </div>
                      <p className="text-gray-600 text-sm">
                        Empowering students with cutting-edge skills for success
                        in high-paying careers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Contest champions
                      </div>
                      <p className="text-gray-500 text-sm">
                        Contest winners showcase skills, innovation, growth,
                        learning, talent, and transformation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Proficient expert
                      </div>
                      <p className="text-gray-500 text-sm">
                        Empowering skilled professionals through innovative
                        technology and accessible learning for growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Get funding
                      </div>
                      <p className="text-gray-500 text-sm">
                        Empower learners globally through innovative technology,
                        fostering growth and success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        Exclusive subscribers
                      </div>
                      <p className="text-gray-500 text-sm">
                        Premium members enjoy exclusive access to advanced
                        courses, resources, and support.
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
            className={`text-sm md:text-base font-semibold ${
              activeTab === "services"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-blue-950"
            }`}
            onClick={() => setActiveTab("services")}
          >
            What we provide
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${
              activeTab === "features"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-blue-950"
            }`}
            onClick={() => setActiveTab("features")}
          >
            Our unique elements
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${
              activeTab === "perks"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-blue-950"
            }`}
            onClick={() => setActiveTab("perks")}
          >
            Rewards
          </button>
          <button
            className={`text-sm md:text-base font-semibold ${
              activeTab === "reviews"
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
