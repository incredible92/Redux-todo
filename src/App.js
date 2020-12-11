import FormField from './FormField.jsx'
import addTodo from './addTodo';
import './App.css';





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
