import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRouter from "./Routes/Products/index.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  console.error(err);
  if (!err) {
    res.status(500).send("Something broke!");
  } else {
    res.status(err.status).send({ error: err.message });
  }
});

mongoose
  .connect(process.env.DB_SERVER)
  .then(() =>
    app.listen(process.env.PORT, () => console.log("SERVER IS RUNNING..."))
  );
