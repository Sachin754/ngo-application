import React from 'react';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  return (
    <>
      <Header />

      <div
        className="maindiv"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/3.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          width: '100%',
          marginTop: '-39px',
        }}
      >
        <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Non - Profit Organization</h3>
        <p style={{ color: 'white', fontSize: '1.5rem' }}>Every charitable act is a stepping stone towards heaven</p>
      </div>

      <div className="seconddiv" style={{ height: '600px', width: '100%', backgroundColor: 'white', 
     }}>
        <h3 style={{ color: '#683d4a', fontSize: '2.5rem', textAlign: 'center' }}>We are the world’s No 1 fundraising site for charitable causes</h3>
        <div className="card-container">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/Donation.png'} style={{ maxWidth: '100%', maxHeight: '100%' , }} alt="Logo 1" />
            <h4 style={{textAlign:'center', color:'orange'}}> Make Donation</h4>
            <p style={{textAlign:'center'}}>When you donate, you not only give money, but also share your love, and give hope to those in need.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/vol.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent' }} alt="Logo 2" />
            <h4  style={{textAlign:'center', color:'orange'}}>Volunteer</h4>
            <p style={{textAlign:'center'}}>We depend on volunteers from our local community, joining us you can both gain experience and help others.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/fund.png'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent' }}  alt="Logo 3" />
            <h4  style={{textAlign:'center', color:'orange'}}>Fundraising</h4>
            <p style={{textAlign:'center'}}>We gather voluntary contributions to help
schools, churches, and other non-profit
organizations.</p>
          </div>
        </div>
      </div>



      <div className="thirddiv" style={{ height: '600px', width: '100%', backgroundColor: 'white', 
     }}>
        <h3 style={{ color: '#683d4a', fontSize: '2.5rem', textAlign: 'center' }}>What We Do</h3>
        <div className="card-container">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/water.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%' , }} alt="Logo 1" />
            <h4 style={{textAlign:'center', color:'orange'}}> Provide Clean Water</h4>
            <p style={{textAlign:'center'}}>We invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water, decent sanitation and shelter for both urban and rural dwellers..</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/education.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent' }} alt="Logo 2" />
            <h4  style={{textAlign:'center', color:'orange'}}>Education.Clothing</h4>
            <p style={{textAlign:'center'}}>We invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water, decent sanitation and shelter for both urban and rural dwellers.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/food2.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent' }}  alt="Logo 3" />
            <h4  style={{textAlign:'center', color:'orange'}}>Food.Agriculture</h4>
            <p style={{textAlign:'center'}}>In order to help the communities we have created a group of farmers who donate agricultural product to food banks.</p>
          </div>
        </div>
      </div>



      <div className="fourthdiv" style={{ height: '600px', width: '100%', backgroundColor: 'white', 
     }}>
        <h3 style={{ color: '#683d4a', fontSize: '2.5rem', textAlign: 'center' }}>What We Did Recently</h3>
        <div className="card-container">
          <div className="fourthdivcard">
            <img src={process.env.PUBLIC_URL + '/rajashthan.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%' , }} alt="Logo 1" />
            <h4 style={{textAlign:'center', color:'orange'}}> We help to Provide Clean Water in Rajashthan</h4>
            <p style={{textAlign:'center'}}>We invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water, decent sanitation and shelter for both urban and rural dwellers..</p>
          </div>
         
        
        </div>
      </div>




      <div className="fifthdiv" style={{ height: '600px', width: '100%', backgroundColor: 'white', 
     }}>
        <h3 style={{ color: '#683d4a', fontSize: '2.5rem', textAlign: 'center' }}>Our Trusted Donors</h3>
        <div className="card-container">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/tatamotors.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%' , }} alt="Logo 1" />
            <h4 style={{textAlign:'center', color:'orange'}}> Tata Empire</h4>
            <p style={{textAlign:'center'}}>They help us to invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water, decent sanitation and shelter for both urban and rural dwellers..</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/jannat.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent' }} alt="Logo 2" />
            <h4  style={{textAlign:'center', color:'orange'}}>Fashion Empire</h4>
            <p style={{textAlign:'center'}}>We invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water, decent sanitation and shelter for both urban and rural dwellers.</p>
          </div>
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/mahin.jpeg'} style={{ maxWidth: '100%', maxHeight: '100%', background:'transparent',paddingTop:'52px' }}  alt="Logo 3" />
            <h4  style={{textAlign:'center', color:'orange',}}>Mahindra Empire</h4>
            <p style={{textAlign:'center'}}>In order to help the communities we have created a group of farmers who donate agricultural product to food banks.</p>
          </div>
        </div>
      </div>





      <div className="sixthdiv" style={{ height: '600px', width: '100%', backgroundColor: 'white', 
     }}>
        <h3 style={{ color: '#683d4a', fontSize: '2.5rem', textAlign: 'center' }}>Contact Us</h3>
        <div className="card-container">
          <div className="fourthdivcard">
          <div className="form-container">

  <form className="small-form" style={{background:'white'}}>
    <div className="form-group">
      <label htmlFor="name">Address:</label>
     <p>Building No 3,5th Floor,Gyankund ,New Delhi,01251-3275723,3973997979,
     </p>
     <p>Email on:- www.cpf@gmail.com</p>
    </div>
  
 
  </form>
</div>
           
           
          </div>
         
        
        </div>
      </div>

      {/* The rest of your app */}
    </>
  );
};

export default Home;
