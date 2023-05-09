import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [datas, setDatas] = useState(data);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);

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
                setIndex(i);
              }}
            >
              {row.title}
            </div>
            <div className="contents">{row.date}</div>
          </div>
        );
      })}
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          data={datas}
          setDatas={setDatas}
          index={index}
        ></Modal>
      ) : (
        ""
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-title">{props.data[props.index].title}</div>
        <div className="modal-date">
          {props.data[props.index].date}
          <span>👍</span>
          <span>{props.data[props.index].like}</span>
        </div>
        <div className="modal-contents">{props.data[props.index].content}</div>

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
