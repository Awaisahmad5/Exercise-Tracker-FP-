var express = require("express");
var app = express();
var model = require("./model");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors"); 

const port = 4000;

app.use(bodyparser.json());
app.use(cors()); //s12

// s1 post wlii  (create)
app.post("/post", (req, res) => {
  let bodyWeight = new model(req.body);
  bodyWeight.save().then((a) => {
    res.send(a);
  });
});



app.get("/read/:activity", async (req, res) => {
  const exr = req.params.activity;
//   res.send(exr);
  let kettleBell = await model.find({exrcise: exr});
   res.send(kettleBell);
});

app.delete("/del/:id", async (req, res) => {
  await model.findByIdAndDelete({ _id: req.params.id }); 
  res.json("deleted");
});


app.get("/edit/:id", async (req, res) => {
  let hoja = await model.findById(req.params.id); 
  res.json(hoja);
});


app.post("/update/:id", async (req, res) => {
  let upHoja = await model.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  ); 
  res.json(upHoja);
});

mongoose.connect("mongodb://127.0.0.1:27017/fitbase", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("database is connected");
});

app.listen(port, () => {
  console.log("port is connected");
});
