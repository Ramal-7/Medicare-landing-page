import React from 'react';
import "./Features.css";
function Features() {
  return (
    <section className="features" id="features">
      <h2>Why Choose MediStore?</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Wide Range of Medicines</h3>
          <p>Access a vast selection of authentic medicines at affordable prices.</p>
        </div>
        <div className="feature-item">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and safely to your doorstep.</p>
        </div>
        <div className="feature-item">
          <h3>Certified Products</h3>
          <p>All products are verified and approved by medical professionals.</p>
        </div>
      </div>
    </section>
  );
};
export default Features;
