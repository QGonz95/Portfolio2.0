import React from "react";
import Typed from "react-typed";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Skills() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
      <div id="Skills" className="p-4 pb-20">
                  <div className="pt-16 text-2xl font-bold text-center">
     Transferable Skills
          <div>
      <div className="">
            <Fragment>
              <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Communication
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Time Management
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Attention to Detail
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  Adaptability
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
      <div className="text-alb text-2xl font-bold flex justify-center pt-10">
        <p>A</p>
        <Typed
          strings={["...", "cquired Skills"]}
          typeSpeed={300}
          backDelay={200}
          backSpeed={80}
          smartBackspace={true}
          loop
          showCursor={true}
        />
      </div>
      <div className="flex flex-wrap justify-evenly p-3">
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/HTML-5-logo-vector-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/CSS-3-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/JavaScript-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/JQuery-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/MongoDB-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/Heroku-logo-vector-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/Node-JS-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/tailwind-css-seeklogo.com.svg"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/Python-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/angular-seeklogo.com.svg"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/React-01.png"
          alt="logo"
        />
        <img
          className="grayscale-[85%] hover:grayscale-0 hover:scale-125 transition duration-300 ease-in-out w-20 h-20 mt-7 m-2"
          src="images/Django-02.png"
          alt="logo"
        />
        {/* <img className="grayscale-[75%] hover:grayscale-0 w-20 h-20 mt-7 m-2" src='images/Java-01.png' alt='logo'/> */}
      </div>
    </div>
  );
}

export default Skills;
