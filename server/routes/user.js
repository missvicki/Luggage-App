import express from "express";
import validate from "express-validation";
import { create, confirmed } from "../controllers/user";
import createUser from "../validations/user";

const router = express.Router();

router.post("/signup", validate(createUser), create);
router.put("/confirmation/:token", confirmed);

export default router;
