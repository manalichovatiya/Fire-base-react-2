import { useEffect } from 'react';
import { getData } from './firebase/function';

function App() {
  useEffect(() => {
    console.log("useEffect triggered");
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Todos:</h1>
    </div>
  );
}

export default App;
