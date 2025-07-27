import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import billRoutes from "./routes/bill.routes";
import recordRoutes from "./routes/record.routes";
import userRoutes from "./routes/user.routes";


dotenv.config();
export const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/bills", billRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/users", userRoutes);
