import React from "react";
import ChildBox from "../parent/child-box/children-box";
import { childrenData } from "../parent/child-box/children";
import robotImg from "./robot.png";
import statisticImg from './pie.png';

import "./style.scss";
import DonutsAmount from "../donuts-amount/DonutsAmount";

const ChildDetails = ({ location }) => {
  const { params: child } = location;

  console.log("props", child);
  return (
    <div className="child-details__container">
      <div className="child-details">
        <ChildBox child={child || childrenData[0]} />
        <img src={robotImg} alt="" className="child-details__robot" />
        <DonutsAmount donuts="1 150" />
      </div>
      <div className="child-details__details">
        <div className="child-details__task">
          <div className="child-details__task-top">
            <h4 className="child-details__task-title title">
              Щоденні завдання
            </h4>
            <p className="child-details__task-description text text--secondary">
              Давайте дітям більше можливостей
            </p>
            <div className="child-details__task-currency">
              <span className="child-details__task-currency-text text text--secondary">
                Можна використати
              </span>
              <DonutsAmount donuts="50" />
            </div>
          </div>
          <div className="child-details__task-box">
            <div className="child-details__task-box__text">
              <h5 className="text">Завдання на сьогодні</h5>
              <p className="text text--secondary">Нагорода для дитини</p>
            </div>
            <DonutsAmount donuts="15" />
            <button className="btn btn--secondary">Додати</button>
          </div>

          <div className="child-details__task-box">
            <div className="child-details__task-box__text">
              <h5 className="text">Завдання на сьогодні</h5>
              <p className="text text--secondary">Нагорода для дитини</p>
            </div>
            <DonutsAmount donuts="15" />
            <button className="btn btn--secondary">Додати</button>
          </div>
        </div>

        <div className="child-details__task statistic">
          <div className="child-details__task-top">
            <h4 className="child-details__task-title title">
              Категорії переглядів
            </h4>
            <p className="child-details__task-description text text--secondary">
              Чим цікавиться ваша дитина
            </p>
            <img src={statisticImg} alt="" className="child-details__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDetails;
