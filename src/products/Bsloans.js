import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
import Bsdoc from "../products/bsdoc";
function Table() {
  const data1 = [
    {  name: 'Bajaj Finance Limited', value: '18% onwards', age:'72 months' },
    {  name: 'Lendingkart Finance Limited', value: '15% onwards' , age:'36 months'},
    {  name: 'KreditBee', value: ' 15% onwards', age:'9 months ' },
    {  name: 'FlexiLoans', value: '12% onwards', age:'36 months' },
    {  name: 'IIFL', value: '16.50% onwards', age:'60 months'},
    {  name: 'InCred', value: '20% onwards', age:'48 months' },
    {  name: 'AYE Finance', value: '28% onwards', age:'36 months'},
    {  name: 'Indifi', value: '16% onwards', age:'36 months'}

  ];
  const data2 = [
    {  name: 'Interest Rate', value: 'Starting from 12% p.a' },
    {  name: 'Processing Fee', value: '2-3% of Loan amount' },
    {  name: 'Loan tenure', value: 'Up to 72 months' },
    {  name: 'Pre-closure Charges', value: '4% of principal outstanding amount + GST' },
    {  name: 'Eligibility Criteria', value: '₹ 90,000 turnover for 3 months' },
    {  name: 'Loan Amount', value: '₹ 25,000 to ₹50 Lakhs' },
    {  name: 'Instalments', value: 'Flexible Monthly/Bi-weekly' }
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);
  return (
    <div className="loanbg ">
      <div className="h-3/4 overflow-hidden">
        <img src={Dosa} alt="Our Story" className="w-[100%] h-[40%]" />
        <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Business Loan
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
          <div className="pscontainer"style={{ overflowX: 'hidden' }}>
              <p className="ps text-white" style={{ wordSpacing: "4px" }}>
              A new or established business may employ a business loan, which is an unsecured loan. A business loan is a terrific option whether you need money for employing new employees, growing your firm to new locations, investing in cutting-edge equipment, or paying off all of your debts. These days, a large number of banks and non-banking financial institutions (NBFI) provide speedy business loans with affordable interest rates. You can benefit from the best-curated deals and get an immediate business loan approval if you meet the eligibility requirements and have the necessary documentation in order.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className="psloan" > Our Business Loan Partners</h1><br></br>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          <th>Our Partners</th>
                          <th>Interest Rate Range</th>
                          <th>Maximum Tenure</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data1.map((row, index) => (
                <TableRow1 key={index} name={row.name} value={row.value} age={row.age} />
              ))}
                  </tbody>
              </table> </div>
          </center>

<br></br>
            <h1 className="psloan text-center pt-10">Business Loan Fees & Interest Rates</h1><br></br><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>Access to carefully vetted new business loans with low interest rates is made possible by FinURL. As a result, you pay reasonable EMIs for the duration of the loan. View the interest rate and fees associated with a business loan by referring to the table below: </p>
            <br></br><br></br>
            <center>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest Rate</th>
                          <th>Starting from 12% p.a</th> */}
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table> 
              </div>
          </center>
         
            <h1 className="psloan text-center pt-10">How to Apply for Business Loan</h1><br></br><br></br>
            <ul  className=" pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
                <p style={{ color: "white", wordSpacing: "4px" }}>Applying for a new business loan online on is now really simple. Just follow these steps:</p> <br></br>
            <li><b>Step 1:</b> Visit the Online Platform: Visit the FinURL website, select the category titled ‘Business Loans’ in the ‘Loans’ section and click on ‘Apply Now.’

</li>
            <li><b>Step 2:</b> Online Form Filling: Fill in your personal and business details.</li>
            <li><b>Step 3:</b> Select Your Lending Partner: From the list of loan offers, select a business loan from your preferred partner.</li>
            <li><b>Step 4:</b> Specify Loan Details: Choose your preferred loan amount and repayment tenure.</li>
            <li><b> Step 5: </b>Required Documents: Upload the scanned copies of all the required documents.</li>
            <li><b> Step 6: </b>Approval & Disbursal: Submit your application; post verification and approval, the money would be disbursed to your account.</li>
            </ul>
            
            < Bsdoc />
       
            <h1 className="psloan text-center pt-10">Reasons To Apply For a Business Loan</h1><br></br><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>If your company needs money and you want to apply for a quick business loan, it's simple to do so online right now. Here are some reasons why this type of funding can be the best option if you're unsure about obtaining a business loan for your project. </p><br></br>
            <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
            <li><b>Increased Working Capital:</b>The cash on hand to cover your company's immediate liabilities is referred to as working capital. For just this aim, there are specialised working capital business loans available. You can increase your company's liquidity and conveniently meet your working capital needs by taking use of this service.</li><br />
            <li><b>Business Expansion:</b> You will eventually need to extend your firm in several ways as you scale it up. This involves introducing new goods or services, starting a new branch, buying new machinery and equipment, and leasing new office space. Business loans might assist you with the additional financing needed for all of this.</li><br />
            <li><b>Credit Building :</b>Building future credit might also be aided by business financing. You raise your company credit score (or personal credit score, in the event of a sole proprietorship or similar entity) each time you pay the EMIs due on your business loan on time. You will find it simpler to get more credit facilities for your company in the future as a result. </li><br />
            <li><b>Improved Business Marketing:</b>Another area of business that necessitates a big expenditure is marketing. You need a strong marketing strategy if you want to reach your target market and increase lead conversion. You may be able to acquire the money you need through business loans to increase your company's consumer base and promote it more effectively. </li><br />
            <li><b>Upgradation of Your Workforce:</b>You can also increase and/or modernise your personnel with a business loan to accommodate your company's expanding needs. You can use the borrowed money to pay for new hires or raise salaries for current workers when they are due. Additionally, it can help pay for the necessary retraining or upskilling of your personnel.</li><br /><br />
            </ul>
            </div>
          </div>
         
          
  );
}

function TableRow1({ name, value, age }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
        <td>{age}</td>
      </tr>
    );
  }
  function TableRow({ name, value}) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    );
  }

export default Table;
