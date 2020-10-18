const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

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
const doctorRoute = require("./src/routes/doctors.routes");
const appointmentRoute = require("./src/routes/appointments.routes");

app.use("/services", serviceRoute);
app.use("/doctors", doctorRoute);
app.use("/appointments", appointmentRoute);

app.listen(PORT, () => {
  console.log("Listen on http://localhost:" + PORT);
});
