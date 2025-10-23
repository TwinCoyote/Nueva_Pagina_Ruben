import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import Emailcard from "../components/Email-card";
import { FlickeringGrid } from "../components/FlickeringGrid";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading" id="about">
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ruben R.</p>
            <p className="subtext">
              Over the last year, I developed my frontend and backend dev skills
              to deliver dynamic web applications and embedded projects.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Microcontrollers Stack
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Analog Electronic"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "40%", left: "90%" }}
              image="assets/logos/micro.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "10%", left: "50%" }}
              text="Digital Systems"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", bottom: "10%", left: "70%" }}
              text="PCB Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "40%", left: "10%" }}
              image="assets/logos/arduino.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "20%", left: "30%" }}
              image="assets/logos/siu.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/Cmas.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "70%", left: "25%" }}
              image="assets/logos/ESP32.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/raspberry-pi.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}

        <div className="bg-black grid-3 relative">
          <Link
            to="/Certifications"
            className="block hover:opacity-80 transition-opacity"
          >
            <FlickeringGrid className="absolute inset-0 z-0" />

            <div className="fz-10 w-[50%] relative z-10 p-4">
              <p className="headtext text-4xl font-bold text-white">
                Certifications
              </p>
              <p className="subtext text-lg text-gray-200 mt-4">
                I have earned certifications from recognized global institutions
                that validate my skills in electronics, embedded systems, and
                software development.
              </p>
              <figure className="absolute left-[80%] top-[10%]">
                {/* <Globe/> */}
              </figure>
            </div>
          </Link>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>

            <Emailcard />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in embedded systems, electronics, and software
              development — combining microcontroller programming, circuit
              design, and modern frameworks to create efficient and scalable
              solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
