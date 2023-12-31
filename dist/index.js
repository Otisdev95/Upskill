"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_1 = __importDefault(require("./routes/todo"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000;
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    console.log('You are LOGGED IN');
    next();
});
app.use(function (req, res, next) {
    console.log(req.url, "Requested at:", Date.now());
    next();
});
app.use("/todo", todo_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
