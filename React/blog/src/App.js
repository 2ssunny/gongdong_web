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
          datas={datas}
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
        <div className="modal-title">{props.datas[props.index].title}</div>
        <div className="modal-date">
          {props.datas[props.index].date}
          <span>👍</span>
          <span>{props.datas[props.index].like}</span>
        </div>
        <div className="modal-contents">{props.datas[props.index].content}</div>

        <button
          className="modal-button"
          onClick={() => {
            props.modal ? props.setModal(false) : props.setModal(true);
          }}
        >
          check
        </button>
        <button
          className="modal-button"
          onClick={() => {
            let copy = [...props.datas];
            copy.splice(props.index, 1);
            props.setDatas(copy);
            props.modal ? props.setModal(false) : props.setModal(true);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default App;
