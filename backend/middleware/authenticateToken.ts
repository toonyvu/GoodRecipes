import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface jwtPayload {
  username: string;
  iat: number;
  exp: number;
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split("")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as jwtPayload;

    req.user = decoded;
    next();
  } catch (err: any) {
    return res.status(403);
  }
}
