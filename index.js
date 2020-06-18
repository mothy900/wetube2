import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookirparser from "cookie-parser";
import bodyparser from "body-parser";
const app = express();

const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHoem = (req, res, next) => res.send("Hello from My ass");

const handleProfile = (req, res, next) => res.send("You are on my Profile");

app.use(cookirparser());
app.use(bodyparser.json()); //bodyParser.urlencoded 정보를 받는 방법
app.use(bodyparser.urlencoded({ extended: true })); //bodyParser.urlencoded 정보를 받는 방법
app.use(helmet());
app.use(morgan("dev")); //login 흔적을 찾음 middle ware 종류 중 하나
//app.use(betweenHome); //middle ware
//////////////////route
app.get("/", handleHoem); //request

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
