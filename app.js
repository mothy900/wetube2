import bodyparser from "body-parser";
import cookirparser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();
/*
const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);*/
/*
const handleHoem = (req, res) => res.send("Hello from My ass");

const handleProfile = (req, res) => res.send("You are on my Profile");
*/
///////////////////////////middleware 방법
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); //directory에서 file을 보내주는 middleWare function
app.use("/static", express.static("static"));
app.use(cookirparser());
app.use(bodyparser.json()); //bodyParser.urlencoded 정보를 받는 방법
app.use(bodyparser.urlencoded({ extended: true })); //bodyParser.urlencoded 정보를 받는 방법
app.use(morgan("dev")); //login 흔적을 찾음 middle ware 종류 중 하나
app.use(localsMiddleware);
//app.use(betweenHome); //middle ware
//////////////////route
/*
app.get("/", handleHoem); //request

app.get("/profile", handleProfile);*/
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
//app.use("/user", userRouter);
/*
app.listen(PORT, handleListening);*/

export default app;
