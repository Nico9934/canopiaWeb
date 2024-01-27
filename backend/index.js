import express from "express";
// import cors from "cors";
import budgetRoutes from "./src/routes/budgetRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", budgetRoutes);

const port = 4000;
app.listen(port, () => {
  console.log("Base de datos conectadas en el port " + port);
});
