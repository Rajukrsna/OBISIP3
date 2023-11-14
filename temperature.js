import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
       res.render("temperature.ejs") //Step 1 - Make the get route work and render the index.ejs file.
});

app.get("/submit1",(req,res)=>{
 
  const fahrenheitTemperature = req.body.fname;
  // Convert the temperature to Celsius and send it to the EJS template
  const celsiusTemperature = (parseFloat(fahrenheitTemperature) - 32) / 1.8;
  let x = Math.round(celsiusTemperature);
  res.render("farienheittocelcius.ejs", { temp: x });
  
});


app.post("/submit1", (req, res) => {
  // Handle the form submission logic here
  const fahrenheitTemperature = req.body.fname;
  // Convert the temperature to Celsius and send it to the EJS template
  const celsiusTemperature = (parseFloat(fahrenheitTemperature) - 32) / 1.8;
  let x = Math.round(celsiusTemperature);
  res.render("farienheittocelcius.ejs", { temp: x });
});

app.get("/submit2",(req,res)=>{
 
  const fahrenheitTemperature = req.body.fname;
  // Convert the temperature to Celsius and send it to the EJS template
  const celsiusTemperature = (parseFloat(fahrenheitTemperature) - 32) / 1.8;
  let x = Math.round(celsiusTemperature);
  res.render("farienheittocelcius.ejs", { temp: x });
  
});


app.post("/submit2", (req, res) => {
  // Handle the form submission logic here
  const fahrenheitTemperature = req.body.fname;
  // Convert the temperature to Celsius and send it to the EJS template
  const celsiusTemperature = (parseFloat(fahrenheitTemperature) - 32) / 1.8;
  let x = Math.round(celsiusTemperature);
  res.render("farienheittocelcius.ejs", { temp: x });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
