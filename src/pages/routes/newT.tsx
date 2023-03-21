import React from "react";

export default function newT() {
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">
          Nombre
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Hacer las compras"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </div>
    </div>
  );
}
