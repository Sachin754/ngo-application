let express = require('express');
let cors = require ('cors')
let https = require('https')
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


app.post('/createcampaign', async(req,res) =>{
    console.log("api called",req.body)
    res.status(200).json({ message: 'Campaign created successfully' });
  })





  let server = app.listen(0, () => {
    let port = server.address().port;
    console.log('Server is running on port ' + port);
  });
  