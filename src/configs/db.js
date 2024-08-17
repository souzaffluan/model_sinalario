require('dotenv').config();

console.log('Database Config:', {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
  });

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'souzal',
  database: 'sinalario',
define: {

    timestamps:true,
    underscored:true,
    underscoredAll: true,
}
};
