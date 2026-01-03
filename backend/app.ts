import { Recipe } from "./../frontend/src/Types/Recipe";
//REQUIRING THE PACKAGES NECESSARY TO CREATE THE EXPRESS SERVER.
const express = require("express");
require("dotenv").config();
const cors = require("cors");

import RecipeRoutes from "./routes/recipe.routes";
import AuthRoutes from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT || 8080;

console.log(process.env);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/recipes", RecipeRoutes);
app.use("/auth", AuthRoutes);

app.listen(PORT, (err: Error) => {
  if (!err) {
    console.log(`Server running on port ${PORT}`);
  } else {
    console.log("An error occured: ", err.message);
  }
});
