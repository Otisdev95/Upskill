import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 8000;

var bodyParser = require('body_parser');

var todos = [
  {id:1, title:'Demo presentation'},
  {id:2, title:'Deal closure'},
  {id:3, title:'Requirement gathering'},
  {id:4, title:'Training sessions'},
  {id:5, title:'Installation '},
  {id:6, title:'Dry run'},
  {id:7, title:'Go Live!'}
];
var count = todos.length;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Here are my To Do list Items');
});

app.post('./', (req: Request, res: Response) => {
  var newTodo = JSON.parse(req.body);
  count = count +1;
  newTodo.id = count;
  todos.push(newTodo);
  res.status(201).json();
})

// app.put('./:id', (req: Request, res:Response) => {
//   var id = req.params.id;
//   if (todos[id]){
//     var updatedTodo = JSON.parse(req.body);
//     todos[id] = updatedTodo;
//     res.status(204).send();
//   } else {
//     res.status(404).send('Error! Task is not found');
//   }
// });

app.delete('./:id', (req: Request, res:Response) => {
  var id = parseInt(req.params.id);
  if (todos.filter(todo => todo.id == id).length !== 0){
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).send();
  } else {
    res.status(404).send('Error');
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// const port = 8000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running right now');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
