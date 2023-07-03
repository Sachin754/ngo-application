import React from "react";
import "./Donate.css";
import Header from "../Header/Header";

const Success = () => {
  return (
    <>
    <Header/>
    <div className="success-container">
      <div className="success-card">
        <h2>Successful!</h2>
        <p>Thank you for your generous contribution.We will contact you soon on given information</p>
      </div>
    </div>
    </>
  );
};

export default Success;
