import React, { useEffect, useState } from "react";
import CourseCard from "../Components/College/CourseCard";
import CoursesList from "../Components/CoursesList";
import { Link, useParams } from "react-router-dom";
import FilterSidebar from "../Components/College/CourseFilters";
import SortPopover from "../Components/College/SortPopover";
import CourseCarousel from "../Components/College/CourseCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import cards from "../Components/School/cards.json";
import Testimonials from "../Components/College/Testimonials";
import ExploreSubjects from "../Components/College/ExploreSubjects";
import { CollegeCourseData } from "../Data";

function College() {
  document.title = 'Baoiam - College'
  const swiperSettings = {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    className:
      "mySwiper w-full h-full sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-100 lg:h-120 xl:w-120 xl:h-144",
  };
  const params = useParams();
  const allCourses = CollegeCourseData[0].subCate;
  const [filteredCourses, setFilteredCourses] = useState([...allCourses]);
  const [duration, setDuration] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const isPriceInRange = (coursePrice, range) => {
    console.log(range);

    if (range === "Free") {
      return coursePrice === "Free";
    }
    return coursePrice !== "Free";
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedCourses = allCourses;

      if (selectedCategory.length > 0) {
        updatedCourses = updatedCourses.filter((course) =>
          selectedCategory.includes(course.category)
        );
      }

      if (selectedDifficulty.length > 0) {
        updatedCourses = updatedCourses.filter((course) =>
          selectedDifficulty.includes(course.difficultyLevel)
        );
      }

      if (selectedPrice.length > 0) {
        updatedCourses = updatedCourses.filter((course) =>
          //   selectedPrice.includes(course.price);
          selectedPrice.some((range) => isPriceInRange(course.price, range))
        );
      }
      setFilteredCourses(updatedCourses);
    };

    applyFilters();
  }, [selectedCategory, selectedDifficulty, selectedPrice]);

  return (
    <div className="py-12 w-10/12 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center ">
        <div className="w-full lg:w-1/2 md:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Welcome to Our College Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
            Discover a diverse selection of courses designed to inspire learning
            and help you reach your academic and career goals. Whether you're
            exploring a new field or advancing your expertise, our programs
            provide the knowledge and skills you need for success. Start your
            educational journey with us today!
          </p>
          <Link
            to={"/courses"}
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg"
          >
            Link Explore Courses
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="">
            <Swiper
              effect={swiperSettings.effect}
              grabCursor={swiperSettings.grabCursor}
              modules={[EffectCards, Autoplay]}
              autoplay={swiperSettings.autoplay}
              className={`mySwiper w-full h-full sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-100 lg:h-120 xl:w-120 xl:h-144`}
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center rounded-xl text-2xl font-bold text-white"
                  style={{
                    backgroundColor: card.backgroundColor,
                    backgroundImage: card.backgroundImage
                      ? `url(${card.backgroundImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <hr className="md:my-8 border-slate-600" />

      {/* Course Carousel */}
      <CourseCarousel />

      {/* Course Listing */}
      <div className=" py-8">
        <h2 className="text-3xl font-bold  ">All Courses</h2>
        <div className="  h-max lg:flex">
          <div className="college-filters relative invisible lg:visible">
            <FilterSidebar
              toggler={() => {
                setShowFilters((old) => !old);
              }}
              isOpen={showFilters}
              setCategory={setSelectedCategory}
              setDifficulty={setSelectedDifficulty}
              setPrice={setSelectedPrice}
            />
          </div>

          <div className="college-main w-full flex flex-col items-end ">
            <div className="college-sort flex items-center justify-between lg:justify-end w-11/12 mx-auto">
              <div className="college-filters relative lg:hidden">
                <FilterSidebar
                  toggler={() => {
                    setShowFilters((old) => !old);
                  }}
                  isOpen={showFilters}
                  setCategory={setSelectedCategory}
                  setDifficulty={setSelectedDifficulty}
                  setPrice={setSelectedPrice}
                />
              </div>
              <SortPopover
                setFilteredCourses={setFilteredCourses}
                courses={filteredCourses}
              />
            </div>
            {filteredCourses.length ? (
              <div className="w-11/12 college-card-container grid grid-cols-[repeat(auto-fill,_minmax(252px,1fr))] mx-auto gap-4">
                {filteredCourses.map((course) => {
                  return <CourseCard course={course} />;
                })}
              </div>
            ) : (
              <div className="text-center mx-2 w-full text-3xl flex items-center font-bold py-12 justify-center">
                No data found!
              </div>
            )}
          </div>
        </div>
      </div>
      <ExploreSubjects />
      <Testimonials />
    </div>
  );
}

export default College;
