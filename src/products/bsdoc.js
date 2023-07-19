import React from 'react';
import './index1.css';

const bsdoc = () => {
    return (
<div>
<div >
<h1 className="psloan text-center   pt-10">Documents Required for a Business loan</h1><br></br><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}> You will need the following documents to get a business loan through a lending partner of FinURL:</p>
            <br></br>
            <ul className=" pslist" style={{  listStyle: "outside", color: "white", wordWrap:"break-word" }}>
            <li><b>Identity Proof:</b>  PAN card/passport/driving licence/Voter’s ID</li>
            <li><b>Address Proof:</b> Aadhaar card/passport/utility bills/lease agreement</li>
            <li>Bank statement for last 6 months</li>
            <li className=''>ITR form in addition with certified copies with details such as income computation, balance sheet, and Profit and Loss (P&L) statement for the last 2 years</li>
            <li>Sole Proprietorship Declaration or authenticated copy of Partnership Deed</li>
            <li>Certified copy of Memorandum and Articles of Association

</li><br />
            </ul>
          </div>
          </div>
)
    }
export default bsdoc;