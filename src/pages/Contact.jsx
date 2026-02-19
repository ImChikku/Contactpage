import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <div className="hero">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="divider"> / </span>
          <span className="active">Contact Us</span>
        </div>
        <h1>Contact Us</h1>
      </div>

      {/* Main Container */}
      <div className="contact-container">

        {/* Left Section */}
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>Drop us a line and we will get back to you soon.</p>

          <div className="info">
            <h4>Address</h4>
            <p>Company Name</p>
            <p>Bangalore, Karnataka, India</p>

            <h4>Phone</h4>
            <p>+91 XXXXX XXXXX</p>
          </div>

          {/* Soft Buttons */}
          <div className="contact-buttons">
            <button className="soft-btn">📞 <span>Call Us</span></button>
            <button className="soft-btn">💬 <span>Send Message</span></button>
            <button className="soft-btn">✉️ <span>Send Email</span></button>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <form className="contact-form">

            <div className="row">
              <input type="text" placeholder="Your Name*" />
              <input type="email" placeholder="Email*" />
            </div>

            <div className="row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Company" />
            </div>

            <input type="text" placeholder="Location" />

            <textarea placeholder="Description"></textarea>

            <button type="submit" className="submit-btn">
              Submit →
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;
