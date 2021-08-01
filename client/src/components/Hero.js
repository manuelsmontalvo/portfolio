import React from "react";
import Logo from "../assets/logo.png";
import Me from "../assets/me.JPG";

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Manuel Montalvo</span>
                      <img className="h-8 w-auto sm:h-10" src={Logo} alt="Manuel Montalvo's logo" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#projects" className="font-medium text-gray-500 hover:text-gray-900">
                    Projects
                  </a>

                  <a href="#contact-me" className="font-medium text-gray-500 hover:text-gray-900">
                    Contact Me
                  </a>

                  <a
                    href="https://docs.google.com/document/d/1-VeBAFBj2W-G0Yzb94IWq2o9lFx_h35IJHeKzUYjlBk/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Manuel Montalvo</span>
                <br />
                <span className="block text-indigo-600 xl:inline">Software Engineer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm an enthusiastic and determined problem solver who strives to put nothing but my best into every endeavor I'm involved in. I desire to develop unique solutions based on strategic
                planning and my proven ingenuity.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={Me} alt="" />
      </div>
    </div>
  );
}

export default Hero;
