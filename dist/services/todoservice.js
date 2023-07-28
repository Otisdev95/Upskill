"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoById = exports.PostTodoByBody = exports.QueryListOfTodos = void 0;
let TODOS = [
    {
        id: 1,
        title: "Demo Presentation"
    },
    {
        id: 2,
        title: "Deal Closure"
    },
    {
        id: 3,
        title: "Requirement Gathering"
    },
    {
        id: 4,
        title: "Installation"
    },
    {
        id: 5,
        title: "Training Sessions"
    },
    {
        id: 6,
        title: "Dry Run"
    },
    {
        id: 7,
        title: "Go Live"
    }
];
const QueryListOfTodos = () => {
    return TODOS;
};
exports.QueryListOfTodos = QueryListOfTodos;
let count = TODOS.length;
const PostTodoByBody = (todo) => {
    count++;
    TODOS.push({ id: count, title: todo });
    return TODOS;
};
exports.PostTodoByBody = PostTodoByBody;
// export const PutTodoById = (id) => {
//    if (TODOS){
//        var updatedTodo = JSON.parse(req.body);
//        TODOS = updatedTodo;
//        return TODOS;
//    } else {
//        throw new Error("Error! task is not found");
//   }
// };
const DeleteTodoById = (id) => {
    if (TODOS.filter(todo => todo.id == id).length !== 0) {
        TODOS = TODOS.filter(todo => todo.id !== id);
        return TODOS;
    }
    else {
        throw new Error("todo with id not found");
    }
};
exports.DeleteTodoById = DeleteTodoById;
