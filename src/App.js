import './App.css';
import Counter from './Counter';
import { AppContext } from './Context/Counter';
import { useContext } from 'react';

function App() {

  const appState = useContext(AppContext)


  return (
    <div className="App">
      <h1>Context API</h1>
      <h2>Count is {appState.count}</h2>
      <Counter />
    </div>
  );
}

export default App;
