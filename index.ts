import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import todoRoutes from "./routes/todo";

dotenv.config();

const app: Express = express();
const port = 8000;

app.use(bodyParser.json()); 

app.use(function (req: Request, res: Response, next: any) {
  console.log('You are logged in!');
  console.log(req.url, "Requested at:", Date.now());
  next();
});

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});