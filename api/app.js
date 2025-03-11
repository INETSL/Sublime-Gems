require("dotenv").config({ path: ".env" }); // Load environment variables
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const connectDB = require("./config/connectDB");
connectDB();

const routes = require("./routes");
const app = express();

const allowedOrigins = [
  "http://localhost:5173", // Frontend development URL
];

app.use(
  cors({
    origin: allowedOrigins, // Only allow specified origins
    credentials: true, // Enable credentials for cookies or auth headers
  })
);

const uploadsDir = path.join(__dirname, "uploads");
app.use(express.json());
app.use("/uploads", express.static(uploadsDir)); // Serve uploads as static

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "/client/dist/")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(message);
  res.status(status).json({
    error: {
      status,
      message,
    },
  });
});

module.exports = app;
