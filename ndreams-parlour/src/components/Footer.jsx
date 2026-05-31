import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
      {/* Contact Strip */}
      <div id="contact-strip" className="contact-strip">
        <div className="contact-inner">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Madurai, Tamil Nadu, India</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value"><a href="tel:+918695551665">+91 86955 51665</a></div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="contact-label">Working Hours</div>
              <div className="contact-value">Mon–Sun: 9am–7pm</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📸</div>
            <div>
              <div className="contact-label">Instagram</div>
              <div className="contact-value">
                <a href="https://instagram.com/n_dreams_beautyparlour" target="_blank" rel="noreferrer">@n_dreams_beautyparlour</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-logo">N DREAM'S PARLOUR</span>
            <p className="footer-brand-desc">Where beauty is not just seen — it's felt. Serving the women of Madurai with world-class beauty services, expert artistry, and an experience you'll return to again and again.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/n_dreams_beautyparlour" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">📸</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" title="Facebook" style={{ fontSize: '.8rem', fontWeight: 700 }}>f</a>
              <a href="https://wa.me/918695551665" target="_blank" rel="noreferrer" className="social-icon" title="WhatsApp" style={{ fontSize: '.85rem' }}>WA</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">▶</a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="social-icon" title="Maps" style={{ fontSize: '.75rem' }}>MAP</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <ul>
              <li><a href="#services">Bridal Makeup</a></li>
              <li><a href="#services">Hair Styling</a></li>
              <li><a href="#services">Skin Care</a></li>
              <li><a href="#services">Threading</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Visit Us</div>
            <ul>
              <li><a href="https://maps.google.com" target="_blank" rel="noreferrer">Madurai, Tamil Nadu</a></li>
              <li><a href="#booking">Mon–Sun: 9am – 7pm</a></li>
              <li><a href="tel:+918695551665">+91 86955 51665</a></li>
              <li><a href="mailto:ndreamsbeautyparlour@gmail.com">ndreamsbeautyparlour@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#showcase">Gallery</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#instagram">Instagram Feed</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2024 N DREAM'S PARLOUR · Crafted with <span>♥</span> in Madurai, Tamil Nadu</span>
          <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Back to Top</button>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/918695551665?text=Hello%20N%20Dream's%20PARLOUR!%20I'd%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}
