import { jwtPayload } from "../middleware/authenticateToken";

declare global {
  namespace Express {
    interface Request {
      user?: jwtPayload;
    }
  }
}
