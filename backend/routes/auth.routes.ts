import { Router } from "express";
import { login, signup, refresh, logout } from "../controllers/auth.controller";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

router.post("/login", login);
router.post("/register", signup);
router.post("/refresh", refresh);
router.post("/logout", logout);

router.get("/me", authenticateToken, (req, res) => {
  res.json({
    user: req.user,
  });
});

export default router;
