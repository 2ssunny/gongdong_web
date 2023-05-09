import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [datas, setDatas] = useState(data);
  let [modal, setModal] = useState(false);
  return (
    <div>
      <div className="black-nav">
        <h3>Daegun High School Subject Introduction</h3>
      </div>
      {datas.map(function (row, i) {
        return (
          <div className="list">
            <div
              className="title"
              onClick={() => {
                modal ? setModal(false) : setModal(true);
              }}
            >
              {row.title}
            </div>
            <div className="contents">{row.date}</div>
          </div>
        );
      })}
      {modal ? <Modal></Modal> : ""}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <div className="modal-body">
        <div>web programming</div>
        <div>
          2023-05-09
          <span>👍</span>
          <span>5</span>
        </div>
        <div>web programming is funny subject</div>
      </div>
    </div>
  );
}

export default App;
