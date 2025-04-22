import React from "react";

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="feature">
        <span className="icon">📄</span>
        <h3>Welcome</h3>
        <p>Explore the support we provide for elderly mental care.</p>
      </div>
      <div className="feature">
        <span className="icon">📋</span>
        <h3>Description</h3>
        <p>Detailed information about the resources available.</p>
      </div>
      <div className="feature">
        <span className="icon">📞</span>
        <h3>Call-to-Action</h3>
        <p>Contact us to learn more about our services.</p>
      </div>
    </section>
  );
};

export default Features;
