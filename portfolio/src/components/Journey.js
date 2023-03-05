import React from "react";
import Typed from "react-typed";

function Journey() {
  return (
    <section id="About" className="text-gray-800 pt-10">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue">
              <h3 className="text-3xl font-semibold">My Journey</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                              in essence <Typed strings={[". . ."]} typeSpeed={300} loop  />
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue">
                <h3 className="text-xl font-semibold tracking-wide">
                  The start of my Amateur Boxing journey
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-700">
                  2015 - 2018 <Typed strings={["-->"]} typeSpeed={500} showCursor={false} loop />
                </time>
                <p className="mt-3">
                  Signing up for my first tournament was thrilling. Training and
                  fighting are different experiences. As a "late starter", I
                  learned that effort is more important than talent. A torn
                  ligament in my wrist in October 2018 pushed me into the next
                  chapter of my life.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue ">
                <h3 className="text-xl font-semibold tracking-wide">
                  Coaching others . . .
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-700">
                  2019 - 2022
                </time>
                <p className="mt-3">
                  At the start of my strength training, I had poor form and was
                  not satisfied with my progress, so I decided to learn the
                  correct way. I got certified and applied the knowledge I
                  gained on myself. I began training clients at Blink Fitness in
                  Fall of 2019 and was successful. When my clients wanted to
                  continue training during Covid 2020, I realized I had a talent
                  for it. In 2021, I moved to Equinox Hudson Yards where I was
                  surrounded by other successful coaches and competitors which
                  reignited my passion for boxing. However, after sustaining
                  injuries during my last matches in Spring of 2022, I began to
                  question the stability of a career in both boxing and personal
                  training.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue">
                <h3 className="text-xl font-semibold tracking-wide">
                  Making the career switch
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-700">
                  8/2022 <Typed strings={["-->"]} typeSpeed={500} showCursor={false} loop />
                </time>
                <p className="mt-3">
                  As a personal trainer who switched careers to software
                  engineering, I found the three month immersive course at
                  General Assembly challenging but rewarding. The curriculum
                  covered a wide range of topics and required a significant time
                  commitment but the instructors were knowledgeable and
                  supportive. I felt well-prepared for the coursework.
                  Throughout the course, I found myself constantly learning new
                  things and pushing my abilities to their limits. The
                  curriculum was intense but also rewarding. I enjoyed learning
                  new technologies and techniques and felt a sense of
                  accomplishment as I progressed through the course. Overall, I
                  am excited about the prospect of working as a software
                  engineer. My background in personal training, amateur boxing and passion for
                  technology will serve me well in this field. I look forward to
                  applying the skills and knowledge I've gained through the
                  course to real-world projects and continue learning and
                  growing as a software engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
