import React from "react";
import M2 from "../images/m2.png";
import Typed from "react-typed";
function Home() {
  return (
    <div id="State" className="flex justify-center xs:p-0">
      <div className="flex flex-wrap justify-center p-24">
        <div className=" bg-gradient-to-b drop-shadow-md shadow-blue-gray-100 shadow border rounded-bl-[2rem] rounded-br-[2rem] rounded-t-[12rem]">
          <img className="sm:h-[22rem]" src={M2} alt="me" />
        </div>
        <div>
          <div className="text-center text-dg pt-2">
            <div className="flex justify-center">
              <Typed
                className="text-sm md:text-xl text-light-blue-800 "
                strings={["Hello, World! My name is"]}
                typeSpeed={200}
                backSpeed={100}
                loop
                showCursor={false}
              />
            </div>
            <h1 className="text-xl md:text-2xl text-center text-dg"> Quentin Gonzalez</h1>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-md text-dg">
              From the boxing ring to the tech world, this software engineer's dedication to discipline, hard work, and continuous self-improvement sets him apart as a true hero. Combining his expertise in personal training with his passion for coding, he tirelessly works to empower others to achieve their goals, both physically and digitally.
            </p>
          </div>
          <div className="flex justify-center p-2 md:p-5">
            <div
              className="h-4       
            px-2
            md:h-9
            md:px-5 
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
                <img src="resume-and-cv.png" className="h-7 md:h-9" alt="k" />
              </a>
            </div>
            <div
              className="h-4 
            px-2  
            md:h-9
            md:px-5  
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
                <img src="icons8-linkedin-96.svg" className="h-7 md:h-10" alt="k" />
              </a>
            </div>
            <div
              className="h-4 
              px-2  
              md:h-9
            md:px-5  
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
                <img src="github-mark.png" className="h-7 md:h-10" alt='k' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
