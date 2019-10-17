import express from "express";

import { bookTrip, list } from "../controllers/book";
import { validateBookTrip } from "../middleware/index";
import authenticate, { authOptional } from "../middleware/authenticate";

const router = express.Router();

router.post("/", [authenticate, validateBookTrip], bookTrip);
// router.get("/", [authenticate, validateQuery], list);
export default router;
