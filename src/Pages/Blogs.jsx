import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import screen_time from "../assets/Blogs/screen_time.png";
import ed_tech from "../assets/Blogs/ed_tech.png";
import era_of_early_childhood from "../assets/Blogs/era_of_early_childhood.jpg";
import ed_tech_enhances_critical_thinking from "../assets/Blogs/ed_tech_enhances_critical_thinking.png";
import new_excited_tech_edu1 from "../assets/Blogs/new_excited_tech_edu1.jpg";
import web_dev1 from "../assets/Blogs/web_dev1.png";
import financial_literacy from "../assets/Blogs/financial_literacy.jpg";
import ed_tech_latest_trends from "../assets/Blogs/ed_tech_latest_trends.png";
import software_testing from "../assets/Blogs/software_testing.png";
import { StarIcon } from "@heroicons/react/16/solid";
import "./Blogs.css";
import { StatupSlider } from "../Components/Blog Components/StatupSlider";
import { TechBlogSlider } from "../Components/Blog Components/TechBlogSlider";
import { BusSlider } from "../Components/Blog Components/BusSlider";

const blog_list = [
  {
    title: "Akshay Saini",
    titleColor: "blue-500",
    imgSrc: screen_time,
    text: "Balancing Screen Time: Healthy Technology Use In Education",
    info: "Dec 22, 2022 • 10 mins read",
  },
  {
    title: "Amily Clarke",
    titleColor: "blue-500",

    imgSrc: ed_tech,
    text: "Challenges of Implementing Ed-Tech Companies And How  to Overcome Them.",
    info: "Nov 20, 2022 • 10 mins read",
  },
  {
    title: "John Watson",
    titleColor: "blue-500",

    imgSrc: era_of_early_childhood,
    text: "The era of early childhood education:  take up changes, block challenges and, exercise of strategic tools ",
    info: "Nov 13, 2022 • 3 mins read",
  },
  {
    title: "Jason Adam",
    titleColor: "blue-500",

    imgSrc: ed_tech_enhances_critical_thinking,
    text: "How Ed-Tech Enhances Critical Thinking Skills: Strategies and Future Prospects",
    info: "Oct 17, 2022 • 5 mins read",
  },
  {
    title: "Mary Smith",
    titleColor: "blue-500",

    imgSrc: new_excited_tech_edu1,
    text: "New and Exciting Technology in Education",
    info: "Oct 10, 2022 • 10 mins read",
  },
  {
    title: "John Statham",
    titleColor: "blue-500",

    imgSrc: web_dev1,
    text: "The path to a successful tech career: The Importance of web development skills",
    info: "Sep 19, 2022 • 8 mins read",
  },
  {
    title: "John Statham",
    titleColor: "blue-500",
    info: "Sep 24, 2022 • 14 mins read",
    imgSrc: financial_literacy,
    text: "Mastering Financial Literacy for All: Essential Skills for a Brighter Future",
  },
  {
    text: "Unlocking the Future of Education: Ed-Tech Latest Trends ",
    info: "Oct 19, 2022 • 8 mins read",
    titleColor: "blue-500",

    imgSrc: ed_tech_latest_trends,
    title: "Akshay Saini",
  },
  {
    info: "Sep 13, 2022 • 5 mins read",
    text: "What is software testing and its importance?",
    titleColor: "blue-500",
    imgSrc: software_testing,
    title: "Amily Clarke",
  },
];

const readers_impact = [
  {
    name: "Nikhil Bamnote",
    comment:
      "I am really impressed by the blogs. The insights are top-notch and have helped me a lot in my career.",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aisha Khan",
    comment:
      "These blogs have been a game-changer for me. The practical tips and real-world examples are exactly what I needed!",
    imgSrc:
      "https://media.istockphoto.com/id/994751270/photo/portrait-young-asian-businesswoman-holding-tablet-smartphone-in-formal-suit-in-office-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=jqKluZegKN97Z8ayfjPYKwBBy15GRJLlxdWtxvOvR-c=",
  },
  {
    name: "Rohan Sharma",
    comment:
      "I love how the blogs break down complex topics into easy-to-understand pieces. Keep up the great work!",
    imgSrc:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Wang",
    comment:
      "The diversity of topics covered in these blogs is amazing. There's always something new to learn.",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661769271139-ac8a0a8a9a8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carlos Rivera",
    comment:
      "As a beginner, these blogs have been incredibly helpful in building my foundational knowledge. Highly recommended!",
    imgSrc:
      "https://media.istockphoto.com/id/1279850633/photo/smiling-young-female-college-student-with-book-and-laptop.jpg?s=2048x2048&w=is&k=20&c=Fg4_QOSE9bswFTU0moX_aZUVDP75ruAulPAwOZ715Ws=",
  },
  {
    name: "Samantha Lee",
    comment:
      "The detailed guides and tutorials have been a lifesaver for my projects. I always look forward to the next post!",
    imgSrc:
      "https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.jpg?s=2048x2048&w=is&k=20&c=ouDSxsrBcXqg-wtFCMH3SRpPW2Or01fVzNwY_qO-Vu8=",
  },
];

const authors_info = [
  {
    name: "Amily Clarke",
    imgSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    noOfBlogs: 5,
  },

  {
    name: "Jason Adam",
    imgSrc:
      "https://images.unsplash.com/photo-1716569743286-d171e2a78059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphc29uJTIwYWRhbXxlbnwwfHwwfHx8MA%3D%3D",
    noOfBlogs: 8,
  },
  {
    name: "Mary Smith",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1682096992977-650be957f857?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    noOfBlogs: 3,
  },
  {
    name: "John Statham",
    noOfBlogs: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ron Clinton",
    noOfBlogs: 2,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1682430161913-db0d5d64e8ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Blog = () => {
  document.title = 'Baoiam - Blogs'
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} w-5 flex rounded-full absolute z-10 h-5 bg-gray-700 dark:bg-gray-700 dark:text-white transition hover:bg-gray-700`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} w-5 flex rounded-full mr-20 absolute z-10 h-5 bg-gray-700 dark:bg-gray-700 dark:text-white transition hover:bg-gray-700`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    cssEase: "linear",
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [authorDetailsVisible, setAuthorDetailsVisible] = useState({
    display: false,
    id: null,
  });
  const authorCardMouseEnter = (id) => {
    setAuthorDetailsVisible({ display: true, id: id });
  };
  const authorCardMouseLeave = () => {
    setAuthorDetailsVisible({ display: false });
  };

  return (
    <div className='dark:bg-black dark:text-white'>
      <div className='max-w-xll mx-8 py-8 dark:bg-black dark:text-white bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='relative'>
          <img
            className='w-full h-80 object-cover'
            src='https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Blog Post Image'
          />
          <div className='absolute inset-0 '></div>
          <div className='absolute bottom-0 left-0 p-6'>
            <h2 className='text-2xl font-bold text-black'>
              Tempor Consectetur Est Elit
            </h2>
            <p className='text-black'>Consequuntur ex co</p>
          </div>
        </div>
      </div>
      <div className='max-w-7xl dark:bg-black dark:text-white mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-center'>
          Our Latest Highlights
        </h1>
        <h2 className='text-l  text-center mt-2 mb-6'>
          Dive into our latest blogs for fresh insights and trending topics{" "}
        </h2>

        <div className=' p-6'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blog_list.map((item, i) => (
            <Link key={i} to={`/Blog_detail/${i}`}>
              <div className='bg-white flex flex-col h-full dark:bg-black dark:text-white shadow-lg dark:hover:shadow-gray-300 dark:hover:shadow-md rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>
                <img
                  className='w-full h-48 object-cover'
                  src={item.imgSrc}
                  alt={`${item.title}`}
                />
                <div className='p-6 flex-grow'>
                  <span
                    className={`text-sm text-${item.titleColor} font-semibold`}
                  >
                    {item.title}
                  </span>
                  <h2 className='text-lg font-bold my-2 truncate'>
                    {item.text}
                  </h2>
                  <p className='text-sm'>{item.info}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* slider */}

        <StatupSlider />
        <TechBlogSlider />
        <BusSlider />
      </div>
      {/* readers section */}

      {/* <div className="max-w-7xl dark:bg-black dark:text-white mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-5 font-bold text-center">
          What Our Readers Are Saying.
        </h1>

        <div className='flex justify-center'>
          <div className='grid mx-auto sm:grid-cols-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6'>
            {readers_impact.map((item, i) => {
              return (
                <div
                  key={i}
                  className='py-3 px-4 mt-10 w-full max-w-[450px]  sm:max-w-[300px] lg:max-w-[450px] dark:shadow-md bg-gradient-to-b cursor-pointer hover:scale-105 transition-all dark:bg-black shadow-lg rounded-md from-[#a5b4fc] to-[#ffffff] dark:from-black dark:shadow-transparent dark:hover:shadow-sm dark:hover:shadow-gray-200 shadow-gray-400 relative ease-in-out'
                >
                  {" "}
                  <img
                    src={item.imgSrc}
                    className='rounded-full object-cover w-[95px] relative bottom-10 h-[95px] xs:w-[75px] xs:h-[75px]'
                  />
                  <div className='absolute top-5 right-8'>
                    <StarIcon className='h-8 w-8 text-yellow-400' />
                  </div>
                  <div className='relative bottom-5 dark:text-white'>
                    <h3 className='m-0 font-bold text-lg'>{item.name}</h3>
                    <h5 className='text-xs'>{item.comment}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      {/* Authors section */}
      {/* <div className="max-w-7xl dark:bg-black dark:text-white mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-3xl mb-5 font-bold text-center">
          Meet Our Authors
        </h1>
        <div className=" w-full px-3 flex justify-center flex-col  blog-carousel">
          <Slider {...settings}>
            {authors_info.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex justify-center p-4 sm:p-6" // Center items in the slider
                >
                  <div
                    onMouseEnter={() => authorCardMouseEnter(id)}
                    onMouseLeave={() => authorCardMouseLeave()}
                    className='shadow-xl relative hover:bg-gradient-to-b lg:max-w-sm hover:shadow-md hover:shadow-black hover:dark:shadow-white rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out'
                  >
                    <img src={item.imgSrc} className='rounded-md w-full' />
                    <h2
                      className={`${
                        authorDetailsVisible.display &&
                        authorDetailsVisible.id == id
                          ? "text-sm w-full absolute bottom-5 bg-white text-black  px-2 py-1 rounded font-bold sm:text-base md:text-lg lg:text-md mt-3 mb-3"
                          : "hidden top-20"
                      }`}
                    >
                      {item.name}
                      <br />
                      <span className='text-sm sm:text-xs'>
                        Number of blogs: {item.noOfBlogs}
                      </span>
                    </h2>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

     </div> */}
    </div>
  );
};

export default Blog;
