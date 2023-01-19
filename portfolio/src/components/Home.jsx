import React from "react";
import M2 from "../images/m2.png";
import Typed from "react-typed";
function Home() {
  return (
    <div id="State" className="m-1 flex justify-center ">
      <div className="flex flex-wrap justify-center p-24">
        <div className="bg-gradient-to-b drop-shadow-md shadow-blue-gray-100 shadow border rounded-bl-[2rem] rounded-br-[2rem] rounded-t-[12rem]">
          <img className="h-[22rem]" src={M2} alt="me" />
        </div>
        <div>
          <div className="text-2xl text-center text-dg pt-4">
            <div className="flex justify-center">
              <p className="text-2xl text-light-blue-800">H</p>
              <Typed
                className="text-2xl text-light-blue-800 "
                strings={["ello, World! My name is"]}
                typeSpeed={200}
                backSpeed={100}
                loop
                showCursor={false}
              />
            </div>
            <h1 className="text-2xl text-center text-dg"> Quentin Gonzalez</h1>
            <p className="text-base  sm:text-lg">
              My mission is to leverage my passion for problem-solving and my
              strong work ethic to make a meaningful impact in the field of
              software engineering by continuously learning and growing as a
              developer, and using my skills and knowledge to build innovative
              and efficient solutions for real-world problems.
            </p>
          </div>
          <div className="flex justify-center p-5">
            <div
              className="h-9
              px-5 
            grayscale-[65%]
            hover:grayscale-0
            hover:scale-125
            trasition-[300]
            ease-in-out
            relative before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-blue before:px-2 before:py-1.5 before:text-eelg before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-blue after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="Download Resume"
            >
              <a
                href="Quentin_Gonzalez.resume.pdf"
                download="Quentin_Gonzalez.resume.pdf"
              >
                <img src="resume-and-cv.png" className="h-9" />
              </a>
            </div>
            <div
              className="h-9 
            grayscale-[65%]
            hover:grayscale-0
            hover:scale-125
            trasition-[300]
            ease-in-out
            relative before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-blue before:px-2 before:py-1.5 before:text-eelg before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-blue after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="LinkedIn Profile"
            >
              <a
                href="https://www.linkedin.com/in/quentin-gonzalez-/"
                target="_blank"
              >
                <img src="icons8-linkedin-96.svg" className="h-10" />
              </a>
            </div>
            <div
              className="h-9
                          px-5  
            grayscale-[65%]
            hover:grayscale-0
            hover:scale-125
            trasition-[300]
            ease-in-out
            relative before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-blue before:px-2 before:py-1.5 before:text-eelg before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-blue after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
              data-tip="My GitHub"
            >
              <a
                href="https://github.com/QGonz95"
                target="_blank"
              >
                <img src="github-mark.png" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
