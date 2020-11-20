import React from "react";
import Award from "./award";
import awardIcon from "./award.png";
import superStarIcon from "./superStar.png";
import winnerIcon from "./winner.png";
import sweetisIcon from "./sweetis.png";


import './style.scss';

const awardsData = [
  {
    date: "17.02.20р",
    name: "Маленький лінгвіст",
    icon: awardIcon,
    description: "Нагорода за перегляд мультфільму англійською мовою",
  },
  {
    date: "17.02.20р",
    name: "Super Star!",
    icon: superStarIcon,
    description: "Нагорода за перегляд програми про pop музику",
  },
  {
    date: "17.02.20р",
    name: "Переможець",
    icon: winnerIcon,
    description: "Нагорода за виконання батьківських челенджів протягом 3-х днів",
  },
  {
    date: "17.02.20р",
    name: "Збирач sweetiв",
    icon: sweetisIcon,
    description: "Нагорода за збір 200 монеток.",
  },
];

const Awards = () => {
  return (
    <div className="awards">
      {awardsData.map((award) => (
        <Award key={award.name} award={award} />
      ))}
    </div>
  );
};

export default Awards;
