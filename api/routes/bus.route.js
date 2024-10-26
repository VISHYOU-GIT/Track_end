import express from "express";
import { getBuses, addBus} from "../controllers/bus.controller.js";

const router = express.Router();


router.get("/",getBuses)

router.post("/",addBus)

export default router;
