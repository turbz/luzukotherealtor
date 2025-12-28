import { useState } from "react";
import "./SearchBar.css";
import { FiCalendar, FiChevronDown, FiMapPin } from "react-icons/fi";

const SearchBar = () => {
  const [guests, setGuests] = useState(0);

  return (
    <div className="Search-Bar">
      <div className="search-container">
        {/* Location Section */}
        <div className="search-section location">
          <label>LOCATION</label>
          <div className="input-group">
            <span className="icon">
              <FiMapPin />
            </span>
            <input type="text" placeholder="Where to next?" />
          </div>
        </div>

        {/* Check In Section */}
        <div className="search-section check-in">
          <label>CHECK IN</label>
          <div className="input-group">
            <span className="icon">
              <FiCalendar />{" "}
            </span>
            <div className="placeholder-text">Add Date</div>
            <span className="arrow">
              <FiChevronDown />{" "}
            </span>
          </div>
        </div>

        {/* Check Out Section */}
        <div className="search-section check-out">
          <label>CHECK OUT</label>
          <div className="input-group">
            <span className="icon">
              <FiCalendar />
            </span>
            <div className="placeholder-text">Add Date</div>
            <span className="arrow">
              <FiChevronDown />{" "}
            </span>
          </div>
        </div>

        {/* Guests Section */}
        <div className="search-section guests">
          <label>GUESTS</label>
          <div className="guest-controls">
            <span className="guest-count">{guests}</span>
            <div className="stepper">
              <button
                onClick={() => setGuests(Math.max(0, guests - 1))}
                className="step-btn"
              >
                −
              </button>
              <button
                onClick={() => setGuests(guests + 1)}
                className="step-btn"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="search-submit">
          <svg viewBox="0 0 24 24" className="search-icon">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
