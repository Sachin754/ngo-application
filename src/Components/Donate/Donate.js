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
          </div>
          <button type="submit">Donate</button>
        </form>
      </div>
    </>
  );
};

export default Donate;
