import { Link, NavLink, Route, Switch } from "react-router-dom";

let Navbar = (props) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     Home
    //   </Link>

    //   <div className="navbar-nav">
    //     <NavLink className="nav-item nav-link" to="/Movies">
    //       Movies
    //     </NavLink>
    //     <NavLink className="nav-item nav-link" to="/Customers">
    //       Customers
    //     </NavLink>
    //     <NavLink className="nav-item nav-link" to="/Rentals">
    //       Rentals
    //     </NavLink>
    //     <NavLink className="nav-item nav-link" to="/loginForm">
    //       Login
    //     </NavLink>
    //   </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Rentals">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/loginForm">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    // </nav>

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
