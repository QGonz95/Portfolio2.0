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
      <div className="pt-16 text-2xl font-bold text-center text-gray-700">
        Transferable Skills
        <div>
          <div>
            <Fragment className="border-none">
              <Accordion open={open === 1} animate={customAnimation} className="border-b border-blue-gray-100 py-2">
                <AccordionHeader onClick={() => handleOpen(1)} className="text-2xl text-blue border-none">
                  Communication
                </AccordionHeader>
                <AccordionBody className="text-lg px-9">
                  As a Personal Trainer, I learned to effectively communicate
                  with clients to understand their goals, assess their fitness
                  level and create personalized exercise plans. This requires
                  strong listening skills, the ability to explain complex
                  information in a simple and easy-to-understand manner, and the
                  ability to provide clear and concise feedback.
                  <br />
                  <br />
                  As an Amateur Boxer, I have to constantly communicate with my
                  Coach in order to improve techniques and strategies. This
                  includes discussing my strengths and weaknesses, as well as
                  developing a fight plan for upcoming matches.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={customAnimation} className="border-b border-blue-gray-100">
                <AccordionHeader onClick={() => handleOpen(2)} className="text-2xl text-blue border-none">
                  Time Management
                </AccordionHeader>
                <AccordionBody className="text-lg px-9">
                  A crucial ability that can be applied from Personal Training
                  to software engineering is time management. Both software
                  developers and personal trainers need to be able to organize
                  their time effectively, set priorities, and meet deadlines.
                  This can entail making workout schedules and plans for
                  customers in personal training. personal trainers must have
                  the flexibility to adjust to schedule changes and the
                  multitasking skills to manage several projects at once.
                  <br />
                  <br />
                  Boxers are known for their ability to manage their time
                  effectively in order to prepare for their fights. I have to
                  balance training, recovery, and other responsibilities, while
                  also staying focused on my goals. This discipline and focus
                  can be transferred over to the field of software engineering,
                  where time management is critical for meeting deadlines and
                  staying on track with projects. Engineers must also balance
                  multiple tasks and responsibilities, and like boxers, they
                  must stay focused on their goals in order to be successful.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} animate={customAnimation} className="border-b border-blue-gray-100">
                <AccordionHeader onClick={() => handleOpen(3)} className="text-2xl text-blue border-none">
                  Attention to Detail
                </AccordionHeader>
                <AccordionBody className="text-lg px-9">
                  Personal training involves working closely with clients to
                  assess their fitness goals, design personalized exercise
                  plans, and monitor progress. This process requires paying
                  close attention to the client's needs and making adjustments
                  as necessary. This attention to detail can be transferred over
                  to software engineering by applying the same level of focus
                  and precision to the development process, including paying
                  close attention to requirements, testing and debugging.
                  <br />
                  <br />
                  Due to rigorous training regimens and emphasis on technique,
                  as a boxer I became an excellent detail-oriented person. In
                  order to defend and react effectively, boxers must closely
                  observe the movements of their opponents and predict their
                  upcoming actions. Similar to how software developers must
                  carefully read code and foresee potential defects or errors,
                  they must do so in order to create programs that are both
                  efficient and effective. Both boxers and software engineers
                  must continually work to get better and adjust to new
                  obstacles, which can further build their attention to detail
                  skills.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} animate={customAnimation} className="border-b border-blue-gray-100">
                <AccordionHeader onClick={() => handleOpen(4)} className="text-2xl text-blue border-none">
                  Adaptability
                </AccordionHeader>
                <AccordionBody className="text-lg px-9">
                  As a Personal Trainer I had to adapt to multiple clients that
                  had similar goals but had different abilities. In modifying
                  training schedules, and exercise selections to ensure that the
                  clients would be successful in reaching their goals, I learned
                  to adapt on a project to project basis.
                  <br />
                  <br />
                  As an Amatuer Boxer I learned how to react quickly and
                  effectively to unexpected situations. This calls for fast
                  thinking, problem-solving skills, and the capacity to adjust
                  to shifting conditions. These abilities can be applied to the
                  field of software engineering, where a developer may be
                  required to debug and fix unforeseen errors or modify a
                  project in response to shifting requirements.
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-2xl font-bold flex justify-center pt-10">
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
