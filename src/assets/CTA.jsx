import React from 'react';
import "./CTA.css";
function CTA ({showProducts}) {
  return (
    <div className="cta" id="cta">
      <h2>Start Your Wellness Journey Today</h2>
      <p>Shop quality medicines with ease and confidence from MediStore.</p>
      <button className="cta-btn"  onClick={showProducts} >Browse Products</button>
    </div>
  );
};
export default CTA;