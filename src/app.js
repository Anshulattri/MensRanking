const env = require('dotenv-loader');
const express = require("express");
env.load().on('error', (err) => console.log("error while loading the env"));
const app=express();
require("./config/db");
const MensRanking = require("../src/models/mens");
const router = require('./routers/men');



const port =process.env.PORT || 3000;


app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`connection is live at a port no.${port}`);
})  

