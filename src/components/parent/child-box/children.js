import React, { useEffect, useState } from "react";
import ChildBox from "./children-box";
import AvatarImg from "./Avatar.png";
import AvatarGirl from "./Avatar-girl.png";
import AddChildModal from "../child-modal/add-child-modal.component";

export const localStorageKey = 'CHILDREN_DATA'

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
  const [isModalOpen,setIsOpen] = useState(false);
  const [children, setChildren] = useState(childrenData);

  useEffect(() => {
    const data = localStorage.getItem(localStorageKey);
    if (data) setChildren([...children, JSON.parse(data)])
  }, [])

  console.log(children);

  return (
    <>
      <div className="children">
        {children.map((child) => (
          <ChildBox key={`${child.name}--${child.age}`} child={child} />
        ))}
      </div>
      <button onClick={() => setIsOpen(true)} className="btn">Додати користувача</button>
      <AddChildModal isOpen={isModalOpen} closeModal={() => setIsOpen(false)}  />
    </>
  );
};

export default Children;
