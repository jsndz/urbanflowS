import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./config/serverConfig.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api");

app.listen(PORT, async () => {
  console.log(`server started at port ${PORT}`);
});
