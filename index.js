const express = require("express");
const bollywood = require("./routes/Bollywood");
const hollywood = require("./routes/Hollywood");
const fitness = require("./routes/Fitness");
const food = require("./routes/Food");
const technology = require("./routes/Technology");

const app = express();

const cors = require("cors");

app.use(cors());
app.use("/", bollywood);
app.use("/", hollywood);
app.use("/", fitness);
app.use("/", food);
app.use("/", technology);


app.listen(process.env.PORT || 4500, () => {
  console.log("App is running..");
});
