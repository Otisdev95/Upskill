import {
    QueryListOfTodos,
    PostTodoByBody,
    PutTodoById,
    DeleteTodoById
} from "../services/todoservice";
import { Request, Response } from "express";

export const GetAllTodo = (req: Request, res: Response) => {
    const todoList = QueryListOfTodos();
    return res.status(200).json(todoList);
}

export const PostTodo = (req: Request, res: Response) => {
    const {title} = req.body;
    const todo = PostTodoByBody(title);
    return res.json(todo);
}

export const PutTodo = (req: Request, res: Response) => {
    const todoBody = parseInt(req.params.id);
    const {title} = req.body;
    const todo = PutTodoById({title, id:todoBody});
   // const {todoBody} = req.body;
   // const todo = PutTodoById(todoBody);
    return res.json(todo);
}

export const DeleteTodo = (req: Request, res: Response) => {
    const todoId = parseInt(req.params.id);
    const todo = DeleteTodoById(todoId);
    return res.json(todo);
}