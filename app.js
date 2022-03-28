const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
//const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//require
 const user = require("./routes/user");
const staff = require("./routes/staff");
 const kycform = require("./routes/kycform");
 const course = require("./routes/course");
 const category = require("./routes/category");
 const video = require("./routes/video");
 const notification = require("./routes/notification");
//const comment = require("./routes/comment");
// const comment1 = require("./routes/comment1");
// const pdffile = require("./routes/pdffile");


 


//use
//app.use("/", indexRouter);
 app.use("/api", user);
app.use("/api", staff);
 app.use("/api", kycform);
 app.use("/api", course);
 app.use("/api", category);
 app.use("/api", video);
 app.use("/api", notification);
// app.use("/api", pdffile);
// //app.use("/api", comment);
// app.use("/api", comment1);





app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

//console.log(process.env.DATABASE);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useNewUrlParser: true,                 
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCEFULLY");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Example app listening on port 5000");
});

//    http://localhost:5000/admin
