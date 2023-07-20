import News from "./side";
import { CTA } from '../Components';
import Inc from "../images/fin21.jpg";
import { Link } from "react-router-dom";
//import "../products/index1.css";
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
    <div className='finance1 '> 
    <div className="pscontainer1"> 
    <h2 className="pt-8 pb-8 ml-8 md:pt-12  md:mx-10 xl:mx-18">
    FINANCE TERMS THAT YOU SHOULD KNOW
      </h2>
      
      <div className="flex flex-col md:flex-row justify-around"
>
        <img
          src={Inc}
          alt="image"
          className="rounded-2xl mt-4 md:ml-10 sm:w-4/5 md:w-1/3 lg:w-1/2 xl:w-1/2 md:h-80 lg:h-80 xl:h-80"/>
        <div
        className="rounded-2xl mr-9 mt-4 ml-8 sm:w-50  md:w-50  xl:w-80 bg-gradient-to-b from-teal-200 to-teal-500 opacity-75 text-black p-4  sm:h-48 md:h-48 lg:h-48 xl:h-60 xl:ml-20 md:mr-10  "

        
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
            <p className="pb-6">A lot of people can find the acronyms and phrases used in the financial industry strange. To help you better understand money and credit, we have put up a dictionary of financial words.</p>
            <br />
        <ul className="pl-2 mb-8 list-disc">
        <li><b>401(k):</b> Depending on the options available in your plan, you can contribute money to this account sponsored by your company either before or after taxes for retirement purposes.</li><br />
            <li><b>AnnualCreditReport.com:</b> the sole website allowed to offer free credit reports under federal law. Equifax, Experian, and TransUnion, the three credit reporting bureaus, are required to provide one free credit report to every American every year.</li><br />
            <li><b>Amortization:</b> An amortisation schedule may be provided to you when applying for a mortgage or auto loan. This schedule illustrates how your loan will be gradually repaid over time.</li><br />
            <li><b>APR:</b> APR stands for annual percentage rate. It’s the interest rate you pay when you get a loan or what you earn on an investment in one year, including fees.</li><br />
            <li><b>APY:</b> APY stands for annual percentage yield. It’s similar to APR, except it takes into account the compound interest you earn over a year. APY is higher than APR because it includes the interest you’ve already accumulated in its calculations. Banks advertise APY for savings accounts and APR for loans.</li><br />
            <li><b>ARM:</b> ARM stands for an adjustable-rate mortgage. Your interest rate starts at a certain APR, but it can go up (sometimes down) over time, which could make them riskier compared to fixed-rate mortgages.</li><br />
            <li><b> Cash flow:</b> The net amount of cash and cash equivalents moving into and out of a business.</li> <br />
            <li><b>Capital gains (and losses):</b>A captain gain is when you sell something for more money than you paid for it. A capital loss occurs when you sell something for less than you paid for it.</li><br />
            <li><b>Credit limit:</b> The maximum credit you can get on a financial product, such as a credit card or line of credit from a lender or financial institution. </li><br />
            <li><b>Credit report:</b> A credit bureau will compile a thorough history of a person's credit in the form of a credit report. It contains information on your credit account status, account balances, and payment history.</li>  <br />
            <li><b>Credit score:</b> Lenders use credit scoring, among other things, to determine your creditworthiness. A person’s credit score is a number between 300 and 850. </li><br />
            <li><b>Credit terms:</b> The agreement between borrower and lender that stipulates the monthly payment amount due, due date, fees and interest. </li><br />
            <li><b>Creditworthiness: </b>Measure of whether you’re financially sound enough to extend credit to. </li><br />
            <li><b>Debt consolidation:</b> The process of merging numerous loans or other debts into one to get a better rate or pay less in fees. </li><br />
            <li><b>    Diversification:</b>You're familiar with the proverb "don't put all your eggs in one basket." It is a risk management strategy that distributes assets among securities from various markets or asset classes.  </li><br />

<li><b>Financial wellness:</b>When a consumer is on top of their finances, they’re referred to as financially healthy. It’s a highly personal state, regardless of income, that we all strive for.</li><br /> 

<li><b>Fixed-rate loan:</b> A loan where the interest rate doesn’t fluctuate for the duration of the loan.</li><br />

<li><b>Gross income: </b>The total money earned before taxes are deducted.</li><br /> 

<li><b>Hard inquiry</b> (or hard pull): Inquiries that have an impact on your credit rating. Potential creditors frequently conduct hard pulls with your consent to assess your creditworthiness. </li><br />

<li><b>Identity theft:</b> Acquiring personal information to obtain credit under another person’s name.</li><br /> 

<li><b>IRA:</b> IRA stands for individual retirement account. Unlike 401(k)s, an IRA can be opened by an individual and don’t have to be sponsored by your employer. You can contribute income up to a set maximum dollar amount. </li><br />

<li><b>Net income:</b> It’s the total money earned after taxes and other deductions are taken out. </li><br />

<li><b>Net worth:</b> The difference between your assets and your debts. </li><br />

<li><b>ROI:</b> ROI stands for return on investment. To calculate ROI, take the gain of the investment, subtract the cost of the investment, and then divide the total by the investment cost. </li><br />

<li><b>Soft inquiry </b>(or soft pull): Inquiries that have no impact on your credit rating. Typically, utilities, lenders, or employers start soft pulls.</li><br />

<li><b>Secured credit card: </b>A credit card backed by a cash deposit. When you are rebuilding your credit, these types of cards can be helpful. </li><br />

<li><b>Secured debt:</b> A debt secured with collateral to reduce a lender’s risk (e.g., a car loan, mortgage, or home equity line of credit).</li><br />

<li><b>Unsecured debt:</b> A debt that isn’t secured with collateral (e.g., credit cards, certain personal loans).</li><br />

<li><b>Variable interest rate:</b> When a loan's interest rate changes over the course of the term.</li><br />
          
            </ul>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12 xl:w-4/12 md:ml-20 lg:mr-10">
            <News />
          </div>
        </div>
      </div>
      <div className=' pt-20  '>  <CTA /> </div> <br/><br/><br/>  
      </div></div>
  );
};

export default finance;