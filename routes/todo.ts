import express, { NextFunction, Request, Response, Router } from 'express';
import { GetAllTodo, PostTodo, PutTodo, DeleteTodo, } from "../controllers/todo"

const router = express.Router();

router.get("/", GetAllTodo);
router.post("/", PostTodo);
router.put("/:id", PutTodo);
router.delete("/:id", DeleteTodo);

export default router;