import React, { useState, useRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Contact.css";
import { AiOutlineSend } from "react-icons/ai";
import useScrollAnimation from "../hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
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
      const result = await emailjs.sendForm(
        'service_29qunak', // Replace with your EmailJS service ID
        'template_m5bedqp', // Replace with your EmailJS template ID
        form.current,
        'ROtU4EmDBiR1_JsAm' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setStatus("Message sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
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
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    value={formData.user_email}
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
                  />
                </Form.Group>

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