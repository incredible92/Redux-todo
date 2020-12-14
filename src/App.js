import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, executeTodo, deleteTodo } from './store/actions'

import './App.css'

const generateId = () => Math.random().toString(36).substring(2, 7);

function App() {

  const AllTodo = useSelector(state=>state)
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault();
    let value = e.target.todo.value;
    const todoId = generateId();
    dispatch(addTodo(value, todoId));
    e.target.todo.value = "";
  };
  

  return (
    <div className="App">
       <p className="heading">
        Todo
      </p>
      <div className="wrapper">
      <div className="addTodo">
      {AllTodo.map((todo) => (
        <div className="todo">
          <span onClick={()=>dispatch(executeTodo(todo.id))} className={todo.done==true? "done" : ""}>{todo.todo}</span>
          <img className="bin" src="/image/Vector.png" alt="bin"  />
        </div>
      ))}
    </div>

      </div>

      <div>
      <form className="FormInput" onSubmit={handleAddTodo}>
          <span className="add">Add a new todo:</span>
          <input name="todo" placeholder="Enter task and press Enter" type="text" />
      </form>
      </div>
      
    </div>
  )
}

export default App
