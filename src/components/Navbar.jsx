const Navbar = ({ token, total }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
  <div className="container">
    <a className="navbar-brand text-warning fw-bold" href="#">🍕 Pizzería Mamma Mía</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav gap-3">
        <li className="nav-item"><a className="nav-link text-white" href="#">🍕 Home</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#">🔐 Login</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#">🔐 Register</a></li>
        <li className="nav-item">
          <button className="btn btn-warning fw-bold">🛒 Total: $15.000</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
