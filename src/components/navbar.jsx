import { Link, NavLink, Route, Switch } from "react-router-dom";

let Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/Movies">
          Movies
        </Link>
        <Link className="nav-item nav-link" to="/Customers">
          Customers
        </Link>
        <Link className="nav-item nav-link" to="/Rentals">
          Rentals
        </Link>
      </div>
    </nav>
    // <div className="navbar">
    //   <div
    //     style={{ display: "flex", flexDirection: "row" }}
    //     className="navbar-nav"
    //   >
    //     <NavLink className="nav-item nav-link " to="/">
    //       Home
    //     </NavLink>
    //     <NavLink className="nav-item nav-link m-2" to="./Movies">
    //       Movies
    //     </NavLink>
    //     <NavLink className="nav-item nav-link m-2" to="./Customers">
    //       Customers
    //     </NavLink>
    //     <NavLink className="nav-item nav-link m-2" to="./Rentals">
    //       Rentals
    //     </NavLink>
    //   </div>

    // </div>
  );
};

export default Navbar;
