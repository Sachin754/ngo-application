import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import "./ActiveCampaign.css";

const ActiveCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

 

  console.log("active campaigns are", campaigns);

  const handleContributorDetailClick = () => {
    navigate("/contribution");


   
  };

  useEffect(() => {
    // Make the GET request using axios
    axios
      .get("http://localhost:50575/activecampaign")
      .then(response => {
        // Handle the response data
        setCampaigns(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error("Error retrieving active campaigns:", error);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="campaign-container">
        <h1 className="campaign-heading">Active Campaign</h1>
        {campaigns.length === 0 ? (
          <h2 className="no-campaigns-heading">No active campaigns available now</h2>
        ) : (
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
                <button className="contributor-detail-button" onClick={handleContributorDetailClick}>
                  Contributor Detail
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveCampaign;
