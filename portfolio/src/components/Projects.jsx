import React from "react";
import Typed from "react-typed";

const Projects = () => {
  const projects = [
    {
      title: 'Start of my Software Engineering Career Oct 17th, 2022',
      say: 'My very first app',
      url: 'https://qgonz.netlify.app/',
      image: "images/first_portfolio.jpeg",
      date: 'Due on November 7th, 2022',
      // languages: 'html, css, javaScript, jquery',
      num: ' #1'
    },
    {
      title: 'Things were getting tough',
      say: 'First Full Stack App. . . I Failed a lot, and I Learned a lot too.',
      url: 'https://agile-springs-30393.herokuapp.com/',
      image: "images/first_fullstack.jpeg",
      date: 'Due on November 30th, 2022',
      // languages: 'html, css, javaScript, jquery',
      num: ' #2'

    },
    {
      title: 'First Group Project - MERN Stack App',
      say: 'Working with others successfully. Learned a lot with my partner, both agreed to work on our communication with others goign forward. ',
      url: 'https://games2play.netlify.app/games',
      image: "images/games2play.jpeg",
      date: 'Due on December 16th, 2022',
      // languages: 'html, css, javaScript, jquery',
      num: ' #3'

    },
    {
      title: 'Django and React App - Group Project',
      say: 'Working with a team ran smoother than I initailly thought it would. Communication was better than before, and when there were errors, we put our pride aside and all tried to fix the bugs.',
      url: 'https://forgeddit.netlify.app/',
      image: "images/forgeddit.jpeg",
      date: 'Due on January 9th, 2023',
      // languages: 'html, css, javaScript, jquery',
      num: ' #4'
    },
    {
      title: 'My ongoing Final Project, Jan 2023',
      say: 'I can not believe how fast it went by. Just Three Months ago I had ZERO experience, and I am very proud of how much i retained.',
      url: 'https://warheart-training.netlify.app/',
      image: "images/final_project.jpeg",
      date: 'Due on January 23rd, 2023',
      // languages: 'html, css, javaScript, jquery',
      num: ' #4'
    },
  ]
  return (
    <section id="Projects" className="text-gray-800 pt-10">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue">
              <h3 className="text-3xl font-semibold">My Journey</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                in essence <Typed strings={[". . ."]} typeSpeed={300} loop />
              </span>
            </div>
          </div>
          {
            projects.map((project) => {
              return (
                <div className="relative col-span-12 px-4 sm:col-span-10">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue">
                      <h3 className="text-xl font-semibold tracking-wide">
                        {project.title}
                      </h3>
                      <h5 className="text-md font-semibold tracking-wide"> {project.date}</h5>
                      <time className="text-xs tracking-wide uppercase text-gray-700">
                        Project <Typed strings={[`${project.num}`]} typeSpeed={500} showCursor={false} loop backSpeed={600} />
                      </time><br />
                      <p>{project.say}</p>
                      <img className="h-[20rem] w-[32rem]" src={project.image} alt={project.num} />
                      <a href={project.url} target='_blank'>{project.url}</a>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>
      </div>
    </section>
  )
}

export default Projects