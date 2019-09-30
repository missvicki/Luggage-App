import express from "express";
import { create, confirmed } from "../controllers/user";
import { validateCreateUser } from "../middleware/index";

const router = express.Router();

router.post("/signup", [validateCreateUser], create);
router.put("/confirmation/:token", confirmed);

export default router;
