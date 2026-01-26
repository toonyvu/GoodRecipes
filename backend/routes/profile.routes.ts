import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { profile } from "../controllers/profile.controller";

const router = Router();

router.get("/", authenticateToken, profile);

export default router;
