export const addTodo = (todo, id) => ({
    type: "ADD_TODO",
    payload: {
      id,
      todo,
    },
  });
  
  export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: {
      id,
    },
  });
  
  export const executeTodo = (id) => ({
    type: "EXECUTE_TODO",
    payload: {
      id,
    },
  });
  
 