import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      {/* Brand Section */}
      <div className="footer-section brand">
        <div className="logo-title">
          <img src="/logo192.png" alt="Eaque Ipsa Logo" />
          <h3>Eaque Ipsa</h3>
        </div>
        <p>
          Handcrafted ceramic art that blends tradition with timeless luxury. 
          Each piece is designed to bring elegance into your home.
        </p>
        <div className="social-icons">
          <a href="#"><FacebookFilled /></a>
          <a href="#"><InstagramOutlined /></a>
          <a href="#"><TwitterOutlined /></a>
          <a href="#"><LinkedinOutlined /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section links">
        <h4>Collections</h4>
        <ul>
          <li><a href="/collections/plates">Plates</a></li>
          <li><a href="/collections/vases">Vases</a></li>
          <li><a href="/collections/teapots">Teapots</a></li>
        </ul>
      </div>

      <div className="footer-section links">
        <h4>About</h4>
        <ul>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/journal">Journal</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Customer Care */}
      <div className="footer-section links">
        <h4>Customer Care</h4>
        <ul>
          <li><a href="/shipping">Shipping & Returns</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-section contact">
        <h4>Get in Touch</h4>
        <ul>
          <li><PhoneOutlined /> +91 70177 35070</li>
          <li><MailOutlined /> support@eaqueipsa.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
