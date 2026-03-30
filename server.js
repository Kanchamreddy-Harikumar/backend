const express=require("express");
const cors = require("cors");
const axios = require("axios");

const db=require("./database/sampledb");

const app=express();
app.use(cors());
app.use(express.json());


async function serverStart() {
    try {
        const connection = await db;
        const [rows] = await connection.query('SELECT 1');

        console.log("DB Response:", rows);
        console.log("Successfully connected to the database.");

        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });

    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

serverStart(); 