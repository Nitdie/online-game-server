import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
import http from "http";
import setUpSocket from "./socket";

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8888;
const server = http.createServer(app);
setUpSocket(server);
server.listen(port, () => {
  console.log(`SERVER STARTED ON http://localhost:${port}`);
});
