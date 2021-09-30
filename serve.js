const express = require("express");
const app = express();

const array = [
   
  {
    name: "BMW",
    color: " Black",
    speed: "200km/h"
  }
  ,
  {
    name: "Kia",
    color: "white",
    speed: "180 km/h"
  }
 ]


app.get("/cars", function (req, res) {
   
res.send(array)

 })

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
