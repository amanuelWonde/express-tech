import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-600 text-3xl">
        {" "}
        Hellow this is Express tech website
      </h1>
    </>
  );
}

export default App;