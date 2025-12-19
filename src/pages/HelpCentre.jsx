import React, { useState } from "react";
import "./HelpCentre.css";
import { FiSearch, FiMail, FiPhone, FiChevronDown } from "react-icons/fi";

export default function HelpCentre() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can I contact Symbiotec support?",
      a: "You can reach us via email at info@symbiotec.com or call our support line during business hours."
    },
    {
      q: "Where can I find product regulatory documents?",
      a: "Regulatory documents such as DMFs, CEPs, and compliance certificates are available in the Investor or Product section depending on category."
    },
    {
      q: "How does Symbiotec ensure API quality?",
      a: "Our facilities are USFDA, EU-GMP, and WHO-GMP compliant with advanced QC/QA processes and end-to-end traceability."
    },
    {
      q: "How do I get investor-related assistance?",
      a: "Visit the Investor Relations section or email our IR team at investorrelations@symbiotec.com."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="help-wrapper">

      {/* Top Heading Section */}
      <div className="help-header">
        <h1>Help Centre</h1>
        <p>Your answers, support, and guidance in one place.</p>

        <div className="help-search-box">
          <FiSearch className="help-search-icon" />
          <input 
            type="text" 
            placeholder="Search for answers…" 
            className="help-search-input" 
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="help-quick-links">
        <div className="help-link-card">
          <FiMail className="help-link-icon" />
          <h3>Email Support</h3>
          <p>Get direct assistance from our team.</p>
          <a href="mailto:info@symbiotec.com">info@symbiotec.com →</a>
        </div>

        <div className="help-link-card">
          <FiPhone className="help-link-icon" />
          <h3>Call Us</h3>
          <p>Reach our support team for quick help.</p>
          <span className="help-phone">+91 00000 00000</span>
        </div>

        <div className="help-link-card">
          <FiSearch className="help-link-icon" />
          <h3>Documentation</h3>
          <p>View regulatory, compliance, and API documents.</p>
          <a href="#">Explore Docs →</a>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="help-faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.q}
                <FiChevronDown className={`faq-icon ${openIndex === index ? "rotate" : ""}`} />
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
