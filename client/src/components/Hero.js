import React from "react";
import Logo from "../assets/logo.png";
import Me from "../assets/me.JPG";

function Hero() {
  return (
    <div className="relative  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative  z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-indigo-400 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10  lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only ">Manuel Montalvo</span>
                      <img className="h-28 w-auto sm:h-s8" src={Logo} alt="Manuel Montalvo's logo" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a style={{ style }} href="#projects" className="font-medium text-gray-700 hover:text-gray-900">
                    Projects
                  </a>

                  <a style={{ style }} href="#contact-me" className="font-medium text-gray-700 hover:text-gray-900">
                    Contact Me
                  </a>

                  <a
                    style={{ style }}
                    href="https://docs.google.com/document/d/1-VeBAFBj2W-G0Yzb94IWq2o9lFx_h35IJHeKzUYjlBk/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-700 hover:text-gray-900"
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <main className="mt-10  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 style={{ style }} className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-gray-700 xl:inline">Manuel Montalvo</span>
                <br />
                <span className="block text-indigo-400 xl:inline">Software Engineer</span>
              </h1>
              <p style={{ style }} className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm an enthusiastic and determined problem solver who strives to put nothing but my best into every endeavor I'm involved in. I desire to develop unique solutions based on strategic
                planning and my proven ingenuity.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:-inset-y-0 lg:-right-5 ">
        <img className="h-full w-auto object-cover " src={Me} alt="" />
      </div>
    </div>
  );
}

const style = {
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
  "background-color": "#f9f9f9",
};

export default Hero;
