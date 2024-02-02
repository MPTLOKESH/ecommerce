import React from "react";

import Model from "../../models/welcome-model.png";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="min-h-screen w-screen bg-[#D50D3E] relative">
        <h1 className="absolute text-[40px] font-black text-white w-[206px] left-[30px] top-1 xl:w-[314px] xl:left-[100px] xl:top-[100px] ">
          Start Your
          <span className="text-black"> Glow</span>
        </h1>
        <h1 className="absolute hidden font-light xl:block xl:text-[30px] xl:w-[640px] xl:left-[100px] lg:top-[338px] leading-[150%]">
          Discover a world of beauty with our exclusive cosmetics collection.
          Unleash your inner glow and explore the artistry of makeup with
          SKIN-SCIENCE.
        </h1>
        <img
          src={Model}
          alt="model"
          className="h-[480px] w-[320px] absolute bottom-0 right-0 xl:h-[832px] xl:w-[555px]"
        />
        <Link to="/SignIn">
          <button className="absolute left-[215px] xl:left-[665px] top-[475px] xl:top-[551px] bg-white w-[75px] h-[30px] text-[10px] font-bold rounded-[15px] lg:left-[60%]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
