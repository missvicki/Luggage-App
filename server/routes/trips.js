import express from "express";

import { validateTrips } from "../middleware/index";
import { create, list, findOne } from "../controllers/trips";
import authenticate, { authOptional } from "../middleware/authenticate";

const router = express.Router();

router.post("/", [authenticate, validateTrips], create);
router.get("/", [authOptional], list);
router.get("/:id", [authOptional], findOne);
export default router;
