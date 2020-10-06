const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

var isRunningOnServer = false;

var serverDbConfig = {
  localHost: "localhost",
  port: "3306",
  user: "appleden_remote",
  password: "paradisevalley2013",
  database: "appleden_clinic",
};

var remoteDbConfig = {
  localHost: "167.86.66.101",
  port: "3306",
  user: "appleden_remote",
  password: "paradisevalley2013",
  database: "appleden_clinic",
};

var db = isRunningOnServer ? serverDbConfig : remoteDbConfig;

var dbConnect = mysql.createConnection({
  host: db.localHost,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  insecureAuth: true,
});

dbConnect.connect(function (err) {
  if (err) throw err;
  console.log("MYSQL DB Connected!");
});

module.exports = dbConnect;
