import express from "express";
const app = express();

const PORT = 4000;
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHoem = (req, res) => res.send("Hello form Home");

const handleProfile = (req, res) => res.send("You are on my Profile");

app.get("/", handleHoem); //request

app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
