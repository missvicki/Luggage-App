import express from "express";
import {
  list,
  findAUser,
  updateAUser,
  deleteAUser
} from "../controllers/profile";
import authenticate, { authOptional } from "../middleware/authenticate";
import { validateUpdateUser } from "../middleware/index";

const router = express.Router();

router.get("/", [authenticate], list);
router.get("/:email", [authenticate], findAUser);
router.delete("/:email", [authenticate], deleteAUser);
router.patch("/:email", [authenticate, validateUpdateUser], updateAUser);

export default router;
