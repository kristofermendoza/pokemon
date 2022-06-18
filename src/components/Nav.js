import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="big__container">
        <div className="sm__container-1">
          <div className="title" href="/">
            Pokemon Search
          </div>
          <ul className="navbar__items">
            <li className="navbar__item">
              <a href="/">About</a>
            </li>
            <li className="navbar__item">
              <a href="/">Coming soon...</a>
            </li>
          </ul>
        </div>
        <div className="sm__container-2">
          <input type="search" placeholder="Search for Pokemon here!" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
