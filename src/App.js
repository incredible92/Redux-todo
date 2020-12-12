import FormField from './FormField.jsx'
import AddTodo from './AddTodo.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
      <p className="heading">
        Todo
      </p>
      <div className="wrapper">
        <AddTodo />
        <FormField />
      </div>
    </div>
  );
}

export default App;
