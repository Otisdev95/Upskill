"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = exports.PutTodo = exports.PostTodo = exports.GetAllTodo = void 0;
const todoservice_1 = require("../services/todoservice");
const GetAllTodo = (req, res) => {
    const todoList = (0, todoservice_1.QueryListOfTodos)();
    return res.status(200).json(todoList);
};
exports.GetAllTodo = GetAllTodo;
const PostTodo = (req, res) => {
    const { todoBody } = req.body;
    const todo = (0, todoservice_1.PostTodoByBody)(todoBody);
    return res.json(todo);
};
exports.PostTodo = PostTodo;
const PutTodo = (req, res) => {
    const todoId = req.params.id;
    //const todo = PutTodoById(todoId);
    //return res.json(todo);
};
exports.PutTodo = PutTodo;
const DeleteTodo = (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = (0, todoservice_1.DeleteTodoById)(todoId);
    return res.json(todo);
};
exports.DeleteTodo = DeleteTodo;
