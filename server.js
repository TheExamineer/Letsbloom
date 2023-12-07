require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/routes")


// allow cors
app.use(cors());
app.use("*",cors());



//set parser 
app.use(require("body-parser").json());
app.use(bodyParser.urlencoded({
  limit: "150mb",
  extended: true
}));
app.use(bodyParser.json({
  type: "application/json"
}));

//intilizing server
const start = async () => {
    try {
      app.use("/api",routes);
  
      app.listen(process.env.PORT, ()=>{
          console.log(`Listening to => ${process.env.PORT}`);
      });
    } catch (e) {
      console.log("error::",e);
    }
  };
  start();