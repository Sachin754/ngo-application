
import Header from "../Header/Header";


import React, { useState } from 'react';
import './CreateCampaign.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateCampaign = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city,setCity] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an object with the form data
    const formData = {
      name,
      description,
      startDate,
      endDate,
      city
    };

    console.log("formdata",formData)

    // Make the POST request using axios
    axios.post('http://localhost:50556/createcampaign',  formData)
      .then(response => {
        // Handle the response if needed
        console.log('Campaign created successfully:', response.data);
        toast.success('Campaign created successfully!');
        navigate('/active-campaign');
       
      })
      .catch(error => {
        // Handle any errors
        console.error('Error creating campaign:', error);
      });
  };

  return (
    <>
     <Header/>    
     <ToastContainer />    
    <div className="form-container">
      <h2>Create Campaign</h2>
      <form className="campaign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Campaign Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Campaign Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
    </>
  );
};

export default CreateCampaign;


