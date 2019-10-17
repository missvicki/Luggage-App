import express from "express";

import { create } from "../controllers/luggage";
import { validateLuggage } from "../middleware/index";
import authenticate, { authOptional } from "../middleware/authenticate";

const router = express.Router();

router.post("/:id", [authenticate, validateLuggage], create);
export default router;
