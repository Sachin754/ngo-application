let express = require('express');
let cors = require ('cors')
let https = require('https')
var config = require('./dbconfig')
const sql = require('mssql');
let app = express();
app.use(express.json());

var allowCrossDomain=function(req,res,next){
  
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-type');
    next()
  }
  let corsOptions = {
      origin:"http://localhost:3000",
      credentials:true
    };

    app.use(allowCrossDomain);
app.use(cors(corsOptions));




app.post('/createcampaign', async (req, res) => {
  console.log("api called", req.body);

  let data = req.body;
  console.log("daaataaa", data);
 // let startdate = new Date(data.StartDate);
 // let enddate = new Date(data.EndDate);
 

  try {
      let pool = await sql.connect(config);
      await pool.request()
          .input("campaignName", sql.NVarChar, data.name)
          .input("Description", sql.NVarChar, data.description)
          .input("StartDate", sql.DateTime, data.startDate)
          .input("EndDate", sql.DateTime, data.endDate)
          .input("City", sql.NVarChar, data.city)
          .query(`INSERT INTO CreateCampaign (campaignName, Description, StartDate, EndDate, City)
                   VALUES (@campaignName, @Description, @StartDate, @EndDate, @City)`)

      res.status(200).json({ message: 'Campaign created successfully' });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating the campaign' });
  }
});

app.post('/donationamount', async (req, res) => {
  console.log("api called", req.body);

  let data = req.body;
  console.log("daaataaa", data);

  try {
    let pool = await sql.connect(config);
    await pool.request()
      .input("firstName", sql.NVarChar, data.firstName)
      .input("lastName", sql.NVarChar, data.selectedCampaign)
      .input("email", sql.NVarChar, data.email)
      .input("phone", sql.NVarChar, data.phone)
      .input("donationAmount", sql.Decimal, data.amount)
      .query(`INSERT INTO DonationAmount (firstName, lastName, email, phone, donationAmount)
               VALUES (@firstName, @lastName, @email, @phone, @donationAmount)`);

    res.status(200).json({ message: 'Donation amount saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while saving the donation amount' });
  }
});


app.get('/activecampaign', async (req, res) => {
  try {
    let pool = await sql.connect(config);
    const result = await pool.request()
      .query('SELECT * FROM CreateCampaign');
      
    res.status(200).json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while retrieving active campaigns' });
  }
});







  let server = app.listen(0, () => {
    let port = server.address().port;
    console.log('Server is running on port ' + port);
  });
  