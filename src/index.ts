import dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

const port = process.env.APP_PORT || 4848;

export function run() {
  const app = express();
  
  app.use(cors());
  app.use(express.json())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //app.use(indexRoutes);

  app.get("/", function (_, res) {
    res.type("application/json").send("Welcome to my api");
  });

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  });
}

if (process.env.NODE_ENV !== "testing") {
  run();
}