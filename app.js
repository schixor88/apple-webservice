const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const dbService = require("./dbService");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//read db
// app.get("/", (req, res) => {
//   console.log("test");
//   res.json({
//     success: true,
//   });
// });

const serviceRoute = require("./src/routes/services.routes");

app.use("/services", serviceRoute);

//routers
// const serviceRoutes = app.listen(process.env.PORT, () =>
//   console.log("app is running")
// );

app.listen(PORT, () => {
  console.log("Listen on http://localhost:" + PORT);
});
