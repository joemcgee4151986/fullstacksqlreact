const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Bowser12",
    port: 5432,
    host: "localhost",
    database: "peopledb"
});

module.exports = pool;
