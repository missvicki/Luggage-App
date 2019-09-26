import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user";

dotEnv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(error => {
    console.log("Could not connect to the database", error);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("App is working");
});

app.use("/api/v1/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
