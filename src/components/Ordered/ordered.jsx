import React from "react";
import Truck from "../../models/truck.gif";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ordered = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-[#D50D3E] flex justify-center items-center p-8">
        <div className="bg-white w-full h-[25rem] rounded-lg relative lg:w-[30rem]">
          <div className="flex flex-col items-center absolute w-full mx-auto top-[4rem] lg:">
            <img src={Truck} alt="truck.gif" className="w-[150px] h-auto" />
            <p className="text-[14px] text-center w-[12rem] font-bold lg:text-[18px] lg:w-[15rem]">
              Order successful! Thank you for choosing our services
            </p>
          </div>
          <Link to="/home">
            <div className="absolute left-5 top-5">
              <IoArrowBackOutline className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ordered;
