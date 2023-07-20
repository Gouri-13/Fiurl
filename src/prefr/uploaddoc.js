

import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { date } from "yup";
// import  logoLight  from "../images/fi.png";

const Payment = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center border overflow-hidden">
       
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        
          <form className="w-full lgl:w-[500px] h-screen flex pt-10">
            <div className="px-6 w-full flex flex-col justify-start ">
              <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl ">
                Upload documents
              
              </h1>  
              <p className="mb-4">Please upload the better documents</p>
              <div className="flex flex-col gap-3 border p-4">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600  float-left">
                   SELFIE
                  </p>
                </div>
                {/* Current Residence type */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                  PAN CARD
                  </p>
                </div>
                 {/* Current Address */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                  KYC PROOF
                  </p>
                  <p>For successfull KYC, your Aadhaar has to be linked with mobile number. You will receive Aadhaar OTP on your mobile number that has been linked</p>
                </div>
                 
                 
               <Link to="/documents"><button
                 
                  className="w-full text-white text-base font-medium h-10 rounded-md bg-black" >
                 PROCEED
                </button></Link> 
              </div>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default Payment;



