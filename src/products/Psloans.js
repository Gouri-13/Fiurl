import React, { useEffect, useRef } from "react";
import './index1.css';
import { Card, Typography } from "@material-tailwind/react";
import Dosa from "../images/L1.jpg";
import "../styles/animation.css";
import Psdoc from "../products/psdoc";

function Table() {
  const data1 = [
    { name: 'Interest Rate', value: '10.49% p.a. onwards' },
    { name: 'Processing Fee', value: 'Between 0.5% and 2.50% of the loan amount' },
    { name: 'Loan Amount Range', value: 'Up to ₹50 Lakhs' },
    { name: 'Loan tenure', value: '1 to 6 years' },
    { name: 'Prepayment Charges', value: '2-3% of the outstanding loan amount' },
    { name: 'Late Payment Charges', value: '2% of the due amount' }
  ];
  const data2 = [
    { name: 'MONEYWIDE', value: 'ROI 14%' },
    { name: 'Faircent', value: 'ROI 15%' },
    { name: 'Paysense', value: 'ROI 14%' },
    { name: 'IIFL BL', value: 'ROI 12%' },
    { name: 'IIFL PL', value: 'ROI 12%' },
    { name: 'Privo', value: 'ROI 15%' },
    { name: 'FLEXI LOAN', value: 'ROI 12%' },
    { name: 'NIRA', value: 'ROI 14%' },
    { name: 'KreditBee', value: 'ROI 15%' },
    { name: 'TATACAPITAL', value: 'ROI 12%' }
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    <div className="loanbg">
      <div className="h-3/4 overflow-hidden">
        <img src={Dosa} alt="Our Story" className="w-[100%] h-[30%]" />
        <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl  lg:text-6xl"
          >
            Personal Loan
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="pscontainer overflow-x-hidden">
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>
        An unsecured form of credit called a personal loan is available for any type of monetary need. A fast personal loan can provide you with the best relief, whether you need it for paying for your upcoming international trip, house renovations, or unanticipated medical expenditures. In today's world, those in need of loans can quickly apply online at FinURL and receive the best Personal Loan offers in India.
          <br />
          <br />
        </p>
        <br />
        <center>
        <h1 className=" psloan">Personal Loan Details</h1>
        <br />
        <div className="table-container1 overflow-x-auto">
          <table className="text-white">
            <tbody>
              {data1.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
            </tbody>
          </table>  
        </div></center>
        <br />
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>
          *The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.
          <br />
          <br />
          We at FinURL can put you in touch with the best personal loan lenders in India. You can compare personal loans, choose the best lenders based on convenience, and submit an application for an immediate loan with conditions you find agreeable.
        </p>
        <br />
        <h1 className="psloan text-center pt-10">Compare Personal Loans & Apply Online</h1>
        <br />
        <p className="text-white ps" >
          <center>Compare personal loan interest rates of some of the leading Indian lenders right away. Their borrowing rates are as follows:</center>
        </p>
        <br />
        <center> 
          
           <div className="table-container1 overflow-x-auto">
     <div className='table1'>    <table className="text-white">
            <tbody>
              {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
            </tbody>
          </table> </div> 
        </div>
        
        
         </center>
        <br />
        <h1 className="psloan text-center pt-10">How to Apply Personal Loan Online</h1>
        <br />
       <ul className=" pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
          <li style={{wordWrap:"break-word"}}><b>Step 1:</b> Fill up the application form online at the top of the page with your personal and professional details.</li>
          <br />
          <li><b>Step 2:</b> Choose the loan amount you desire from the lending partner</li>
          <br />
          <li><b>Step 3:</b> Provide all the required documents and the application form for verification.</li>
          <br />
          <li><b>Step 4:</b> Once your loan is approved, the amount will get disbursed to your bank account within 24 hours.</li>
          <br />
        </ul>
        <br />
        < Psdoc />
        <br />
        <h1 className="psloan text-white text-center pt-10">Where Can a Personal Loan be Used?</h1>
        <br />
        <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
          <li><b>Wedding:</b> You can handle the seemingly unending list of costs associated with weddings with the aid of a marriage loan. Or you can plan your post-marriage excursions with confidence, confident that you have enough cash to cover most of the costs.</li>
          <br />
          <li><b>Travel:</b> With the aid of a travel loan, you might realise your wish to visit that dream location. The costs, including those for things like hotel reservations and plane tickets, among others, should be simple for you to handle.</li>
          <br />
          <li><b>Home Renovation:</b>  A fast personal loan can assist you if you've been trying to renovate your house. You will be able to manage the essential costs associated with house renovation and repair thanks to the money you receive as a personal loan. Additionally, you have the option of repaying it over a flexible timeframe.</li>
          <br />
          <li><b>Higher Education:</b>Higher education expenses may also be covered by a personal loan. Typically, people take out personal loans to pay for things like tuition, travel-related costs, and lodging/accommodation costs, among others.</li>
          <br />
          <li><b>Medical Exigency:</b>Financial difficulties may result from a medical emergency. These situations may also compel you to ask your family and friends for help. You might apply for a personal loan for medical emergencies to cover such an event.</li>
          <br />
          <li><b>Buying Expensive Gadgets:</b> You can receive the money you need to buy the devices you want with consumer durable loans, another sort of personal loan. A consumer durable loan can be used to pay for items like the TV you've always wanted, the phone you've been eyeing, or even the speaker system that will turn your house into the hottest party spot.</li>
          <br />
        </ul>
      </div>
    </div>
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