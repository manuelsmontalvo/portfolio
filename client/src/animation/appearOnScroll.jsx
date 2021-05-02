import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AppearOnScroll(props) {
  const [shouldActionShow, setShouldActionShow] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos + 5 > lastYPos;

      setShouldActionShow(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      animate={{ opacity: shouldActionShow ? 1 : 0 }}
      initial={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
}
