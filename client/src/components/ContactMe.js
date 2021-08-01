import React from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_q0rnvcn", "template_9t3tmjr", e.target, "user_b2EY1jTpwUaSqvHyNF3Jl").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div className="">
    <h1 style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }} className="pt-52 ml-28 mb-16 py-10 justify-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span id="projects" className="block text-indigo-400 xl:inline">
        Contact Me
      </span>
    </h1>
    <form className="contact-form w-full flex flex-col item-center  px-56 pb-40 justify-center  " id="contact-form" onSubmit={sendEmail}>
        <div className="flex fle-row">
          <div className="flex flex-wrap item-center justify-center">
            <div className="w-full  px-3">
              <label name="contact_number" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user_name"
                id="grid-last-name"
                type="text"
              />
            </div>
          </div>
          <div className="item-center justify-center flex flex-wrap ">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                E-mail
              </label>
              <input
              name="user_email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className=" item-center justify-center flex flex-wrap ">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Message
            </label>
            <textarea
              type="email"
              name="message"
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="item-center justify-center mt-4 flex w-full">
          <div className="item-center justify-center  flex w-full md:w-1/3">
            <button type="submit" value="Send" className="shadow bg-indigo-400 mb-16 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
