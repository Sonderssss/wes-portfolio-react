import React from "react";
import ContactView from "../views/ContactView";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="page-section relative" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      {/*  Diagonal Cross Grid Bottom Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 35% at 50% 100%, #000 30%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 100% 35% at 50% 100%, #000 30%, transparent 90%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <ContactView />
    </section>
  );
};

export default Contact;
