import { useState } from "react";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed w-full z-50 ">
      <div className="justify-between px-4 mx-auto w-full md:items-center md:flex md:px-12 bg-gradient-to-b from-white to-light-blue-50 shadow-md shadow-light-blue-50    ">
        <div>
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <a className="text-2xl text-blue-gray-700" href="#State">
              Software Engineer
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0 text-alb">
              {/* <li className="text-xl text-blue hover:text-white">
                                <a href="#State">Quentin J.</a>
                            </li> */}
              <li className="text-blue-gray-900 text-lg hover:text-blue">
                <a href="#Projects">Journey</a>
              </li>
              <li className="text-blue-gray-900 text-lg hover:text-blue">
                <a href="#Skills">Skills</a>
              </li>
              <li className="text-blue-gray-900 text-lg hover:text-blue">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
