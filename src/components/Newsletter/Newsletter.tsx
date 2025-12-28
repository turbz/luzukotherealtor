import { useState, type ChangeEvent } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">
          Sign up for exclusive offers from us
        </h2>

        <div className="newsletter-content">
          <p className="newsletter-description">
            Sign up to your newsletter for all the latest news and our villa
            exclusives promotion.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e: ChangeEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-submit">
              <span className="btn-text">SUBSCRIBE</span>
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
