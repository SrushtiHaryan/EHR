const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// const uri = 'mongodb://localhost:27017/mydb';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connectDb = () => {
  mongoose.connect(
    "mongodb+srv://MASM:MASM@cluster0.zhey2b7.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  console.log("Connected to the database ");
};

connectDb();

app.post("/imagepatient", (req, res) => {
    let str = "hey";
  console.log("image is posted!");

  res.send({str:str});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
//   app.connect((err) => {
//     if (err) {
//       console.log(`Error connecting to MongoDB: ${err}`);
//     } else {
//       console.log(`Connected to MongoDB at ${uri}`);
//     }
//   });
});
