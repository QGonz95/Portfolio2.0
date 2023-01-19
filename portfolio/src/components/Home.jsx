import React from "react";
import M2 from "../images/m2.png";

function Home() {
  return (
    <div id="State" className="m-1 flex justify-center ">
      <div className="p-24">
        <h1 className="text-3xl text-center text-dg">Quentin Gonzalez</h1>
        <div className="bg-gradient-to-b drop-shadow-md shadow-blue-gray-100 shadow border rounded-bl-[2rem] rounded-br-[2rem] rounded-t-[12rem]">
          <img className="h-[22rem]" src={M2} alt="me" />
        </div>
        <div className="flex justify-evenly p-3">
          <div
            className="h-9 
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
            data-tip="Download Resume"
          >
            <a
              href="https://www.linkedin.com/in/quentin-gonzalez-/"
              target="_blank"
            >
              <img
                src="icons8-linkedin-96.svg"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
