import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "SmartPhone Recommendation",
    "Web programming",
    "Javascript",
  ]);
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);

  return (
    <div>
      <div className="black-nav">
        <h3>Blog</h3>
      </div>

      <button
        onClick={() => {
          setTitle(["공동교육과정", "Web Developing", "React"]);
        }}
      >
        Button
      </button>

      <button
        onClick={() => {
          setTitle([
            "SmartPhone Recommendation",
            "Web programming",
            "Javascript",
          ]);
        }}
      >
        Button
      </button>

      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike1(like1 + 1);
            }}
          >
            Good!👍
          </span>
          {like1}
        </h4>
        <p>2023/4/11</p>
      </div>

      <div className="list">
        <h4>
          {title[1]}
          <span
            onClick={() => {
              setLike2(like2 + 1);
            }}
          >
            Good!👍
          </span>
          {like2}
        </h4>
        <p>2023/4/11</p>
      </div>

      <div className="list">
        <h4>
          {title[2]}
          <span
            onClick={() => {
              setLike3(like3 + 1);
            }}
          >
            Good!👍
          </span>
          {like3}
        </h4>
        <p>2023/4/11</p>
      </div>
    </div>
  );
}

export default App;
