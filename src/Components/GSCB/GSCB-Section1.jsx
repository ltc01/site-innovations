import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

const marquee_imgs = [
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F4XvJVi6UxVYuBoNcqtYnUO%2F51dc6ab3d5fb7a294e9c1ae82ec60c6f%2FGroup_86352.png&w=1200&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2WBizctzgyfHmlJ4ij7XKG%2Fd6357a445dd2d11ef7cd043b5eec7185%2FGroup_86351.png&w=750&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2vSJPjxsts6ozhd7QCTXgS%2F33323dbc6e5b6484e6b1631130e96a27%2FGroup_86347.png&w=1080&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F3DzWyNVXsTpnjKt4veGa37%2F4bd2c6121f835c28d9c180895dbc8de2%2FGroup_86348.png&w=1920&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F16BgY5izUWIBlgThVza7hW%2F21150260e1b094f455c474b5aec0a994%2FGroup_86349.png&w=828&q=90",
  "https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F3QtrtKRIon2vI1Y7KkuX9U%2F619b3d342fd9f6206cab033c7f2e42d0%2FGroup_86350.png&w=1200&q=90",
];

const Section1 = ({ dark }) => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga coillo? Voluptatum earum aliquid quasi consequuntur, sapiente nam hic!";

  useEffect(() => {
    const color = dark ? "white" : "black";
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 6,
        start: "top 90%",
        end: "bottom 85%",
      },
      color: color,
      stagger: 0.1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <section className="flex items-center justify-evenly flex-col">
      <div className="mt-[40px] text-center relative">
        <h2 className="text-[2vw] max-xs:text-[4vw] max-xs:font-[600] max-md:text-[3vw] ">
          Trusted by a global community of progressive educators
        </h2>

        <div className="mt-[30px] relative">
          <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>

          <Marquee className="w-[80vw] mb-[4rem] max-xs:mb-[0rem]" speed={100}>
            {marquee_imgs.map((el, i) => (
              <div key={i} className="mr-[-5rem] max-xs:mr-[-6rem]">
                <img
                  className="w-[30%] dark:invert dark:brightness-0 dark:contrast-200"
                  src={el}
                  alt="img"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div
        ref={triggerRef}
        className="px-[6vw] max-xs:px-4 max-xs:py-8 max-md:py-0 text-center"
      >
        {text.split("").map((letter, index) => (
          <span
            className="leading-[5vw] font-normal text-slate-200 dark:drop-shadow-[0_0_0.03rem_white] text-[3vw] max-xs:leading-[6vw] max-xs:font-medium max-xs:text-[4.5vw] max-md:text-[4.5vw] max-md:leading-[7vw] max-xs:text-white"
            key={index}
            ref={setlettersRef}
          >
            {letter}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Section1;
