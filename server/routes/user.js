import express from "express";
import { create, confirmed, login } from "../controllers/user";
import { validateCreateUser, validateLoginUser } from "../middleware/index";

const router = express.Router();

router.post("/signup", [validateCreateUser], create);
router.patch("/confirmation/:token", confirmed);
router.post("/signin", [validateLoginUser], login);

export default router;
