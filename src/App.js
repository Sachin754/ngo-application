import React from 'react';

import Home from './Components/Home/Home';
import { BrowserRouter as Router,  Route,Routes,Link } from 'react-router-dom';
import CreateCampaign from './Components/CreateCampaign/CreateCampaign';
import ActiveCampaign from './Components/ActiveCampaign/ActiveCampaign';
import Register from './Components/Register/Register';
import Donate from './Components/Donate/Donate';
import Success from './Components/Donate/SuccessPage';
import Contribution from './Components/Contribution/Contribution';


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
            <Route path="/success" element={<Success />} />
            <Route path="/contribution" element={<Contribution />} />
           
          </Routes>

       </Router>
     
    
    </div>
  );
};

export default App;
