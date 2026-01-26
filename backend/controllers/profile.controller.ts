import { Request, Response } from "express";
import { pool } from "../database";

export async function profile(req: Request, res: Response) {
  const username = req.user?.username;

  if (!username) {
    return res.sendStatus(403);
  }

  const [rows]: any = await pool.query(
    "SELECT email, username FROM accounts WHERE username = ?",
    [username],
  );

  if (rows.length === 0) {
    return res.sendStatus(404);
  }

  return res.json(rows[0]);
}
