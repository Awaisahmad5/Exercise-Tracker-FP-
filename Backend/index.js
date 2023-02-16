var express = require("express");
var app = express();
var model = require("./model");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors"); //s11 yaha se hm fe be attach kren ge

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

//s2 (read) get wla
// app.get("/read", async (req, res) => {
//    // let kettleBell = await model.find({}); //fin k andr flowr {} se sara data wha show hojata h
//    const exrcise = "Running"
//    let kettleBell = await model.find({});
//     res.send(kettleBell);
// });

app.get("/read/:activity", async (req, res) => {
  const exr = req.params.activity;
//   res.send(exr);
  let kettleBell = await model.find({exrcise: exr});
   res.send(kettleBell);
});

app.delete("/del/:id", async (req, res) => {
  await model.findByIdAndDelete({ _id: req.params.id }); // s3 uper line me colon k agy jo name diay hy jesy idr "id" hy to wo or params. k bad wla name jo k idr "id" hi hy same hony chye. jo _id underscore wli ye db me jo id hoti hy wo hy
  res.json("deleted");
});

// s2 ye edit wla step hy mtlb aik 1 id se data find kr rhy hian
app.get("/edit/:id", async (req, res) => {
  let hoja = await model.findById(req.params.id); //ye id variable hy. hm ne return krwany k lia hoja me save krwa lia
  res.json(hoja);
});

// s3 update k liay hum post use kren ge
app.post("/update/:id", async (req, res) => {
  let upHoja = await model.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  ); //$set wla ye replace krdy ga pichly wla {} wala data ko
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
