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
      {modal ? <Modal modal={modal} setModal={setModal}></Modal> : ""}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-title">web programming</div>
        <div className="modal-date">
          2023-05-09
          <span>👍</span>
          <span>5</span>
        </div>
        <div className="modal-contents">web programming is funny subject</div>

        <button
          className="modal-button"
          onClick={() => {
            props.modal ? props.setModal(false) : props.setModal(true);
          }}
        >
          check
        </button>
      </div>
    </div>
  );
}

export default App;
