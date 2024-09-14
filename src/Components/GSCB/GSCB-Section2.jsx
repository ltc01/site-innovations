import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2 = [
  {
    id: 1,
    img: "https://images.stockcake.com/public/8/5/b/85b92d0b-f22b-47bb-af9f-98c6a4a4fc90_large/team-success-celebration-stockcake.jpg",
    title: "Impact",
    num: "75%",
    subtitle: "say Baoiam has impacted their lives.",
    desc: "We’re many things to many people: globally recognized storyteller, landmark events and conferences hub, and media powerhouse.",
  },
  {
    id: 2,
    img: "https://images.stockcake.com/public/9/8/1/981e49df-df7e-4611-8050-bc3273d91f00_large/formal-handshake-agreement-stockcake.jpg",
    title: "Trust",
    num: "9/10",
    subtitle: "view Baoiam as a trusted brand.",
    desc: "We uphold the highest editorial standards to continually earn our audience's trust and respect.",
  },
  {
    id: 3,
    img: "https://images.stockcake.com/public/1/3/1/13160f49-e156-462a-8938-8f8113757cf4_large/educational-global-event-stockcake.jpg",
    title: "Value",
    num: "2/3",
    subtitle: "feel our partners share our values.",
    desc: "Our value comes from a mission to share the best ideas from around the world.",
  },
];

const Cards = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card-1",
      { y: "0%", x: "30%", opacity: 0 },
      {
        x: "0",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-1",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".card-2",
      { y: "30%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-2",
          start: "top 80%",
          end: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".card-3",
      { y: "0%", x: "-30%", opacity: 0 },
      {
        x: "0",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-3",
          start: "top 120%",
          end: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-full grid grid-cols-3 gap-8 mt-24 px-24 items-center  max-xs:flex max-xs:flex-col max-xs:items-center max-xs:gap-6 max-xs:px-3 max-xs:m-auto">
      {section2.map((info, index) => {
        const cardClass =
          index === 0 ? "card-1" : index === 1 ? "card-2" : "card-3";
        return (
          <div
            key={index}
            className={`group flex flex-col gap-8 relative max-xs:flex max-xs:flex-col max-xs:gap-4  max-xs:m-auto ${cardClass}`}
          >
            <img
              className="w-full h-[32rem] max-xs:w-[35rem] max-xs:h-[15rem] object-cover"
              src={info.img}
              alt={`img${index + 1}`}
            />

            <div className="flex flex-col gap-4 opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/50 transition-all ease-linear text-center pt-24 text-white max-xs:pt-2">
              <h3 className="text-5xl font-bold max-xs:text-4xl">
                {info.title}.
              </h3>
              <h4 className="text-4xl font-bold text-red-600 max-xs:text-3xl">
                {info.num}
              </h4>
              <h5 className="text-2xl font-semibold max-xs:text-xl">
                {info.subtitle}
              </h5>
              <h6 className="text-lg tracking-tight max-xs:text-xs">
                {info.desc}
              </h6>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
