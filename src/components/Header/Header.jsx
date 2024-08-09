import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>My Website </h2>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
      </nav>
    </div>
  );
};

export default Header;
