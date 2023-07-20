

import React, { useState } from "react";
import { Link } from "react-router-dom";

function bureauconsentscreen(){
  return (
    <div className="w-full h-screen flex items-center justify-center border ">
       
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 ">
                Consent for Bureau Report
              
              </h1>  <p className="">Consent for Bureau Report

I hereby appoint Prefr as the authorised representative to recieve my credit
information from CIBIL/CRIF Highmark (bureau). I hereby unconditionally consent
to and instruct bureau to provide my credit information to me & Prefr.

By submitting this form, I hereby autorize Prefr to do all of the following for
providing me with their services.
<br/><br/>
1. Retain a copy of my credit infromation, along with other information I have given
them acess to under this authorization, in accordance with Prefr. Terms and 
Conditions and privacy policy.
<br/>
2. Verify my identity and share personally identifiable information about me with the
credit bureau as required. </p><br/>
              <div className="flex flex-col gap-3">
               
            <Link to="/Additional_Details">   <button
                  
                  className="w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300 bg-black mt-4">
                 I AGREE
                </button></Link> 
              
              </div>
            </div>
          </form>
      
      </div>
    </div>
  
);
  };
export default bureauconsentscreen;



