import React, { useState, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";
import useScrollAnimation from "../hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const contactRef = useScrollAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Method 1: Using sendForm (recommended for your current setup)
      const result = await emailjs.sendForm(
        'service_29qunak', // Your EmailJS service ID
        'template_m5bedqp', // Your EmailJS template ID
        form.current,
        'ROtU4EmDBiR1_JsAm' // Your EmailJS public key
      );

      // Alternative Method 2: Using send with explicit parameters
      // const result = await emailjs.send(
      //   'service_29qunak',
      //   'template_m5bedqp',
      //   {
      //     from_name: formData.user_name,
      //     from_email: formData.user_email,
      //     to_name: 'Your Name', // Replace with your name
      //     to_email: 'your-email@gmail.com', // Replace with your email
      //     message: formData.message,
      //     reply_to: formData.user_email
      //   },
      //   'ROtU4EmDBiR1_JsAm'
      // );

      if (result.text === 'OK') {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container fluid className="contact-section" id="contact" ref={contactRef}>
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <h1>Get In Touch</h1>
            <p>Feel free to reach out to me!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-form-container">
              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-textarea"
                    rows={5}
                  />
                </Form.Group>

                {/* Hidden fields for additional data */}
                <input type="hidden" name="to_name" value="Amrit Singhal" />
                <input type="hidden" name="reply_to" value={formData.email} />

                <button 
                  type="submit" 
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <AiOutlineSend className="send-icon" />
                    </>
                  )}
                </button>
                {status && (
                  <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
                    {status}
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;