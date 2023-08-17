// 引入mysql
import mysql from "mysql";
// 建立一个连接池
const db = mysql.createPool({
  host: "182.43.71.232",
  user: "test_db",
  password: "s3YKRXxmZFTB3ESS",
  database: "test_db", //指定要操作哪个数据库
});

// db.query("select 1", (err, results) => {
//   if (err) return console.log(err);
//   console.log(results);
// });

export = db;
