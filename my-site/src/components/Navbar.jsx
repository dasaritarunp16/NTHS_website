import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">Your School</NavLink>
        <nav className="nav-links">
          <NavLink to="/about-us" className={link}>About Us</NavLink>
          <NavLink to="/leadership" className={link}>Leadership</NavLink>
          <NavLink to="/membership" className={link}>Membership</NavLink>
        </nav>
      </div>
    </header>
  );
}

  