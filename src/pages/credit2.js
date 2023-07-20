import React from 'react';
// import Layout from './../components/Layout/Layout';
import Score from "../images/fin20.jpg";
import News from "./side";
import { CTA } from '../Components';
import { Link } from "react-router-dom";

 import "../styles/about.css";
const finance = () => {
  const boxStyle = {
    marginLeft: "120px",
    marginTop: "50px",
    borderRadius: '30px',
    width: '300px',
    height: '250px',
    background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
    opacity:'0.75',
    color: 'black',
    padding: '10px',
  };
  return (
    <div className='finance1'> 
    <div className="pscontainer1"> 
    <h2 className="pt-8 pb-8 ml-8 md:pt-12  md:mx-10 xl:mx-18">
    Why Did My Credit Score Drop?
      </h2>
      <div className="flex flex-col md:flex-row justify-around"
>
        <img
          src={Score}
          alt="image"
          className="rounded-2xl mt-4 md:ml-10 sm:w-4/5 md:w-1/3 lg:w-1/2 xl:w-1/2 md:h-80 lg:h-80 xl:h-80"/>
        <div
        className="rounded-2xl mr-9 mt-4 ml-8 sm:w-50  md:w-50  xl:w-80 bg-gradient-to-b from-teal-200 to-teal-500 opacity-75 text-black p-4  sm:h-48 md:h-48 lg:h-48 xl:h-60 xl:ml-20 md:mr-10  "

          style={{ backdropFilter: 'blur(4px)' }}
        >
          <p className="py-2">
            RELATED ARTICLES
            <ul className="pl-6 mt-2 list-disc">
              <li>
                <u>
                  <Link to="/credit1">What Increases Your Total Loan Balance?</Link>
                </u>
              </li>
              <li>
                <u>
                  <Link to="/FinancialLiteracy">What Is Financial Literacy?</Link>
                </u>
              </li>
              <li>
                <u>
                  <Link to="/credit2">Why Did My Credit Score Drop?</Link>
                </u>
              </li>
            </ul>
          </p>
        </div>
      </div>

      
      <div className="mt-8 mx-2 md:mt-12 md:mx-10 xl:mx-18 " style={{ textAlign:"justify"}}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12 xl:w-8/12">
            <p className="pb-6">Credit scores may change from one month to the next.

Few points shouldn't cause anyone to lose sleep because they are easily lost and earned back. However, a significant decline—of 20 points or more—indicates that something unfavourable may have happened to your credit reports.

Whenever you find yourself wondering "Why did my credit score drop?" look at these potential causes and the related advice on how to handle each of them.
</p>
            <br />
        <ul className="pl-2 mb-8 list-disc">
        <b className='ab'>5 reasons why your credit score dropped:</b><br /> <br /> <br /><p><b>1. You missed a debt payment</b><br /><br />
<p>Your credit scores might decrease by up to 80 points or more if you miss just one payment on a credit card or loan.
</p>  
<p>
This is so because the primary component used to determine your FICO credit scores is your payment history. More over one-third (35%) of your marks are determined by it. Your credit ratings may suffer significantly if a creditor notes that you are just one bill payment behind by 30 days. </p> <p>
Although the missed payment will remain on your credit records for seven years even if you pay the past-due bill, you can thankfully earn the lost points back over time.</p> 
<p> <b>Tip:</b> Set up autopay to be proactive about preventing forgotten payments. If you believe you could be late with a payment, try to modify the date or inquire about hardship assistance from the creditor. </p><br /></p>
<p><b>
2. Your credit card balance(s) increased </b><br /><br />
<p>Your utilisation ratio, commonly referred to as your debt-to-credit ratio (DTC), is the second most important component that affects your credit ratings (30%). The less of your available revolving credit you are utilising, the better, according to DTC. Therefore, your credit scores may suffer if your credit card balances rise. </p></p>
<p><b><br /><br />
3. Incorrect information</b><br /><br />
<p>Your scores may suffer if inaccurate information appears on your reports, whether as a result of identity theft or creditor error. </p> <p>You have the right to challenge inaccurate information if you discover it in your credit report. You should never pay a third party to submit a claim on your behalf because it only takes a few minutes and is free to do so.</p>
</p><br /><br />
<p><b>4. You applied for a new credit card or loan</b><br /><br />
<p>Your credit scores may decrease by a few points each time you apply for new credit, whether it be a credit card, personal loan, student loan, mortgage, or another type of loan. This is due to the fact that new credit applications, sometimes referred to as "hard inquiries," account for 10% of your credit ratings.</p> <p>
Since new accounts decrease the average age of your credit accounts, you can experience a further decline in your ratings if your application is accepted.
</p>
<p>
<b>Tip:</b> When looking for finance, consider the best time to submit your applications. Multiple mortgage or auto loan applications will only count as one hard inquiry if they are all submitted within 30 days.
</p><br /></p>
<p><b>
5. You filed bankruptcy </b><br /><br /><p>One of the most damaging items that can appear on your credit reports is bankruptcy because it demonstrates to creditors your inability to repay debts.</p> <p>
Expect your scores to significantly decline if you file for bankruptcy; the higher your scores were before to filing, the more points you'll lose. Good credit holders should anticipate a reduction of at least 100 points.
</p>
<p>
<b>Tip:</b> By including good information in your credit reports, you can hasten the bankruptcy recovery process. One technique to accomplish this is to have a close friend or relative add you as a "authorised user" to one of their credit accounts. Another option is to try to get a secured credit card.


</p><br /></p>
          </ul>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12 xl:w-4/12 md:ml-20">
            <News />
          </div>
        </div>
      </div>
      <div className=' pt-20  '>  <CTA /> </div> <br/><br/><br/>  
      </div></div>
  );
};

export default finance;