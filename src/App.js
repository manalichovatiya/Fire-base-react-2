import React, { useEffect, useState } from 'react';
import { getData } from './firebase/function';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Todos:</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;