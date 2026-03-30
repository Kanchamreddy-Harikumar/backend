const db = require("../database/sampledb");

const users = async (req, res) => {
    try {
        const getUsers = "SELECT id, name, email FROM user";
        const [result] = await db.query(getUsers);
        res.json(result);
    } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { users };