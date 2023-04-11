import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "SmartPhone Recommendation",
    "Web programming",
    "Javascript",
  ]);
  let [like, setLike] = useState(0);

  return (
    <div>
      <div className="black-nav">
        <h3>Blog</h3>
      </div>

      <button
        onClick={() => {
          setTitle(["공동교육과정", "Web programming", "Javascript"]);
        }}
      >
        Button
      </button>

      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Good!👍
          </span>
          {like}
        </h4>
        <p>2023/4/11</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2023/4/11</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2023/4/11</p>
      </div>
    </div>
  );
}

export default App;
