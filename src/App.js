import React, { useEffect, useState } from 'react';
import { getData } from './firebase/function';
import Login from './Login';
import Logout from './Logout';

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
      <Login />
      <h1>Todos:</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Logout />
    </div>
  );
}

export default App;