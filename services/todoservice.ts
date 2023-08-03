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

export const DeleteTodoById = (id:number) => {
  if (TODOS.filter(todo => todo.id == id).length !== 0){
      TODOS = TODOS.filter(todo => todo.id !== id);
      return TODOS;
    } else {
      throw new Error("todo with id not found");
    }
};