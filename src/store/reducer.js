const generateId = () => Math.random().toString(36).substr(2, 4);

  const defaultaddTodos = [
    { addTodo: "Buy some milks", id: generateId(), done: false },
    { addTodo: "Cook some food", id: generateId(), done: true },
  ];

const reducer = (state = defaultaddTodos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            done: false,
          },
        ];
       
        break;
      case "DELETE_TODO":
          return state.filter((todo) => todo.id !== action.payload.id);
        
        break;
      case "EXECUTE_TODO":
        return state.map((todo) => {
        if (todo.id === action.payload.id) todo.done = true;
          return todo})
        break;
        case "UNEXECUTE_TODO":
          return state.map((todo) => {
          if (todo.id === action.payload.id) todo.done = false;
              return todo})
       break;
      default:
        return state;
        break;
    }
  };
  
  export default reducer;