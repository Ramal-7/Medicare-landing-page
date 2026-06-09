import React from "react";
import "./Products.css";

const Products = ({ backToHome }) => {
  return (
    <section className="products">
      <h2>Our Medicines</h2>
      <div className="products-grid">
        <div className="product-card">
          <h3>Paracetamol</h3>
          <p>Effective pain relief</p>
        </div>
        <div className="product-card">
          <h3>Ibuprofen</h3>
          <p>Relieves inflammation and pain</p>
        </div>
        <div className="product-card">
          <h3>Vitamin C</h3>
          <p>Boosts immunity</p>
        </div>
        <div className="product-card">
          <h3>Amoxicillin</h3>
          <p>Broad-spectrum antibiotic</p>
        </div>
        <div className="product-card">
          <h3>Cetirizine</h3>
          <p>Allergy relief</p>
        </div>
        <div className="product-card">
          <h3>Omeprazole</h3>
          <p>Acid reflux control</p>
        </div>
        <div className="product-card">
          <h3>Metformin</h3>
          <p>Blood sugar control</p>
        </div>
        <div className="product-card">
          <h3>Azithromycin</h3>
          <p>Antibiotic for infections</p>
        </div>
        <div className="product-card">
          <h3>Loratadine</h3>
          <p>Non-drowsy allergy relief</p>
        </div>
      </div>

      <button className="back-btn" onClick={backToHome}>Back to Home</button>
    </section>
  );
};

export default Products;