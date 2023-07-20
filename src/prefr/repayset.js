

import React, { useState } from "react";
import { Link } from "react-router-dom";

function bureauconsentscreen(){
  return (
    <div className="w-full h-screen flex items-center justify-center border ">
       
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4 ">
                Setup auto repayment
              </h1> 
              <div className="flex flex-col gap-3 border p-4">
              {/* client name */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600  float-left">
                 With auto repayment facility, your EMI payments will be taken care of autonatically when you do a transaction.
                
                </p>
                <ul style={{listStyle:"outside", paddingLeft:"10px", paddingTop:"10px", paddingBottom:"10px"}}>
                    <li>Forget about EMI duse dates</li>
                    <li>Never pay late fee on your EMIs</li>
                    <li>Receive alerts regarding EMI payment on ypour registered mobile number</li>
                 </ul>
                <p><b>NOTE:</b>In this step you are only setting up an auto-debit facility. You pay EMIs only when you get a loan disbursal.</p>
                </div>
              
               
          <Link to="/BankDetails" >    <button
                  
                  className="w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300 bg-black">
                 PROCEED
                </button></Link> 
              
              </div>
            </div>
          </form>
      
      </div>
    </div>
  
);
  };
export default bureauconsentscreen;



