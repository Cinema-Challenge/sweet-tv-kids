import React from "react";
import ChildBox from "./children-box";
import AvatarImg from "./Avatar.png";
import AvatarGirl from "./Avatar-girl.png";

const childrenData = [
  {
    name: "Артем",
    age: "12 ",
    avatar: AvatarImg,
    weekStatistik: {
      percent: "+ 30%",
      time: "37    ",
    },
    films: {
      img:
        "https://static.sweet.tv/images/cache/posters/BDXH4EQCOVVRUBAIAEIEM===/16238-angry-birds-u-kino.jpg",
      lastFilm: "Angry Birds в кіно",
    },
  },
  {
    name: "Аліса",
    age: "4 ",
    avatar: AvatarGirl,
    weekStatistik: {
      percent: "- 30%",
      time: "23    ",
    },
    films: {
      img:
        "https://static.sweet.tv/images/cache/posters/BDXH4EQCOVVRUBAIAEIEM===/16238-angry-birds-u-kino.jpg",
      lastFilm: "Angry Birds в кіно",
    },
  },
];

const Children = () => {
  return (
    <>
      <div className="children">
        {" "}
        {childrenData.map((child) => (
          <ChildBox child={child} />
        ))}
      </div>
      <button className="btn">Додати користувача</button>
    </>
  );
};

export default Children;
