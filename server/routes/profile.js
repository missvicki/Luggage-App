import express from "express";
import { list, findAUser } from "../controllers/profile";
import authenticate, { authOptional } from "../middleware/authenticate";

const router = express.Router();

router.get("/", [authOptional], list);
router.get("/:email", [authenticate], findAUser);

export default router;
