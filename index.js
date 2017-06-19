require("dotenv").config({path: './config/.env'})
// require("dotenv").config() //same directory
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
