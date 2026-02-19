import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* CTA Section */}
      <div className="footer-cta">
        <div className="cta-left">
          <h2>Ready to Optimize Your Operations?</h2>
          <p>
            Get the latest insights on conveyor technology, industry trends,
            and product updates.
          </p>
        </div>

        <button className="cta-btn">Request a Quote →</button>
      </div>

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-about">
          <h3>Company Logo</h3>
          <p>
            Leading manufacturer and exporter of modular belts, slat chains,
            and conveyor components. Serving industries worldwide.
          </p>
          <p>Coimbatore, India</p>
          <p>+91 XXXXX XXXXX</p>
          <p>Email@company.com</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Infrastructure</li>
            <li>Quality Assurance</li>
            <li>Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Mini Vertical Band Sealing Machine</li>
            <li>Horizontal Band Sealer – Stainless</li>
            <li>Group 2 Products</li>
            <li>Group 3 Products</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>More Products</h4>
          <ul>
            <li>Mini Vertical Band Sealing Machine</li>
            <li>Horizontal Band Sealer – Stainless</li>
            <li>Group 2 Products</li>
            <li>Group 3 Products</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Spectra Plast. All rights reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>

    </footer>
  );
}

export default Footer;
