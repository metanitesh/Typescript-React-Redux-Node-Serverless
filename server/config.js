const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres', // default postgres
    host:'localhost',
    database:'courses-app-db', // `my_todos_db`
    port:'5432' //default port
});

module.exports = pool;
