import { useState } from "react";
import "./AppHeader.css";
import { FiMenu, FiX } from "react-icons/fi";

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="App-header">
      <div className="App-header-container">
        {/* Logo */}
        <div className="App-header-logo">
          <h1 className="App-header-brand">LuzukoTheRealtor</h1>
        </div>

        {/* Hamburger */}
        <button
          className="App-header-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className={`App-header-burger ${isMenuOpen ? "open" : ""}`} />
          ) : (
            <FiMenu
              className={`App-header-burger ${isMenuOpen ? "open" : ""}`}
            />
          )}
        </button>

        {/* Navigation */}
        <nav className={`App-header-nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li className="App-header-active">Home</li>
            <li>All Villas</li>
            <li>Destinations</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Pages</li>
          </ul>
        </nav>

        {/* Right Side Utilities */}
        <div className="App-header-utils">
          <span className="App-header-phone">
            Call us at <strong>+27 123 44 66 88</strong>
          </span>
          {/* <div className="App-header-icons">
            <span>🔍</span>
            <span>♡</span>
            <span>👤</span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
