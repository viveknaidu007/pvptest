import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import customerRoutes from "./routes/customerRoutes";
import saleRoutes from "./routes/saleRoutes";
import purchaseRoutes from "./routes/purchaseRoutes"
import dashBoardRoutes from "./routes/dashBoardRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/customer", customerRoutes); 
app.use("/sale",saleRoutes);
app.use("/purchase",purchaseRoutes);
app.use("/dashboard",dashBoardRoutes)


/* SERVER */
const uri = process.env.MONGO_URL;
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
  console.log(process.env.MONGO_URL); // To check if MONGO_URL is loaded

  mongoose.connect(uri);
  console.log("DB started!");
});





app.get("/hello",(req,res)=>{
  res.send("hello macha")
})