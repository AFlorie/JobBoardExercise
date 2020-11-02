/* Components/Header.js */

import React from "react";

import Title from "../Components/Title";

const Header = (props) => {
  return (
    <div className="container">
      <header>
        <Title title="The Job Board" />
      </header>
    </div>
  );
};

export default Header;
