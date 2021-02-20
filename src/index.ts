import dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import { connectDB } from '../src/database/database'
// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});


export function run() {
  const app = express();
  connectDB();
  app.use(cors());
  app.use(express.json())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use(indexRoutes);

  app.get("/", function (_, res) {
    res.type("application/json").send("Welcome");
  });

  return app.listen(1515, function () {
    // Port is forwarded by docker to 80.
    console.log(`start server in http://localhost:1515`);
  });


}

if (process.env.NODE_ENV !== "testing") {
  run();
}