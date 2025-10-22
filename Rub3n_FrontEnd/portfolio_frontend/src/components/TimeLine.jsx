"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing " ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20 px-4 md:px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-40 md:gap-10 "
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-20 md:top-40 lg:max-w-sm md:w-full">
              <div className="absolute left-0 md:-left-[70px] flex items-center justify-center w-16 h-16 md:w-auto md:h-auto">
                <img
                  src={item.logo}
                  alt={`${item.job} logo`}
                  className="w-16 h-16 md:w-30 md:h-30 object-cover border-2 border-neutral-700 rounded-full bg-midnight p-1"
                />
              </div>

              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-24 pr-0 md:pl-4 md:pr-4">
              <div className="block mb-3 text-left text-neutral-300 md:hidden ">
                <h3 className="text-sm font-semibold mb-1">{item.date}</h3>
                <h3 className="text-base font-bold leading-tight">
                  {item.job}
                </h3>
              </div>
              {item.contents.map((content, index) => (
                <p
                  className="mb-3 text-xs leading-relaxed md:text-base font-normal text-neutral-400"
                  key={index}
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:-left-2 left-[48px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full  "
          />
        </div>
      </div>
    </div>
  );
};
