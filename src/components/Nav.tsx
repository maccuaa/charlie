import React from "react";

import NavLink from "./NavLink";

const Nav = () => (
  <nav>
    <NavLink href="/">Home</NavLink>

    <NavLink href="/toys">Toys</NavLink>

    <style jsx>{`
      nav {
        height: 54px;
        border-bottom: solid 1px #fff;
        display: flex;
        align-items: center;
        padding: 0px 16px;
      }
    `}</style>
  </nav>
);
export default Nav;
