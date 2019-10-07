import express from "express";

import { validateTrips } from "../middleware/index";
import { create } from "../controllers/trips";
import authenticate, { authOptional } from "../middleware/authenticate";

const router = express.Router();

router.post("/", [authenticate, validateTrips], create);
export default router;
