import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, MoonIcon, ProfileIcon, SearchIcon } from "../icons";
import { headerLinks } from './header.constants';
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="https://sweet.tv" className="header__link">
          <img
            className="header__logo"
            src="https://sweet.tv/images/v2/logo_sweettv.svg"
            alt="logo"
          />
        </a>
        <nav className="header__links">
          <ul className="navigation__list">
            {headerLinks.map(({ title, chewronDown }) => (
              <li key={title} className="navigation__link">{title} {chewronDown && <ChevronDownIcon />}</li>
            ))}
          </ul>
          <ul className="navigation__list navigation__list--right">
                <li className="navigation__link"><SearchIcon /></li>
                <Link to="/kids" className="navigation__link"><MoonIcon /></Link>
                <li className="navigation__link">UK <ChevronDownIcon /></li>
                <Link to="/profile" className="navigation__link"><ProfileIcon /> Кабінет</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
