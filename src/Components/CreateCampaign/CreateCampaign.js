
import Header from "../Header/Header";


import React, { useState } from 'react';
import './CreateCampaign.css';
import axios from "axios";

const CreateCampaign = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an object with the form data
    const formData = {
      name,
      description,
      startDate,
      endDate
    };

    console.log("formdata",formData)

    // Make the POST request using axios
    axios.post('http://localhost:49318/createcampaign',  formData)
      .then(response => {
        // Handle the response if needed
        console.log('Campaign created successfully:', response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error creating campaign:', error);
      });
  };

  return (
    <>
     <Header/>        
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
        <button type="submit">Create</button>
      </form>
    </div>
    </>
  );
};

export default CreateCampaign;


// const CreateCampaign = () => {

//     return(
//         <>
//         <Header/>        
       
//         </>
//     )
// }

// export default CreateCampaign