// src/components/BagCard.jsx
import React from "react";

export default function BagCard({ cartera }) {
  return (
    <div className={`bag-card ${cartera.soldOut ? "sold-out" : ""}`}>
      <div className="bag-image-wrapper">
        <img src={cartera.imagen} alt={cartera.nombre} className="bag-image" />
        {cartera.soldOut && (
          <div className="sold-out-overlay">
            <span>SOLD OUT</span>
          </div>
        )}
      </div>
      <div className="bag-info">
        <p className="bag-marca">{cartera.marca}</p>
        <p className="bag-nombre">{cartera.nombre}</p>
        <p className="bag-precio">
          {cartera.soldOut ? (
            <span className="precio-agotado">Agotado</span>
          ) : (
            <>S/ {cartera.precio.toFixed(2)}</>
          )}
        </p>
      </div>
    </div>
  );
}