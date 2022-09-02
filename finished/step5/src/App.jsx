import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const makeRequest = () => {
    axios
      .get("http://localhost:3000/" + name)
      .then((res) => setGreeting(res.data));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={makeRequest}>Submit</button>
      </div>
      <p className="read-the-docs">{greeting}</p>
    </div>
  );
}

export default App;
