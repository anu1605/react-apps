import { Link, NavLink, Route, Switch } from "react-router-dom";

let Navbar = (props) => {
  return (
    <nav
      style={{
        justifyContent: "left",
        fontSize: 20,
      }}
      className="navbar navbar-light bg-light"
    >
      <h3 className="navbar-brand">Navbar</h3>
      <Link to="./Movies">Movies</Link>
    </nav>
  );
};

export default Navbar;
