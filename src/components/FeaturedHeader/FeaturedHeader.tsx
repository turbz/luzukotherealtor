import "./FeaturedHeader.css";

const FeaturedHeader = () => {
  return (
    <div className="featured-header">
      <div className="header-left">
        <div className="subtitle-container">
          <span className="line"></span>
          <span className="subtitle">RECENTLY ADDED</span>
        </div>
        <h2 className="main-title">Featured villas</h2>
      </div>

      <div className="header-right">
        <button className="see-all-btn">
          <span className="btn-label">SEE ALL PROPERTIES</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedHeader;
