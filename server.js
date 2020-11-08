const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use('/api',require("./routes/api-routes"))
app.use('/',require("./routes/html-routes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});