import "./PropertyCard.css";

type VillaInterface = {
  id: number;
  name: string;
  location: string;
  price: number | string; // ZAR
  beds: number;
  baths: number;
  guests: number;
  isFeatured: boolean;
  image: string;
};

interface Props {
  villa: VillaInterface;
}

const PropertyCard = ({ villa }: Props) => {
  return (
    <div className="Property-Card">
      <div className="card-wrapper">
        {/* Image Section */}
        <div
          className="card-image-container"
          style={{ backgroundImage: `url(${villa.image})` }}
        >
          {villa.isFeatured && <span className="badge">FEATURED</span>}
          <div className="price-overlay">
            <p className="price-label">From</p>
            <p className="price-amount">
              R{villa.price.toLocaleString()} <span>/night</span>
            </p>
          </div>
        </div>

        {/* Details Bar */}
        <div className="card-specs">
          <div className="spec-item">🛏 {villa.beds} Beds</div>
          <div className="spec-item">🛁 {villa.baths} Baths</div>
          <div className="spec-item">👥 {villa.guests} Guests</div>
        </div>

        {/* Content Section */}
        <div className="card-info">
          <h3 className="villa-name">{villa.name}</h3>
          <p className="villa-location">{villa.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
