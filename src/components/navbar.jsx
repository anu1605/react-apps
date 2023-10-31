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
      <span className="badge badge-pill badge-secondary">{props.count}</span>
    </nav>
  );
};

export default Navbar;
