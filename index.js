const express = require("express");
const userRoute = require("./router/User");

const app = express();
const port = 3000;

app.use('/user',userRoute)

app.listen(port,()=>{
   
    console.log("Port connected at "+port);
    
}
);
