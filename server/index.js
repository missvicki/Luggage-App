import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user";
import profileRoutes from "./routes/profile";
import tripRoutes from "./routes/trips";
import bookRoutes from "./routes/book";
import luggageRoutes from "./routes/luggage";

dotEnv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose.Promise = global.Promise;

export const mongodbURL = () => {
  if (process.env.NODE_ENV === "test") {
    return process.env.TEST_MONGODB_URL;
  }
  return process.env.DATABASE_URL;
};

mongoose
  .connect(mongodbURL(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
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

export const baseUrl = "/api/v1";

app.use(`${baseUrl}/auth`, userRoutes);
app.use(`${baseUrl}/users`, profileRoutes);
app.use(`${baseUrl}/trips`, tripRoutes);
app.use(`${baseUrl}/book`, bookRoutes);
app.use(`${baseUrl}/luggage`, luggageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
