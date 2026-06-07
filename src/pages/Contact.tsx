import React from "react";
import ContactView from "../views/ContactView";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="page-section relative" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      <ContactView />
    </section>
  );
};

export default Contact;
