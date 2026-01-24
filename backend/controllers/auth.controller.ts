import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pool } from "../database";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "Missing credentials" });
  }

  const [rows]: any = await pool.query(
    "SELECT * FROM accounts WHERE email = ?",
    [email],
  );

  if (rows.length === 0) {
    return res
      .status(404)
      .json({ message: `No accounts with email: ${email} found.` });
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({ message: "Invalid Password." });
  } else {
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "5m" },
    );

    const refreshToken = jwt.sign(
      { username: user.username },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: "30d" },
    );

    await pool.query(
      "INSERT INTO refresh_tokens(user_id, token, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 30 DAY))",
      [user.id, refreshToken],
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Logged in successfully!",
      accessToken,
      user: {
        id: user.id,
        username: user.name,
        email: user.email,
      },
    });
  }
}

export async function signup(req: Request, res: Response) {
  const { email, username, password } = req.body;

  if (!email || !password || !username) {
    res.status(404).json({ message: "Missing credentials" });
  }

  try {
    const [existing]: any = await pool.query(
      "SELECT id FROM accounts WHERE email = ?",
      [email],
    );

    if (existing.length > 0) {
      res.status(404).json({ message: "Account alrerady in use!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO accounts(email, username, password) VALUES (?, ?, ?)",
      [email, username, hashedPassword],
    );

    return res.status(200).json({ message: "Account created successfully" });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
}

export async function refresh(req: Request, res: Response) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(401);

  const [rows]: any = await pool.query(
    "SELECT * FROM refresh_tokens WHERE token=?",
    [refreshToken],
  );

  if (rows.length === 0) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!,
    ) as any;

    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "5m" },
    );

    res.json({ accessToken });
  } catch (err: any) {}
}

export async function logout(req: Request, res: Response) {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await pool.query("DELETE FROM refresh_tokens WHERE token = ?", [
      refreshToken,
    ]);
  }

  res.clearCookie("refreshToken");
  return res.sendStatus(204);
}
