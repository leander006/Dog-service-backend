const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const OfferRoute = require("./routes/offer");
const enrollmentRoute = require("./routes/enrollment");
const { MONGO_URI, PORT } = require("./config/serverConfig");

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI)
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.use("/api/offer", OfferRoute);

app.use("/api/enroll", enrollmentRoute);

app.get("/", (req, res) => {
  res.send("Hello from project website");
});

app.listen(PORT || 4003, (req, res) => {
  console.log("App is runnig");
});
