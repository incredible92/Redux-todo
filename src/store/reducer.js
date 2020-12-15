const generateId = () => Math.random().toString(36).substr(2, 4);

  const defaultaddTodos = [
    { todo: "Buy some milks", id: generateId(), done: false },
    { todo: "Cook some food", id: generateId(), done: true },
  ];

const reducer = (state = defaultaddTodos, action) => {
  let result;
    switch (action.type) {
      case "ADD_TODO":
        result = [
          ...state,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            done: false,
          },
        ];
       
        break;
      case "DELETE_TODO":
        result = state.filter((todo) => todo.id !== action.payload.id);
        
        break;
      case "EXECUTE_TODO":
        result = state.map((todo) => {
        if (todo.id === action.payload.id) todo.done = !todo.done;
          return todo})
        break;
      default:
        result = state;
        break;
    }
    return result
  };
  
  export default reducer;