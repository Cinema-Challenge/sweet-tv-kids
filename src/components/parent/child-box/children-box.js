import React from "react";

import "./style.scss";

const ChildBox = ({ child }) => {
  const { name, age, weekStatistik, films, avatar } = child;
  return (
    <div className="child-box">
      <div className="child-box__top">
        <img src={avatar} alt="" className="child-box__avatar-img" />
        <div className="child-box__data">
          <h4 className="child-box__title">
            <span className="child-box__name text">{name}</span>
            <span className="child-box__age text--secondary">{age} Років</span>
          </h4>
          <div className="child-box__statistic">
            <div className="child-box__average">
              <span className="text text--field">Середній час за тиждень:</span>
              <span className="text text--percent">{weekStatistik.percent}</span>
              <span className="text text">{weekStatistik.time}</span>
              <span className="text text--secondary">хв / день</span>
            </div>
            <div className="child-box__average">
              <span className="text text--field">Середній час за місяць:</span>
              <span className="text text--percent">{weekStatistik.percent}</span>
              <span className="text text">{weekStatistik.time}</span>
              <span className="text text--secondary">хв / день</span>
            </div>
          </div>
        </div>
      </div>
      <div className="child-box__bottom">
        <div className="child-box__film">
          <img src={films.img} alt="" className="child-box__film-img" />
          <img src={films.img} alt="" className="child-box__film-img" />
          <img src={films.img} alt="" className="child-box__film-img" />
        </div>
        <div className="child-box__last-film">
          <p className="text">Останній перегляд:</p>
          <p className="text text--big">{films.lastFilm}</p>
          <p className="text text--secondary">укр. озвучка, 2.25 год</p>
          <p className="text">час: 17:24</p>
        </div>
      </div>
    </div>
  );
};

export default ChildBox;
