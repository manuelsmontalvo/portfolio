import React from "react";

function Card({ img, projectName, projectDescription, liveSite, github }) {
  return (
    <div style={{style}} className="inline-block  flex flex-col w-min h-90 space-x-2 after:inline-block after:pseudo-content-comma after:shadow-2xl rounded-t-lg overflow-hidden mx-auto">
      <div className="card rounded-2xl p-6 flex flex-col min-w-sm border border-gray-700 bg-gray-600 text-gray-50 justify-center items-center  transition-shadow shadow-xl hover:shadow-xl min-w-max">
        <div className="card__media">
          <img src={img} className="rounded-2xl mb-2 h-48 w-96" alt="project" />
        </div>

        <div className="flex items-center p-0 max-w-sm min-h-25">
          <div className="relative flex flex-col items-center w-full justify-center  items-center">
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-md whitespace-nowrap  text-indigo-300 font-semibold">{projectName}</span>
              <p className="text-sm text-gray-200 max-h-full text-left md:break-words">{projectDescription}</p>
              <div className="inset-x-0 bottom-0 py-2 flex space-x-4 my-6">
                <a href={liveSite} target="_blank" rel="noreferrer">
                  <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-indigo-300 rounded max-w-max border bg-transparent border-indigo-400 text-indigo-400 hover:border-indigo-800 hover:border-indigo-500 px-4 py-1 flex items-center hover:shadow-lg">
                    <span className="mr-2"></span>Live Site
                    <span className="ml-2"></span>
                  </button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-indigo-300 rounded max-w-max border bg-transparent border-indigo-400 text-indigo-400 hover:border-indigo-800 hover:border-indigo-500 px-4 py-1 flex items-center hover:shadow-lg">
                    <span className="mr-2"></span>
                    Github <span className="ml-2"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  "box-shadow": "rgb(40, 57, 77) 0px 20px 30px -10px"
}

export default Card;
