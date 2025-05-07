import React, { useState } from "react";
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, done: true}]);
    setInput('');
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meine To-Do-Liste</h1>
      <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
      placeholder="Neue Aufgabe">
      </input>
      <button onClick={handleAddTodo}>Hinzufügen</button>

      <ul style={{ listStyle: 'none', padding: 0}}>
        {todos.map((todo, index) => (
          <li key={index}>
            <input 
            type="checkbox"
            checked="todo.done"
            onChange={() => toggleDone(index)}>
            </input>
            <span style={{
              textDecoration: todo.done ? 'line-through' : 'none', marginLeft: '8px'}}>
                {todo.text}
            </span>
            <button onClick={() => handleDelete(index)} style={{marginLeft: '10px' }}> löschen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;