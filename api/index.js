const express = require("express");
const cors = require("cors");
const  bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const educationRoutes = require("./routes/education");
const experienceRoutes = require("./routes/experience");
const languageRoutes = require("./routes/language");
const personRoutes = require("./routes/person");
const skillRoutes = require("./routes/skill");
const summaryRoutes = require("./routes/summary");
const userRoutes = require("./routes/user");

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());



const PORT = 5000;
mongoose.connect(process.env.CONNECTION_URL)
  .then(() => console.log("DB connection Successful!"))
  .catch((err) => {
      console.log(err);
  })

app.use(express.json());
app.use("/education", educationRoutes);
app.use("/experience", experienceRoutes);
app.use("/language", languageRoutes);
app.use("/person", personRoutes);
app.use("/skill", skillRoutes);
app.use("/summary", summaryRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log("Backend server is running!");
})