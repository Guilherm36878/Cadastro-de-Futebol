import { Pool } from "pg";

export const database = new Pool({
  user: "postgres",
  password: "#Guili01",
  host: "localhost",
  port: 5432,
  database: "futebol",
});