
import addTodo from './addTodo';
import './App.css';


const FormField = () => {
  const handleSubmit = () => { }

  return (
    <form className="FormInput" onSubmit={handleSubmit}>
      <span>Add a new todo:</span>
      <input placeholder="Enter task and press Enter" type="text" />
    </form>
  )
}


function App() {
  return (
    <div className="App">
       <p className="heading">
        Todo
      </p>
      <div className="wrapper">
    <addTodo />
    <FormField />
    </div>
          </div>
  );
}

export default App;
