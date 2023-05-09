import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [datas, setDatas] = useState(data);
  return (
    <div>
      <div className="black-nav">
        <h3>Daegun High School Subject Introduction</h3>
      </div>
    </div>
  );
}

export default App;
