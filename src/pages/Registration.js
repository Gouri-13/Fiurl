

import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import  logoLight  from "../images/fi.png";

const Payment = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
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
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
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
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
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
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to Pulmonix. We received your Product request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
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
    <div className="w-[50%] h-screen flex items-center justify-center">
       
      {/* <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center"> */}
         {/* <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link> */}
          {/* <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div> */}
          {/* <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with Pulmonix
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div> */}
          {/* <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all Pulmonix services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div> */}
          {/* <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div> */}
          {/* <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © Pulmonix
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div> */}
        {/* </div>
      </div> */}
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
               Okay
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Checkout
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Full Name
                  </p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="eg. John Doe"
                  />
                  {errClientName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone Number
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="008801234567891"
                  />
                  {errPhone && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                {/* Address */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Address
                  </p>
                  <input
                    onChange={handleAddress}
                    value={address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="road-001, house-115, example area"
                  />
                  {errAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errAddress}
                    </p>
                  )}
                </div>
                {/* City */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    City
                  </p>
                  <input
                    onChange={handleCity}
                    value={city}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your city"
                  />
                  {errCity && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCity}
                    </p>
                  )}
                </div>
                {/* Country */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Country
                  </p>
                  <input
                    onChange={handleCountry}
                    value={country}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your country"
                  />
                  {errCountry && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCountry}
                    </p>
                  )}
                </div>
                {/* Zip code */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Zip/Postal code
                  </p>
                  <input
                    onChange={handleZip}
                    value={zip}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your country"
                  />
                  {errZip && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errZip}
                    </p>
                  )}
                </div>
                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the Pulmonix{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Submit
                </button>
                {/* <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p> */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;





// import React from "react";
// import styled from "styled-components";
// import { GlobalStyle } from "../styles/globalStyles";
// import { useFormik } from "formik";
// import { signUpSchema } from "../schemas";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// const Registration = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//           values
//         );
//         action.resetForm();
//       },
//     });
//   console.log(
//     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//     errors
//   );

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
//                 <p className="modal-desc">
//                  Apply for personal loan
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Name
//                     </label>
//                     <input
//                       type="name"
//                       autoComplete="off"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="DOB" className="input-label">
//                       DOB
//                     </label>
//                     <input
//                       type="DOB"
//                       autoComplete="off"
//                       name="DOB"
//                       id="DOB"
//                       placeholder="DOB"
//                       value={values.DOB}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="confirm_password" className="input-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="confirm_password"
//                       id="confirm_password"
//                       placeholder="Confirm Password"
//                       value={values.confirm_password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.confirm_password && touched.confirm_password ? (
//                       <p className="form-error">{errors.confirm_password}</p>
//                     ) : null}
//                   </div>
//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       Want to register using Gmail?
//                     </a>
//                     <button className="input-button" type="submit">
//                       Apply Now
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
//               <div className="modal-right">
//                 <img
//                   src="https://unsplash.com/photos/uC21aXJ7yQs"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </>
//   );
// };
// // export default Registration;

// const Wrapper = styled.section`
//   .container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .modal {
//     width: 100%;
//     /* height: 60px; */
//     background: rgba(51, 51, 51, 0.5);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: 0.4s;
//   }
//   .modal-container {
//     display: flex;
//     max-width: 60vw;
//     width: 100%;
//     border-radius: 10px;
//     overflow: hidden;
//     position: absolute;
    
//     transition-duration: 0.3s;
//     background: #fff;
//   }
//   .modal-title {
//     margin: 0;
//     font-weight: 400;
//     color: #55311c;
//   }
//   .form-error {
//     font-size: 1.4rem;
//     color: #b22b27;
//   }
//   .modal-desc {
//     margin: 6px 0 30px 0;
//   }
//   .modal-left {
//     padding: 60px 30px 20px;
//     background: #fff;
//     flex: 1.5;
//     transition-duration: 0.5s;
//     opacity: 1;
//   }

//   .modal-right {
//     flex: 2;
//     font-size: 0;
//     transition: 0.3s;
//     overflow: hidden;
//   }
//   .modal-right img {
//     width: 100%;
//     height: 100%;
//     transform: scale(1);
//     -o-object-fit: cover;
//     object-fit: cover;
//     transition-duration: 1.2s;
//   }

//   .modal.is-open .modal-left {
//     transform: translateY(0);
//     opacity: 1;
//     transition-delay: 0.1s;
//   }
//   .modal-buttons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .modal-buttons a {
//     color: rgba(51, 51, 51, 0.6);
//     font-size: 14px;
//   }

//   .sign-up {
//     margin: 60px 0 0;
//     font-size: 14px;
//     text-align: center;
//   }
//   .sign-up a {
//     color: #8c7569;
//   }

//   .input-button {
//     padding: 1.2rem 3.2rem;
//     outline: none;
//     text-transform: uppercase;
//     border: 0;
//     color: #fff;
//     border-radius: 4px;
//     background: #8c7569;
//     transition: 0.3s;
//     cursor: pointer;
//     font-family: "Nunito", sans-serif;
//   }
//   .input-button:hover {
//     background: #55311c;
//   }

//   .input-label {
//     font-size: 11px;
//     text-transform: uppercase;
//     font-weight: 600;
//     letter-spacing: 0.7px;
//     color: #8c7569;
//     transition: 0.3s;
//   }

//   .input-block {
//     display: flex;
//     flex-direction: column;
//     padding: 10px 10px 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     transition: 0.3s;
//   }
//   .input-block input {
//     outline: 0;
//     border: 0;
//     padding: 4px 0 0;
//     font-size: 14px;
//   }

//   .input-block input::-moz-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input:-ms-input-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input::placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block:focus-within {
//     border-color: #8c7569;
//   }
//   .input-block:focus-within .input-label {
//     color: rgba(140, 117, 105, 0.8);
//   }

//   @media (max-width: 750px) {
//     .modal-container {
//       max-width: 90vw;
//     }

//     .modal-right {
//       display: none;
//     }
//   }
// `;

// export default Registration;

// import React from 'react';
// import './style.css';
// import fi from "../images/fi.png";

// function Registration() {
//   return (
//     <div className="body">
//     <div className="main">
//       <input type="checkbox" id="chk" aria-hidden="true" />
//       <div className="signup">
//         <form>
//           <label htmlFor="chk" aria-hidden="true"><img
//           src={fi}
//           alt="FinURL"
//           style={{ width: "30%", height: "20%", margintop: "3%", paddingTop: "2%"}}
//         /></label>
//           <input className='place' type="text" name="txt" placeholder="Name" required />
//           <input className='place' type="text" name="txt" placeholder="User Name" required />
//           <input className='place' type="phonenumber" name="num" placeholder="Phone Number" required />
//           <input className='place' type="email" name="email" placeholder="Email" required />
//           <input className='place' type=" OTP(sent on your above email)" name="otp" placeholder=" OTP(sent on your above email)" required />
//           <input className='place' type="pancard" name="no" placeholder="Pan Card No." required />
//           <input className='place' type="Pincode" name="pswd" placeholder="Pincode" required />
//           <input className='place' type="City" name="city" placeholder="City" required />
//           <button className='abc'>Register</button>
//         </form>
//       </div>
     
//     </div></div>
//   );
// }

// export default Registration;