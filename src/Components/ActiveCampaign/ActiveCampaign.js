import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "./ActiveCampaign.css";

const ActiveCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    // Make the GET request using axios
    axios
      .get("http://localhost:60181/activecampaign")
      .then(response => {
        // Handle the response data
        setCampaigns(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error("Error retrieving active campaigns:", error);
      });
  }, []);

  console.log("active campaigns are", campaigns);

  return (
    <>
      <Header />

      <div className="campaign-container">
        <h1 className="campaign-heading">Active Campaign</h1>
        <div className="campaign-cards">
          {campaigns.map(campaign => (
            <div className="campaign-card" key={campaign.id}>
              <h3 className="highlight">Campaign Name: {campaign.campaignName}</h3>
              <p className="description">Description: {campaign.Description}</p>
              <p className="info">
                City: <span className="highlight">{campaign.City}</span>
              </p>
              <p className="info">
                Start Date: <span className="highlight">{new Date(campaign.StartDate).toLocaleDateString()}</span>
              </p>
              <p className="info">
                End Date: <span className="highlight">{new Date(campaign.EndDate).toLocaleDateString()}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActiveCampaign;
