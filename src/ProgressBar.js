import React from "react";
import "./ProgressBar.css";
import { useState, useEffect } from "react";
//import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProgressBar({ done }) {
  const { ref, inView } = useInView();
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${done}%`,
        };

        setStyle(newStyle);
      }, 100);
    }
    if (!inView) {
      setStyle({});
    }
  }, [inView, done]);

  return (
    <>
      <div ref={ref} className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
