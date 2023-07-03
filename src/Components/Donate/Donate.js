import React from 'react';
import Header from "../Header/Header";
import './Donate.css';

const Donate = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Our Payment Details</h2>
        <form className="campaign-form">
          <div className="form-group">
            <p><strong>Account Name:</strong> &nbsp; Crowd Fundraising Platform</p>
            <p><strong>Account No:</strong> &nbsp; 5110638393733389</p>
            <p><strong>IFSC Code:</strong> &nbsp; HDFC0000789</p>
            <p><strong>Bank Name:</strong> &nbsp; HDFC Bank</p>
            <p><strong>For More:</strong> &nbsp; 01252-563738,8700078324</p>
          </div>
       
        </form>
      </div>
    </>
  );
};

export default Donate;
