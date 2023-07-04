import React, { useState,useEffect } from 'react';
import Header from '../Header/Header';
import './Donate.css';
import Popup from './Popup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Donate = () => {
  const [firstName, setFirstName] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [donationResult, setDonationResult] = useState(0);

  const [campaigns, setCampaigns] = useState([]);

  const navigate = useNavigate();

  
  // ...
  
  const handleDonate = (e) => {
    e.preventDefault();
  
    // Create an object with the form data
    const formData = {
      firstName,
      selectedCampaign,
      email,
      phone,
      amount
    };
  
    // Make the POST request using axios
    axios.post('http://localhost:50575/donationamount', formData)
      .then(response => {
        // Handle the response if needed
        console.log('Donation amount posted successfully:', response.data);
        const donationAmount = parseFloat(amount);
        const donationResult = donationAmount * 0.025;
        setDonationResult(donationResult);
        setShowPopup(true);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error posting donation amount:', error);
      });
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
  
console.log("active campain for select dropdown",campaigns)
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/success');
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>Donate</h2>
        <form className="donate-form" onSubmit={handleDonate}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="campaign">Select Campaign:</label>
            <select
              id="campaign"
              name="campaign"
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
              required
              className="select-input"
            >
              <option value="">-- Select Active Campaign --</option>
              {campaigns.map((campaign) => (
                <option key={campaign.id} value={campaign.id}>
                  {campaign.campaignName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Donate</button>
          </div>
        </form>
      </div>
      {showPopup && (
        <Popup amount={donationResult} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Donate;
