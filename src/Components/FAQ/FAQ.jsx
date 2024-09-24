import React, { useState } from "react";
import faq from "./faq.json"; // Importing the JSON directly

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mx-5 shadow-lg text-gray-600 px-4 py-1 my-4 sm:px-6 lg:px-8">
      <button
        className="w-full text-left flex justify-between items-center py-2 sm:py-4 text-md sm:text-lg text-black font-bold hover:scale-105 hover:text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-2">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="py-4">
          <hr className="border-gray-300 mb-4" />
          <p className="text-sm sm:text-md">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  // Define the categories and their respective questions
  const faqCategories = {
    "General Questions": faq.generalQuestions,
    "Courses Enrollment": faq.coursesEnrollment,
    Partnerships: faq.partnerships,
    "Payments & Refunds": faq.paymentsRefunds,
    "Technical Support": faq.technicalSupport,
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-center mb-8 mt-10 sm:mt-20">
        Frequently Asked <span className="text-indigo-600">Questions</span>
      </h2>
      <p className="text-center text-md sm:text-lg  mb-6">
        Find answers to commonly asked questions about our services,
        partnerships, and more.
      </p>

      {Object.entries(faqCategories).map(([category, questions], index) => (
        <div key={index} className="my-6 sm:my-10 ">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4 ">
            {category}
          </h3>
          {Object.values(questions).map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      ))}

      <div className="mt-10 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">
          Still Have Questions?
        </h1>
        <p className="text-sm sm:text-md">
          Didn’t find what you were looking for? Contact us at{" "}
          <a href="mailto:support@yourcompany.com" className="text-indigo-600">
            support@yourcompany.com
          </a>{" "}
          or fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>
      </div>
    </div>
  );
};

export default Faq;
