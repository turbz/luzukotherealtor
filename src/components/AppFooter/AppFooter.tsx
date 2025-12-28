import "./AppFooter.css";

const AppFooter = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Social Links Section */}
        <div className="footer-column social-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#pinterest">Pinterest</a>
        </div>

        {/* Discover Section */}
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#inspired">Get inspired</a>
            </li>
            <li>
              <a href="#affiliates">Affiliates</a>
            </li>
            <li>
              <a href="#planners">Travel Planners</a>
            </li>
            <li>
              <a href="#buy">Buy a house</a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
            <li>
              <a href="#terms">Terms of use</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column contact-info">
          <h3>Get In Touch</h3>
          <address>2972 Westheimer Rd. Santa Ana, Illinois 85486</address>
          <a href="mailto:support@example.com" className="contact-email">
            support@example.com
          </a>
          <a href="tel:+4065550120" className="contact-phone">
            + (27) 555-0120
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
