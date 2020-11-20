import React, { useState } from "react";
import Modal from "react-modal";
import AvatarImg from "./Avatar-big.png";
import smallImg from '../child-box/Avatar.png';
import { localStorageKey } from '../child-box/children';

import "./style.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "720px",
    height: "512px",
    borderRadius: "15px",
    background: "#15384C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const AddChildModal = ({ closeModal, isOpen }) => {
    const [childData, setChildData] = useState({avatar: smallImg});

  const handleChange = ({ target }) => {
      console.log(childData);
    setChildData({...childData, [target.name]: target.value });
  };

  const addChild = () => {
      let updatedData = childData;
      const data = JSON.parse(localStorage.getItem(localStorageKey));
      if (data) updatedData = [childData, ...data];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
      closeModal();
  }


  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="add-child-modal__title text">Створити Профіль</h2>
        <p className="add-child-modal__text text">
          Ми намагатимемося підбирати контент у Sweet Kids <br /> відповідно до
          віку дитини. Цю інформацію бачитимете лише ви й дитина.
        </p>
        <div className="child-info">
          <img src={AvatarImg} alt="" className="child-info__avatar" />
          <form className="child-info__form">
            <div className="d-flex flex-column">
              <span className="input-title lk-color-new text text--secondary">
                І'мя дитини*
              </span>
              <input  name="name"  onChange={handleChange} className="input-field text" type="text" />
            </div>
            <div className="d-flex flex-column">
              <span className="input-title lk-color-new text text--secondary">
                Вік*
              </span>
              <input onChange={handleChange} name="age" className="input-field text" type="text" />
            </div>
            <div className="d-flex flex-column">
              <span className="input-title lk-color-new text text--secondary">
                Місяць народження*
              </span>
              <select className="custom_drop">
                <option label="Січень" value="number:0">
                  Січень
                </option>
                <option label="Лютий" value="number:1">
                  Лютий
                </option>
                <option label="Березень" value="number:2">
                  Березень
                </option>
                <option label="Квітень" value="number:3">
                  Квітень
                </option>
                <option label="Травень" value="number:4">
                  Травень
                </option>
                <option label="Червень" value="number:5">
                  Червень
                </option>
                <option label="ЛИпень" value="number:6">
                  ЛИпень
                </option>
                <option label="Серпень" value="number:7">
                  Серпень
                </option>
                <option label="Вересень" value="number:8">
                  Вересень
                </option>
                <option label="Жовтень" value="number:9">
                  Жовтень
                </option>
                <option label="Листопад" value="number:10">
                  Листопад
                </option>
                <option label="Грудень" value="number:11">
                  Грудень
                </option>
              </select>
            </div>
          </form>
        </div>
        <button onClick={addChild} className="btn">Додати користувача</button>
      </Modal>
    </>
  );
};

export default AddChildModal;
