const cities = require("all-the-cities");
const express = require("express");
const app = new express();
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/getCities", (req, res) => {
  console.log("hi");
  let citiesArray = cities.map((city) => {
    return {
      name: city.name,
      cor: city.loc.coordinates,
    };
  });
  res.send(citiesArray);
});

app.listen(PORT, () => {
  console.log("hello");
});
