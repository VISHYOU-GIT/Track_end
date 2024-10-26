import busRoute from "./routes/bus.route.js";
import stopRoute from "./routes/stop.route.js";
import express from "express";
// const cors = require("cors");

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const app = express();
const port = 3000;

// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));                       
app.use(express.json());
app.use("/api/buses", busRoute);
app.use("/api/stops", stopRoute);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

