import React, { useEffect, useState } from "react";
import ChildBox from "./children-box";
import AvatarImg from "./Avatar.png";
import AvatarGirl from "./Avatar-girl.png";
import AddChildModal from "../child-modal/add-child-modal.component";
import Awards from "../award/awards";
import { Link } from "react-router-dom";

export const localStorageKey = "CHILDREN_DATA";

export const childrenData = [
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
  const [isModalOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState(childrenData);

  useEffect(() => {
    const data = localStorage.getItem(localStorageKey);
    if (data) setChildren([...children, JSON.parse(data)]);
  }, []);

  return (
    <>
      <div className="children">
        {children.map((child) => (
          <Link
            key={`${child.name}--${child.age}`}
            to={{ pathname: "/child-details", params: child}}
            child={child}
            params={child}
            className="children__link"
          >
            <ChildBox child={child} />
          </Link>
        ))}
      </div>
      <button onClick={() => setIsOpen(true)} className="btn">
        Додати користувача
      </button>
      <AddChildModal isOpen={isModalOpen} closeModal={() => setIsOpen(false)} />
      <div className="children__award-container">
        <h2 className="title">Останні нагороди</h2>
        <Awards />
      </div>
    </>
  );
};

export default Children;
