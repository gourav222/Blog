const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");
app.use("/demo.api.admin.circlesnow.com/ProductRESTService.svc",blogRoutes);
module.exports = app;