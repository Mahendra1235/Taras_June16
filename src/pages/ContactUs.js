import React from 'react';

const ContactUs = () => {
  // const [phone, setPhone] = useState('');
  // const [phoneError, setPhoneError] = useState('');

  // const indiaPhoneRegex = /^[6-9]\d{9}$/;

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!indiaPhoneRegex.test(phone)) {
  //     setPhoneError('Please enter a valid 10-digit phone number.');
  //     return;
  //   }

  //   const formData = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     phone,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };

  //   fetch(`${process.env.REACT_APP_API_URL}/contact`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error('Failed to send message');
  //       return res.json();
  //     })
  //     .then(() => {
  //       alert('Message sent successfully!');
  //       e.target.reset();
  //       setPhone('');
  //       setPhoneError('');
  //     })
  //     .catch((err) => {
  //       console.error('Error sending message:', err);
  //       alert('Something went wrong. Please try again later.');
  //     });
  // };

  return (
    <div className="contact-page">
      {/* <h1 className="contact-title">Contact <strong>Us</strong></h1> */}

      <div className="contact-container">
        <div className="contact-info card">
          <h2>Contact Information</h2>
          <p className="contact-desc">
            Get in Touch With Our Team to Discuss Your Requirements and Explore
            How We Can Support You
          </p>

          <div className="info-item">
            <span className="icon email-icon" aria-label="email">
              &#9993;
            </span>
            <div>
              <strong>Email:</strong>
              <br />
              <div className="contact-emails">
                <a
                  href="mailto:HR@tarassolutions.com"
                  className="contact-link"
                >
                  HR@tarassolutions.com
                </a>
                {/* <br />
                <a
                  href="mailto:shriram@tarassolutions.com"
                  className="contact-link"
                >
                  shriram@tarassolutions.com
                </a>
                <br />
                <a
                  href="mailto:harshavardhan.p@tarassolutions.com"
                  className="contact-link"
                >
                  harshavardhan.p@tarassolutions.com
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="info-item">
            <span className="icon phone-icon" aria-label="phone">
              &#9742;
            </span>
            <div>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+917845550414" className="contact-link">
                +91 7845550414
              </a>
            </div>
          </div> */}

          <div className="contact-btn-wrapper">
            <a
              className="contact-btn"
              href="https://forms.office.com/r/7F37Pe4DRa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect With Us Today🤝📩
            </a>
          </div>

          <div className="info-item">
            <span className="icon location-icon" aria-label="address">
              &#9873;
            </span>

            <div className="address-section">
              <strong>Address:</strong>

              <div className="address-map-wrapper">
                <div className="address-grid">
                  <div className="address-block">
                    <span className="address-tag">Head Office</span>
                    <br />
                    177/1, Sameem Garden
                    <br />
                    Dhanasri Garden, Sundakkamuthur,
                    <br />
                    Coimbatore,
                    <br />
                    Tamil Nadu - 641010
                  </div>

                  <div className="address-block">
                    <span className="address-tag">Branch Office</span>
                    <br />
                    3rd Floor-
                    <br />
                    IndiQube Rivera,
                    <br />
                    VR Ramanathan Rd,
                    <br />
                    Mukta Gardens, Egmore
                    <br />
                    Chennai,
                    <br />
                    Tamil Nadu - 600031
                  </div>

                  <div className="address-block">
                    <span className="address-tag">Innovation Center</span>
                    <br />
                    KIADB plot#8,
                    <br />
                    1st cross,
                    <br />
                    Sadaramangala road, Mahadevapura post,
                    <br />
                    Bengaluru,
                    <br />
                    Karnataka - 560048
                  </div>
                </div>

                <div className="map-container">
                  <iframe
                    title="Company Location Map"
                    src="https://www.google.com/maps?q=IndiQube%20Rivera,%20VR%20Ramanathan%20Rd,%20Egmore,%20Chennai,%20Tamil%20Nadu%20600031&output=embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form kept here for future use */}
          {/*
          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Name*" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com*" required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Your Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="10-digit phone number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
                required
              />
              {phoneError && (
                <p style={{ color: 'red', marginTop: '4px' }}>{phoneError}</p>
              )}
            </div>

            <div className="form-row full-width">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Your Subject" />
            </div>

            <div className="form-row full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here...*" required />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;