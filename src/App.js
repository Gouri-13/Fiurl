import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Resources from "./pages/Resources";
import Finance from "./pages/finance";
import Credit from "./pages/credit";
import Credit1 from "./pages/credit1";
import Credit2 from "./pages/credit2";
import Psloans from "./products/Psloans";
import Bsloans from "./products/Bsloans";
import Hmloans from "./products/Hmloans";
import Profloans from "./products/Profloans";
import Soon from "./products/Soon";
import Registration from "./prefr/Registration";
import Cred from "./pages/cred";
import CreditScore from './pages/CreditScore';
// import Login from './pages/login';
import Butlog from './pages/Butlog';
import Calculator from './Calculator';
import Sliderrr from './pages/sliderrr';
import Partner from './pages/partner';
import LoginPage from './pages/LoginPage';
import Instloans from "./products/instloans";
import Documents from "./prefr/documents";
import Bureauconsentscreen from "./prefr/bureauconsentscreen";
import AddDetail from "./prefr/addDetail";
import Otp from "./prefr/otp";
import Upload from "./prefr/uploaddoc";
import License from "./prefr/license";
import Address from "./prefr/address";
import Setup from "./prefr/repayset";
import BankDetails from "./prefr/bankdetails";
import SearchIfsc from "./prefr/searchIfsc";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/SignUp" element={<Butlog />} />
          <Route path="/" element={<Home />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/About" element={<About1 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FinancialLiteracy" element={<Finance />} />
          <Route path="/CreditManagement" element={<Credit />} />
          <Route path="/Credit1" element={<Credit1 />} />
          <Route path="/Credit2" element={<Credit2 />} />
          <Route path="/personalloans" element={<Psloans />} />
          <Route path="/businessloans" element={<Bsloans />} />
          <Route path="/homeloans" element={<Hmloans />} />
          <Route path="/professionalloans" element={<Profloans />} />
          <Route path="/instantloans" element={<Instloans />} />
          <Route path="/Soon" element={<Soon />} />
          
          <Route path="Cred" element={<Cred />} />
          <Route path="CreditScore" element={<CreditScore />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="/Calculator" element={<Calculator/>} />
          <Route path="/sliderrr" element={<Sliderrr/>} />
          <Route path="/partner" element={<Partner/>} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/bureauconsentscreen" element={<Bureauconsentscreen />} />
          <Route path="/Additional_Details" element={<AddDetail />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/upload_doc" element={<Upload />} />
          <Route path="/Driving_License" element={<License />} />
          <Route path="/address" element={<Address />} />
          <Route path="/RepaymentSetup" element={<Setup />} />
          <Route path="/BankDetails" element={<BankDetails />} />
          <Route path="/SearchIFSC" element={<SearchIfsc />} />
        </Routes>
       
        <Footer />      
      </BrowserRouter>
    </div>
  );
}

export default App;

