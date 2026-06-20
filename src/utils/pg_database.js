import { SQL } from "bun"

export const db = new SQL({
    adapter: "postgres",
    hostname: process.env.PG_HOST,
    port: Number(process.env.PG_PORT || 5432),
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_NAME,
    ssl: true,
    tls: true,
    max: 10,
})
