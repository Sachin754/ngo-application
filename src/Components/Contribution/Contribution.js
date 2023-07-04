import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Contribution.css";

const Contribution = () => {
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [activeCampaign, setActiveCampaign] = useState([]);
  const [donationDetail, setDonationDetail] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);
  const [afterAppDeduction, setAfterAppDeduction] = useState(0);

  const handleCampaignChange = (event) => {
    const campaignName = event.target.value;
    setSelectedCampaign(campaignName);
    axios
      .post("http://localhost:50575/getdonationdetails", { campaignName })
      .then((response) => {
        setDonationDetail(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving donation details:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:50575/activecampaign")
      .then((response) => {
        setActiveCampaign(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving active campaigns:", error);
      });
  }, []);



useEffect(() => {
    const calculateTotalDonation = () => {
      let total = 0;
      donationDetail.forEach((detail) => {
        total += parseFloat(detail.donationAmount);
      });
      setTotalDonation(total.toFixed(2));
      setAfterAppDeduction((total * 0.975).toFixed(2));
    };

    calculateTotalDonation();
  }, [donationDetail]);

  return (
    <>
      <Header />
      <div className="contribution-container">
        <h1>Contribution</h1>
        <div className="select-container">
          <label htmlFor="campaignDropdown">Select Campaign:</label>
          <select
            id="campaignDropdown"
            className="campaign-dropdown"
            value={selectedCampaign}
            onChange={handleCampaignChange}
          >
            <option value="">-- Select a campaign --</option>
            {activeCampaign.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.campaignName}
              </option>
            ))}
          </select>
        </div>
        <div className="donation-details-container">
          <h2>Donation Details</h2>
          <table className="donation-details-table">
            <thead>
              <tr>
                <th>Donater Name</th>
                <th>Campaign Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Donation Amount</th>
              </tr>
            </thead>
            <tbody>
              {donationDetail.map((detail) => (
                <tr key={detail.id}>
                  <td>{detail.firstName}</td>
                  <td>{detail.lastName}</td>
                  <td>{detail.phone}</td>
                  <td>{detail.email}</td>
                  <td>{detail.donationAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-donation">
            <span>Total Donation:</span>
            <span>{totalDonation}</span>
          </div>
          <div className="total-donation">
    <span>After App Deduction (2.5%):</span>
    <span>{afterAppDeduction}</span>
  </div>
        </div>
      </div>
    </>
  );
};

export default Contribution;
