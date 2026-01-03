import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pool } from "../database";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(req.body);

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
}
