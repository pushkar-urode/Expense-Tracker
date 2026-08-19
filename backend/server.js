import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import expenseRoutes from "./src/routes/expenseRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
 
app.use("/", authRoutes);

app.use("/api/expenses", expenseRoutes);

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "api is working",
  });
});

app.listen(5000, () => {
  console.log("Server is Running on Port: 5000");
});
