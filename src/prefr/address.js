

import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { date } from "yup";
// import  logoLight  from "../images/fi.png";

const Payment = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [comName, setcomName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [resType, setresType] = useState("");
  const [bpown, setBPOwn] = useState("");
//   const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [empType, setEmpType] = useState("");
  const [pan, setPan] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errbirthDate, setErrBirthDate] = useState("");
  const [errGender, setErrGender] = useState("");
  const [errcomName, setErrcomName] = useState("");
  const [errresType, setErrresType] = useState("");
  const [errBPOwn, setErrBPOwn] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errSalary, setErrSalary] = useState("");
  const [errempType, setErrEmpType] = useState("");
  const [errPan, setErrPan] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handlegender = (e) => {
    setGender(e.target.value);
    setErrGender("");
  };
  const handleDate = (e) => {
    setBirthDate(e.target.value);
    setErrBirthDate("");
  };
  const handlecomName = (e) => {
    setcomName(e.target.value);
    setErrcomName("");
  };
  const handleresType = (e) => {
    setresType(e.target.value);
    setErrresType("");
  };
  const handleBPOwn = (e) => {
    setBPOwn(e.target.value);
    setErrBPOwn("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
    setErrSalary("");
  };
  const handleempType = (e) => {
    setEmpType(e.target.value);
    setErrEmpType("");
  };
  const handlePan = (e) => {
    setPan(e.target.value);
    setErrPan("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  
  // ================= Email Validation End here ===============
//   const handleIsAddressSame = (e) => {
//     setIsClientName(e.target.value);
//     setErrClientName("");
//   };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!gender) {
        setErrGender("Select");
      }
      if (!comName) {
        setErrcomName("Enter your compnay name");
      }
      
     
      if (!salary) {
        setErrSalary("Enter monthly in-hand salary");
      }
      if (!empType) {
        setErrEmpType("Enter your Employment Type");
      }
      if (!pan) {
        setErrPan("Enter your Pan number");
      }else {
        if (pan.length != 9) {
          setErrPassword("PAN must be of 10 digits");
        }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } 
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      if (!city) {
        setErrCity("Enter your city name");
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
      }
      if (!zip) {
        setErrZip("Enter the zip code of your area");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        resType&&
        comName&&
        gender&&
    
        salary&&
        empType&&
        pan&&
        // EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        // setSuccessMsg(
        //   `Hello dear ${clientName}, Welcome you to Pulmonix. We received your Product request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        // );
        setClientName("");
        setEmpType("");
        setPan("");
        setGender("");
        setSalary("");
        // setBirthDate("");
        // setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
   
  };

  return (
    <div className="w-full h-screen flex items-center justify-center border ">
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start ">
            <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
              Current Address Check
            </h1>  
            <div className="border p-4">
              {/* client name */}
              <div className="flex flex-col gap-5">
                <p className="font-titleFont text-base font-semibold text-gray-600  float-left">
                  Is your current residential address same as the one mentioned on KYC Proof?
                </p>
                <span  className="h-1 justify-left">
                  <input
                    type="radio"
                    name="isAddressSame"
                    value="Yes"
                    checked={clientName === "Yes"}
                    onChange={handleName}
                    className="h-3  "
                  />
                  <span className="text-black " style={{fontSize:"15px",}}> Yes</span>
                </span>
                <span  className="h-1 justify-left">
                  <input
                    type="radio"
                    name="isAddressSame"
                    value="No"
                    checked={clientName === "No"}
                    onChange={handleName}
                    className="h-3  "
                  />
                  <span className="text-black " style={{fontSize:"15px",}}> No</span>
                </span>
                {errClientName && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              
              <Link to="/RepaymentSetup">
                <button className="w-full text-white text-base font-medium h-10 mt-20 rounded-md bg-black">
                  PROCEED
                </button>
              </Link> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;