import { FiArrowRight } from "react-icons/fi";
import "./AppBanner.css";

import imaage1 from "@assets/about-3.jpg";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: ["Finest Holiday", "villa rental", "collection"],
    image: imaage1,
  },
  {
    id: 2,
    title: ["Your happiness", "guaranteed"],
    image: "",
  },
  {
    id: 3,
    title: ["Make your stay", "unforgettable"],
    image: "",
  },
];

export default function AppBanner() {
  const [count, setCount] = useState(0);
  const sliceData = data.slice(0 + count, 1 + count);
  return (
    <section className="App-Banner">
      <div className="banner-container">
        <div className="banner-content">
          {sliceData.map((item) =>
            item.title.map((key) => (
              <h2 key={key}>
                <span>{key}</span>
              </h2>
            ))
          )}

          <a href="#">
            <span>Find Your Villa</span>
            <span>
              <FiArrowRight />
            </span>
          </a>
          <ul className="slider-nav">
            {data.map((item, i) => (
              <li
                className={count === i ? "active" : ""}
                onClick={() => setCount(i)}
                style={{
                  backgroundColor: count === i ? "#90b0b7" : "",
                }}
              >
                <mark></mark>
                <span>0{item.id}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="villa-images">
          {sliceData.map((item) => (
            <figure
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></figure>
          ))}
        </div>
      </div>
    </section>
  );
}
