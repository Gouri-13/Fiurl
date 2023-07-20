import React from 'react';
import "./prefr.css";
const OtpInput = () => {
  const handleKeyUp = (event, nextInputId) => {
    if (event.target.value.length) {
      document.getElementById(nextInputId).focus();
    }
  };

  return (
    <div className='otpbody'>
    <div className="otp">
      <h1 className="otp1">ENTER OTP</h1>
      <div className="userInput">
        <input
          type="text"
          id="ist"
          maxLength="1"
          onKeyUp={(e) => handleKeyUp(e, 'sec')}
        />
        <input
          type="text"
          id="sec"
          maxLength="1"
          onKeyUp={(e) => handleKeyUp(e, 'third')}
        />
        <input
          type="text"
          id="third"
          maxLength="1"
          onKeyUp={(e) => handleKeyUp(e, 'fourth')}
        />
        <input
          type="text"
          id="fourth"
          maxLength="1"
          onKeyUp={(e) => handleKeyUp(e, 'fifth')}
        />
        <input type="text" id="fifth" maxLength="1" />
      </div>
      <button className="con">CONFIRM</button>
    </div></div>
  );
};

export default OtpInput;
