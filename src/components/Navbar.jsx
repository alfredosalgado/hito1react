import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ token }) => {
  const { total } = useContext(CartContext);
  const formatNumber = (num) => (num ? num.toLocaleString("de-DE") : "0");

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-warning fw-bold" to="/">🍕 Pizzería Mamma Mía</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><Link className="nav-link text-white" to="/">🍕 Home</Link></li>
            {token ? (
              <>
                <li className="nav-item"><Link className="nav-link text-white" to="/profile">🔓 Profile</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/logout">🔒 Logout</Link></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link text-white" to="/login">🔐 Login</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/register">🔐 Register</Link></li>
              </>
            )}
            <li className="nav-item">
              <Link to="/cart" className="btn btn-warning fw-bold">🛒 Total: ${formatNumber(total)}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;