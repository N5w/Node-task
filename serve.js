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
  const { name, speed } = req.query;
      let filterdArray = array;
    if (name) {
        filterdArray = arr.filter(user => user.name.includes(name))
    
    }
    if (speed) {
        filterdArray = arr.filter(user => user.speed = speed)
    }

    if (filterdArray.length === 0) {
        res.status(404).json('not found')
    } else if (filterdArray.length != 0) {
      
        res.status(200).send(filterdArray)
    }
  
   
res.send().status(200).json(filterdArray)

 })

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
