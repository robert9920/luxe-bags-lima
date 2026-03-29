// src/App.jsx
import React, { useState } from "react";
import BagCard from "./components/BagCard";
import carteras from "./data/carteras";
import "./index.css";

export default function App() {
  const [filtro, setFiltro] = useState("todas");

  const carterasFiltradas = carteras.filter((c) => {
    if (filtro === "disponibles") return !c.soldOut;
    if (filtro === "agotadas") return c.soldOut;
    return true;
  });

  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        <div className="hero-tag">✈️ Traídas desde EE.UU.</div>
        <h1 className="hero-title">
          <span>LUXE</span> BAGS LIMA
        </h1>
        <p className="hero-sub">
          Carteras originales de las mejores marcas americanas
        </p>
        <div className="hero-line" />
      </header>

      {/* FILTROS */}
      <div className="filtros">
        {["todas", "disponibles", "agotadas"].map((f) => (
          <button
            key={f}
            className={`filtro-btn ${filtro === f ? "active" : ""}`}
            onClick={() => setFiltro(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
        <span className="filtro-count">
          {carterasFiltradas.length} cartera{carterasFiltradas.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* GRID */}
      <main className="grid">
        {carterasFiltradas.map((c) => (
          <BagCard key={c.id} cartera={c} />
        ))}
      </main>

      {/* FOOTER */}
      {/* <footer className="footer">
        <p>📲 Consultas por WhatsApp · Luxe Bags Lima · {new Date().getFullYear()}</p>
      </footer> */}
    </div>
  );
}