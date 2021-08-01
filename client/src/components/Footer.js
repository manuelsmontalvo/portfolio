import React from "react";

function Footer() {
  return (
    <footer style={{ style }} className="inset-x-0 bottom-0 p-2 h-16 space-x-3.5 text-indigo-400 flex flex-row justify-center item-center">
      <a href="https://github.com/manuelsmontalvo" target="_blank" rel="noreferrer">
        <i className="fab fa-github-square fa-3x "></i>
      </a>
      <a href="https://www.linkedin.com/in/manuelsmontalvo/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin fa-3x "></i>
      </a>
    </footer>
  );
}

const style = {
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
};

export default Footer;
