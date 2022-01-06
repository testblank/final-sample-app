import * as React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  width: "150px",
  textAlign: "left"
}

const Nav = () => {
    return (
        <nav style={navStyle}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
            <li>
              <Link to="/context">context</Link>
            </li>
            <li>
              <Link to="/conf">conf</Link>
            </li>
            <li>
              <Link to="/logger">logger</Link>
            </li>
            <li>
              <Link to="/error">error</Link>
            </li>
          </ul>
        </nav>
      );
}

export default Nav;