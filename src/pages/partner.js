import React from "react";
import "./style.css";
import fi from "../images/fi.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  username: Yup.string().required(),
  phoneNumber: Yup.number().required(),
  email: Yup.string().email().required(),
  // otp: Yup.string().required("OTP is required"),
  panCardNo: Yup.string().required(),
  pincode: Yup.string().required(),
  city: Yup.string().required(),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function LoginPage() {
  const handleSignupSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("first");
    console.log(values);
    try {
      axios.post(
        "http://localhost:3008/api/v1/auth/signup",
        {
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber,
          name: values.name,
          city: values.city,
          pincode: values.pincode,
          panNumber: values.panCardNo,
        }
      ).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
      resetForm();
    } catch (error) {
      console.error("Registration error:", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3008/api/v1/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      console.log(response.data); // Success message or token from the backend
      localStorage.setItem("token", response.data.token); // Store the token in localStorage
    } catch (error) {
      console.error("Login error:", error.response.data);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <Formik
            initialValues={{
              name: "",
              username: "",
              phoneNumber: "",
              email: "",
              otp: "",
              panCardNo: "",
              pincode: "",
              city: "",
            }}
            // validationSchema={SignupSchema}
            onSubmit={handleSignupSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <label htmlFor="chk" aria-hidden="true">
                  <img
                    src={fi}
                    alt="FinURL"
                    style={{
                      width: "50%",
                      height: "40%",
                      margintop: "3%",
                      paddingTop: "2%",
                    }}
                  />
                </label>
                <Field
                  className="place"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <ErrorMessage
                  className="form-error"
                  name="name"
                  component="p"
                />
                <Field
                  className="place"
                  type="text"
                  name="username"
                  placeholder="User Name"
                  required
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="form-error"
                />
                <Field
                  className="place"
                  type="phonenumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="form-error"
                />
                <Field
                  className="place"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="form-error"
                />
                {/* <Field className="place" type="text" name="otp" placeholder="OTP (sent on your above email)" required />
                <ErrorMessage name="otp" component="p" className="form-error" /> */}
                <Field
                  className="place"
                  type="text"
                  name="panCardNo"
                  placeholder="Pan Card No."
                  required
                />
                <ErrorMessage
                  name="panCardNo"
                  component="p"
                  className="form-error"
                />
                <Field
                  className="place"
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  required
                />
                <ErrorMessage
                  name="pincode"
                  component="p"
                  className="form-error"
                />
                <Field
                  className="place"
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                />
                <ErrorMessage
                  name="city"
                  component="p"
                  className="form-error"
                />
                <div className="abc">
                  {" "}
                  <button className="abc" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing Up..." : "Sign Up As Partner"}
                  </button>
                </div>
              </Form>
              
            )}
          </Formik>
          
        </div>
        <div className="login">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            // validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <label htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <Field
                  className="place"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="form-error"
                />
                <Field
                  className="place"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="form-error"
                />
                <div className="abc">
                <Link to="/">      <button className="abc" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging In..." : "Login As Partner"}
                  </button> </Link>
                </div>
              </Form>
            )}
          </Formik>
         
        </div>
      </div>
    </div>
  );
}

export default LoginPage;