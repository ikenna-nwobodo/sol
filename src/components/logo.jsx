import { useEffect, useState } from "react";
import src from "../images/R3_Logo_Dark.png";
import srct from "../images/R3_Logo.png";

const Logo = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });
  
  return (
    <div className="logo">
      <img src={width < breakpoint ? srct : src} alt="logo" height={50} />
      {/* <h1>Solution Portal</h1> */}
    </div>
  );
};

export default Logo;
