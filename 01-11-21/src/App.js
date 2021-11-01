import logo from './logo.svg';
import './App.css';
import { usesState, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

const handleClick = () => {
  console.log("User click");
  setCount(count + 1);
};


  return (
    <div className="App">
      <header className="App-header">
        <p>Text</p>
        <p>Hodnota počtu: {count}</p>
        <div>
          <button onClick={handleClick}>Přičti</button>
        </div>
      </header>
    </div>
  );
}

export default App;
