import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function createAccount() {
  const [result] = await pool.query(
    "INSERT INTO accounts(email, username, password) VALUES (?, ?, ?)",
    ["tony422005@gmail.com", "boisterously", "vutuannghia422005"]
  );
  console.log(result);
}

async function getAccount(id: number) {
  const [rows] = await pool.query(`SELECT * FROM accounts WHERE id = ?`, [id]);

  console.log(rows);
}
