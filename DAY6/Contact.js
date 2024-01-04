// ContactPage.js
import React, { useState,useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => {
    document.body.classList.add('contact-page');
    return () => {
      document.body.classList.remove('contact-page');
    };
  }, []);

  const handleSendMessage = () => {
    // Check if all fields are filled
    if (name && email && message) {
      // Perform actions to send the message (you can customize this part)
      // For now, let's simulate a successful message sent
      setMessageSent(true);

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // If any field is missing, you can handle it accordingly (e.g., show an error message)
      alert('Please fill in all fields before sending the message.');
    }
  };

  const handleResetMessageSent = () => {
    setMessageSent(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      {messageSent ? (
        <div className="message-sent-dialog">
          <p>Message sent successfully!</p>
          <button onClick={handleResetMessageSent}>OK</button>
        </div>
      ) : (
        <div className="contact-form">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button className="submit-btn" onClick={handleSendMessage}>
            Send Message
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
