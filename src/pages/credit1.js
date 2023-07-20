import News from "./side";
import { CTA } from '../Components';
import Inc from "../images/fin8.jpg";
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
    What Increases Your Total Loan Balance?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-around"
>
        <img
          src={Inc}
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
            <p className="pb-6">Although the majority of us would like to avoid debt, borrowing money from others occasionally has to be done. For instance, you might want a loan to pay for a significant medical expense or to cover regular expenses while your wage catches up to the increased costs.

Everyone's motives for taking out a loan are different. You are not the only individual who has a personal loan. According to TransUnion, 22 million Americans had this form of loan as of the third quarter of 2022.


Whatever your motivations were for getting a loan, the loan principal can easily become out of hand. Even if you are making payments, the balance of your loan may still be increasing.
</p>
            <br />
        <ul className="pl-2 mb-8 list-disc">
            <b className='ab'>5 Factors that can increase your total loan balance:</b><br /> <br /> <br /><p><b>Interest rates</b><br /><br />
<p>A consumer loan comes with an interest rate that is set by the lender. The loan agreement calls for interest-plus-principal repayment. The interest rate associated with your loan may cause the loan balance to rise over time depending on the loan arrangement.
</p>  
<p>
Interest capitalization is a method used frequently to compound interest over time. In essence, this means that whenever interest is paid on a loan, it is added to the loan balance. The greater loan balance, which now includes accrued interest, is utilised to determine interest going ahead. Compound interest over time might result in a much higher debt balance.
 </p>
<p>
It's important to note that your annual percentage rate (APR) and your interest rate are two different concepts. The interest rate and other fees related to the loan origination are included in the APR for your loan.
</p><br /></p>
<p><b>
Variable interest rates </b><br /><br />
<p>An interest rate that varies over time is called a variable interest rate. Variable interest rates are frequently linked to a benchmark or index rate that fluctuates in response to the state of the market. Variable interest rates can be alluring in a context of low rates, but the prospect of rising rates could trap you in a cycle of high-interest debt. 
 </p>
<p>
For example, a Federal Reserve report indicates that the average credit card interest rate rose from 14.51% in the fourth quarter of 2021 to 19.07% in November 2022. The steep rise might cause you to see a growing loan balance.  </p> 
</p>
<p><b><br /><br />
Only making the minimum payment </b><br /><br />
<p>It's tempting to continue making the bare minimum payment each month. However, you run the risk of paying less than the interest accumulated each month if you just make a tiny payment each month. If the interest costs are greater than your minimum monthly payment, the loan balance will increase. 
 </p>
<p>
While the minimum payment might feel like a better fit for your budget right now, it might lead to a growing loan balance.  </p>
</p>
<p><b><br /><br />
Making late payments </b><br /><br />
<p>If you pay a loan late, a late charge will probably be your first financial blow. Your loan sum will also continue to earn interest, which will increase the balance.  
</p>
<p>
Regularly making late payments could have a significant impact on your loan balance. </p> 
</p>
<p><b><br /><br />
Missing a payment </b><br /><br />
<p>A payment that is completely missed could have a lot of unpleasant repercussions. Potential loan default worries are one of the main problems. 
</p>
<p>
However, skipping a payment can increase the amount owed on your loan. Your loan balance will initially remain the same if you don't make the payment. It does allow your loan the opportunity to earn interest on a higher loan amount, though. After a missed payment, you can easily detect a greater loan debt with that. 
 </p>
<p>
Making every effort to keep up with your payments can help you avoid a rising loan balance. </p> </p><br />
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