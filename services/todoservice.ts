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

export const QueryListOfTodos = () => {
    return TODOS;
};
let count = TODOS.length;

export const PostTodoByBody = (title: string) => {
    count++;
    let data = {
        id:count,
        title:title
    }
    TODOS.push(data);
    return TODOS;
};

// Assuming TODOS is an array of todo items with the following structure:
interface Todo {
    id: number;
    title: string;
}
  
  export const PutTodoById = ({ title, id }: { title: string; id: number }): Todo[] => {
    const updatedTodos = TODOS.map(todo => {
      if (todo.id === id) {
        // If the todo ID matches the given ID, update the title.
        return { ...todo, title: title };
      }
      return todo;
    });
  
    console.log(updatedTodos); // Log the updated todos for debugging purposes.
  
    // Update the TODOS array with the new data.
    TODOS.splice(0, TODOS.length, ...updatedTodos);
  
    return TODOS; // Return the updated TODOS array.
  };
  

// export const PutTodoById = ({title:string, id:number}) => {
//     const data = TODOS.filter(todo => {
//         if (todo.id === id) {
//             return {...todo, title:title}
//         }
//         return todo;
//     });
// console.log(data);
// TODOS = data;
//     return TODOS;
// }

// export const PutTodoById = (id: number) => {
//     if (TODOS.filter(todo => todo.id == id).length !== 0){
//         TODOS.push();
//         return TODOS;
//     } else {
//         throw new Error("Error! Task is not found");
//     }
// }

// export const PutTodoById = (todo:string) => {
//    if (TODOS[id]){
//        var updatedTodo = JSON.parse(req.body);
//        TODOS[id] = updatedTodo;
//        return TODOS;
//    } else {
//        throw new Error("Error! task is not found");
//   }
// };

export const DeleteTodoById = (id:number) => {
    if (TODOS.filter(todo => todo.id == id).length !== 0){
        TODOS = TODOS.filter(todo => todo.id !== id);
        return TODOS;
      } else {
        throw new Error("todo with id not found");
      }
};