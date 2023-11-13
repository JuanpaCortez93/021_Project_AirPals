import { createPool } from "mysql2/promise";
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from '../config.js'

const connection = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
});

export default connection;