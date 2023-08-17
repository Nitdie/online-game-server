import db from "../database";

export async function register(req, res) {
  const account = req.body.account;
  const pass = req.body.password;
  // const sql: string = `SELECT * FROM user WHERE id = ${account}`
  const sql: string = `INSERT INTO \`users\` (\`id\`,\`pass\`) VALUES ('${account}','${pass}')`;
  db.query(sql, (error, result) => {
    // 插入错误
    if (error) {
      res.status(400).send({
        error: error,
      });
    } else {
      console.log("REGISTERED");
      res.send();
    }
  });
}

export async function login(req, res) {
  const username = req.body.username;
  const pass = req.body.password;
  console.log(username,pass)
  const sql: string = `SELECT * FROM users WHERE id = '${username}' AND pass = '${pass}'`;
  db.query(sql, (error, result) => {
    //登陆失败
    if (result.length == 0) res.status(400).send({ message: "Login Failed" });
    else {
      res.send({
        message: "Login Success",
      });
    }
  });
}

