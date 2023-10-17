import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(process.env.DB_SERVER)
  .then(() =>
    app.listen(process.env.PORT, () => console.log("SERVER IS RUNNING..."))
  );
