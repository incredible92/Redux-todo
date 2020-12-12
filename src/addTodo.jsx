import { useSelector } from "react-redux";
const AddTodo = () => {
  const AllTodo = useSelector((state) => state);
  console.log(AllTodo);
  return (
    <div className="addTodo">
      {AllTodo.map((todo) => (
        <div className="todo">
          <span>{todo.addTodo}</span>
          <img className="bin" src="/image/Vector.png" alt="bin" />
        </div>
      ))}
    </div>
  );
};
export default AddTodo;
