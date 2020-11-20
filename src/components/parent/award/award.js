import React from "react";
import avatarSmall from './avatar-smal.png';
import shareIcon from './share.png';

import "./style.scss";

const Award = ({ award }) => {
  const { date, name, icon, description } = award;
  return (
    <div className="award-box">
      <img src={avatarSmall} alt="" className="award-box__icon-small" />
      <img src={shareIcon} alt="" className="award-box__icon-share" />
      <span className="award-box__date text text--secondary">Отримано {date}</span>
      <img src={icon} alt="" className="award-box__icon" />
      <h4 className="text award-box__title">{name}</h4>
      <p className="award-box__description text text--secondary">{description}</p>
    </div>
  );
};

export default Award;
