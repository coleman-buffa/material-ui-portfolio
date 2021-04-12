const mongoose = require("mongoose");
const Example = require("../models/example.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/EXAMPLE_DB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let exampleSeed = [
  //Add seed values that satisfy model requirements
  {

  }
];

Example.deleteMany({})
  .then(() => Example.collection.insertMany(exampleSeed))
  .then(data => {
    console.log(data.result.n + " record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });