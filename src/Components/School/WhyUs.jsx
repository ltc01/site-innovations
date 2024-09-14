import React from "react";
import { FiCheckCircle, FiTrendingUp, FiClock } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="py-16 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg ">
            We deliver the best service with the highest quality and commitment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiCheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="mt-2 text-center">
              We ensure the highest standards of quality in every project.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiTrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold ">Innovation</h3>
            <p className="mt-2 text-center">
              We bring cutting-edge technology and creativity to every project.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiClock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Reliability</h3>
            <p className="mt-2 text-center">
              Count on us to deliver on time, every time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FaHandsHelping className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Support</h3>
            <p className="mt-2 text-center">
              Our team is here to support you 24/7, every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
