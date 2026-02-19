import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="nav">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Company Logo</span>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="#">About us ▾</Link>
          <Link to="#">Products ▾</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="nav-right">

          <div className="language">
            <span>EN</span>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search for products..." />
          </div>

          <button className="quote-btn">
            Request Quote
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
