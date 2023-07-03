import React from 'react';
import './Donate.css';
import { useNavigate } from 'react-router-dom';

const Popup = ({ amount, onClose }) => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    // Perform any necessary actions before navigating

    // Navigate to the "/success" page
    navigate('/success');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Wait......</h3>
        <p>2.5% of the donation amount {amount} is Charged by App</p>
        <button onClick={handleOkClick}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
