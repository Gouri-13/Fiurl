import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
import Prodoc from "../products/prodoc";
function Table() {
  const data1 = [
    {  name: 'Interest rate', value: 'Starting from 12% to 20%' },
    {  name: 'Processing Fee', value: 'Up to 4.72% of the loan amount' },
    {  name: 'Bounce charges', value: '₹1,500 (Inclusive of applicable taxes)' },
    {  name: 'Penal interest', value: 'Any delay in payment of EMI shall attract penal interest at the rate of 3.5% per month on the EMI outstanding from the date of default until the receipt of the EMI' },
    {  name: 'Outstation collection charges', value: '₹65 + GST' },
    {  name: 'Prepayment/ charges', value: <ul style={{listStyle:"none"}}><li>Term Loan - 4% plus applicable taxes on the outstanding loan amount payable by you on the date of such full prepayment</li><li>Flexi Loan -  4% plus applicable taxes of the total withdrawable amount as per the repayment schedule, on the date of such full prepayment.</li></ul> },
    {  name: 'Part-payment charge', value: <ul style={{listStyle:"none"}}><li>Term Loan - 2% plus applicable taxes on the amount part- prepaid</li> <li>Flexi Loan - Nil</li> </ul>},
    {  name: 'Annual Maintenance Charges', value: <ul style={{listStyle:"none"}}><li>Term Loan - Nil</li> <li>Flexi Loan - 0.25% plus applicable taxes </li> </ul>}

  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    
    <div className="loanbg">
    <div className="h-3/4 overflow-hidden">
      <img src={Dosa} alt="Our Story" className="w-[100%] h-[40%]" />
      <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Professional Loan
          </h1>
        </div>
    </div>
    <br />
    <br />
    <br />
   <div className="pscontainer overflow-x-hidden">
              <p className="ps text-white" style={{ wordSpacing: "4px" }}>
              A professional loan is a financial tool that enables professionals, such as doctors and chartered accountants, to borrow funds without committing any security in order to meet requirements. The demands may involve building out the office, getting new machinery, and many other things.
<br></br><br></br>
You can advance your professional career and practise with the aid of a self-employed professional loan. In reality, submitting an application for a professional loan on FinURL is advantageous because you might receive speedy approval and personalised offers. If you are a doctor, chartered accountant, or any other type of professional, you can take advantage of these incentives to receive the money you need to expand your business. 
<br></br><br></br>
Furthermore, you need only submit minimal documentation, making it easier to avail. Here’s what you need to know about this financial offering.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className=" psloan">Professional Loan Interest Rates</h1><br></br>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest rate</th>
                          <th>Starting from 12% to 20%</th> */}
                      </tr>
                  </thead>
                  <tbody>
                  {data1.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table>
              </div>
          </center>
          <br></br>
          <br></br>
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>*The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.
</p>
<br></br>
            <h1 className="psloan text-center pt-10" >How to Apply for a Professional Loan</h1><br></br>
            <ul className="list pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
                <p className="text-white ps" >Follow these steps to apply for a professional loan </p> <br></br>
            <li style={{wordWrap:"break-word"}}><b>Step 1:</b> Click on the ‘Apply Now’ on this page.</li><br />
            <li><b>Step 2:</b> Fill in a few essential details, such as your profession, mobile number, date of birth, name and pin code.</li><br />
            <li><b>Step 3:</b> Receive an OTP in your registered number and check your offer.</li><br />
            <li><b>Step 4:</b> Complete the verification process and submit the required documents upon approval.</li><br />
            <li><b>Step 5:</b> Get the loan amount credited to your account within a few minutes after the approval of your application.</li><br />
            </ul>
            <br></br>
            < Prodoc />
          <br></br>
            <h1 className="psloan text-white text-center pt-10">Why Do You Need a Professional Loan?</h1><br></br>
            <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
            <li>You might choose to set up your clinic as a private practise as a doctor. To get started, this needs a sizable sum of money.</li><br />
            <li>Since you are a professional, you probably already have a space to practise, but you might want to grow or scale it. This may entail making improvements, looking for new spaces, and hiring extra personnel.</li><br />
            <li>It's important to keep up with the latest technology developments. A professional loan might assist you in updating your professional practise by enabling you to buy new machinery or equipment.</li><br />
            </ul>
            </div></div>
          
  );
}

function TableRow({ name, value }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    );
  }
  

export default Table;
