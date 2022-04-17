import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouters from './route/web';

require('dotenv').config();

let app = express();

// config app
app.use(bodyParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
  }));

viewEngine(app);
initWebRouters(app);

let port = process.env.PORT || 8090; // PORT === undefined => port = 6969
app.listen(port, ()=>{
    console.log("Backend Nodejs is running on the port: "+ port);
})