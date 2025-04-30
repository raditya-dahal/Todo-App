import { useState } from 'react';
import TodoTable from './TodoTable';
import './App.css'
import ReactiveButton from 'reactive-button'; // <-- Add this import

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '' }); // Clear todo
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index)=> index !== row));
  }

  return (
    <>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
      <ReactiveButton
        buttonState="idle"
        onClick={addTodo}
        color="primary"
        idleText="Add"
      />
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App