const config = {
    user :'sa',
    password :'Sachin@1997',
  
     server:'localhost',
    // server:'192.168.31.170',
    database:'tempdb',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true
    },
    port : 1433
}

module.exports = config