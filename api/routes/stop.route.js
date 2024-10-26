import express from "express";
import { getStops, addStop} from "../controllers/stop.controller.js";

const router = express.Router();


router.get("/",getStops)

router.post("/",addStop)

export default router;
