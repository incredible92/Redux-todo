const generateId = () => Math.random().toString(36).substr(2, 4);

  const defaultaddTodos = [
    { addTodo: "Buy some milks", id: generateId(), done: false },
    { addTodo: "Cook some food", id: generateId(), done: false },
  ];

const reducer = (state = defaultaddTodos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            delete: false,
          },
        ];
       
        break;
      case "DELETE_TODO":
        return state.map((todo) => {
          if (todo.id === action.payload.id) todo.delete = false;
  
          return todo;
        });
        break;
      case "EXECUTE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);
        break;
      default:
        return state;
        break;
    }
  };
  
  export default reducer;