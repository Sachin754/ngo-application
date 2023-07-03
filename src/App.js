import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,  Route,Routes,Link } from 'react-router-dom';
import CreateCampaign from './Components/CreateCampaign/CreateCampaign';
import ActiveCampaign from './Components/ActiveCampaign/ActiveCampaign';
import Register from './Components/Register/Register';
import Donate from './Components/Donate/Donate';


const App = () => {
  return (
    <div>
       <Router>
     
       <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/active-campaign" element={<ActiveCampaign />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donate" element={<Donate />} />
           
          </Routes>

       </Router>
     
      {/* The rest of your app */}
    </div>
  );
};

export default App;
