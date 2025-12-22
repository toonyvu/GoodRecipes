//REQUIRING THE PACKAGES NECESSARY TO CREATE THE EXPRESS SERVER.
const express = require("express");
require("dotenv").config();
const cors = require("cors");

import { Request, Response } from "express";
import RecipeRoutes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 8080;

console.log(process.env);
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!!!!");
});

app.use("/recipes", RecipeRoutes);
app.use("/", RecipeRoutes);

app.listen(PORT, (err: Error) => {
  if (!err) {
    console.log(`Server running on port ${PORT}`);
  } else {
    console.log("An error occured: ", err.message);
  }
});
