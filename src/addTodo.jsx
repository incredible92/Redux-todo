const addTodo = () => {
  const generateId = () => Math.random().toString(36).substr(2, 4);

  const defaultaddTodos = [
    { addTodo: "Buy some milks", id: generateId(), done: false },
    { addTodo: "Cook some food", id: generateId(), done: false },
  ];
  return (
    <div className="addTodo">
      {defaultaddTodos.map((addTodo) => (
        <div className="todo">
          <span>{addTodo.addTodo}</span>
          <img src="\image\Vector.png" alt="bin" />
        </div>
      ))}
    </div>
  );
};
export default addTodo;
