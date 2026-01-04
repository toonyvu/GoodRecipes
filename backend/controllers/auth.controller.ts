import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pool } from "../database";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "Missing credentials" });
  }

  const [rows]: any = await pool.query(
    "SELECT * FROM accounts WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    return res.status(404).json({ message: "No accounts found." });
  }

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({ message: "Invalid Password." });
  }

  return res.status(200).json({ message: "Logged in successfully!" });
}

export async function signup(req: Request, res: Response) {
  const { email, username, password } = req.body;

  if (!email || !password || !username) {
    res.status(404).json({ message: "Missing credentials" });
  }

  try {
    const [existing]: any = await pool.query(
      "SELECT id FROM accounts WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      res.status(404).json({ message: "Account alrerady in use!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO accounts(email, username, password) VALUES (?, ?, ?)",
      [email, username, hashedPassword]
    );

    return res.status(200).json({ message: "Account created successfully" });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
}
