import { useState } from "react";
import FeaturedHeader from "../FeaturedHeader/FeaturedHeader";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./AppFeatured.css";

export default function AppFeatured() {
  const [count, setCount] = useState(3);
  const villaData = [
    {
      id: 1,
      name: "Villa Clementine",
      location: "Marseille, Provence, France",
      price: 2450,
      beds: 4,
      baths: 5,
      guests: 16,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Azure Horizon",
      location: "Clifton, Cape Town, South Africa",
      price: 8500,
      beds: 5,
      baths: 6,
      guests: 10,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "The Serengeti Lodge",
      location: "Kruger Park, Mpumalanga, SA",
      price: 12000,
      beds: 3,
      baths: 3,
      guests: 6,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Olive Grove Manor",
      location: "Stellenbosch, Western Cape, SA",
      price: 3200,
      beds: 4,
      baths: 4,
      guests: 8,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Modernist Escape",
      location: "Sandton, Johannesburg, SA",
      price: 4500,
      beds: 3,
      baths: 2,
      guests: 4,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Whale Watcher Villa",
      location: "Hermanus, South Africa",
      price: 2100,
      beds: 2,
      baths: 2,
      guests: 4,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "The Blue Lagoon",
      location: "Knysna, Garden Route, SA",
      price: 5800,
      beds: 6,
      baths: 5,
      guests: 12,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Sugar Coast Retreat",
      location: "Umhlanga, Durban, SA",
      price: 3900,
      beds: 4,
      baths: 3,
      guests: 8,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Mountainside Zen",
      location: "Hout Bay, Cape Town, SA",
      price: 6400,
      beds: 5,
      baths: 4,
      guests: 10,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Safari Sunset Villa",
      location: "Hoedspruit, Limpopo, SA",
      price: 9500,
      beds: 4,
      baths: 4,
      guests: 8,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "The Glass House",
      location: "Plettenberg Bay, SA",
      price: 7200,
      beds: 5,
      baths: 5,
      guests: 10,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Karoo Star Gazer",
      location: "Graaff-Reinet, South Africa",
      price: 1800,
      beds: 2,
      baths: 1,
      guests: 3,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1449156001437-3a1621acbe24?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      name: "Vineyard Vista",
      location: "Franschhoek, South Africa",
      price: 4100,
      beds: 3,
      baths: 3,
      guests: 6,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1472224311451-76c4542cd914?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Bantry Bay Heights",
      location: "Bantry Bay, Cape Town, SA",
      price: 15000,
      beds: 6,
      baths: 7,
      guests: 12,
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      name: "Coastal Pine Cabin",
      location: "Tsitsikamma, South Africa",
      price: 2750,
      beds: 3,
      baths: 2,
      guests: 5,
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="App-Featured">
      <div className="featured-container">
        <FeaturedHeader />
        <div className="featured-cardlist">
          {villaData.slice(count > 3 ? count - 3 : 0, count).map((villa) => (
            <PropertyCard key={villa.id} villa={villa} />
          ))}
        </div>
        <div className="feature-nav">
          {villaData.slice(0, villaData.length / 3).map((_, i) => {
            const step = i + 1 * 3;
            const isActive = step === count;

            return (
              <button
                key={i}
                className={isActive ? "active" : ""}
                onClick={() => setCount(step)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
