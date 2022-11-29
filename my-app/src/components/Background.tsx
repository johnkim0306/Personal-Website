import React from "react";
import { useEffect, useState } from "react";
import './stars.scss'

const Background = () => {

    /*
  const [bgColor, setBgColor] = useState<string>(theme.color.black);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight * 2.5 < window.pageYOffset) setBgColor(theme.color.white);
      else setBgColor(theme.color.black);
    });
  }, []);
*/
  return (
        <>
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
        </>
      )}

export default Background;