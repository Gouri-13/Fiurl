

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
    <div className="w-full h-screen flex items-center justify-center border py-4">
       
      <div className="w-full md:w-[50%] lgl:w-[500px] h-full flex flex-col ">
        
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center  rounded-lg border py-4 ">
       
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-start ">
              <h1 className="font-titleFont  decoration-[1px] font-semibold text-2xl mdl:text-3xl ">
              KYC Proof
              
              </h1>    <p className="mb-4">Select any of the options below</p>
              <div className="flex flex-col gap-3 border p-4 rounded-lg mb-4 ">
                {/* client name */}
              
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600 m float-left">
                   Digilocker
                  </p>
            <p>Takes only 2 mins, no registartion required</p>
                  
                </div></div>
              {/* Birthdate */}
              <div className="flex flex-col gap-3 border p-4 rounded-lg mb-4 ">
                {/* client name */}
              
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600  float-left">
                   OKYC
                  </p>
            <p>Takes 2-4 hours</p>
                  
                </div></div>

                <Link to="/Driving_License">     <div className="flex flex-col gap-3 border p-4 rounded-lg mb-4 ">
                {/* client name */}
              
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600  float-left">
                   Driving License
                  </p>
            <p>Takes 1-2 days for approval. Keep your driving license photo ready.</p>
                  
                </div></div></Link> 
              
              </div>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default Payment;



