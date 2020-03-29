import React from "react";
import { updateOriginInfo } from "../effects/actions";

const OriginInfo = ({ dispatch }) => {
  const handleOriginChange = (field, value) => {
    dispatch(updateOriginInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">Ubicación</h3>
      <label for="country">País</label>
      <input
        name="country"
        required
        placeholder="Ej. Argentina"
        onChange={e => handleOriginChange("country", e.target.value)}
      />
      <label for="city">Ciudad</label>
      <input
        name="city"
        placeholder="Ej. Buenos Aires"
        onChange={e => handleOriginChange("city", e.target.value)}
      />
      <label for="neighborhood">Localidad</label>
      <input
        name="neighborhood"
        placeholder="Ej. Villa Real"
        onChange={e => handleOriginChange("neighborhood", e.target.value)}
      />
    </section>
  );
};

export default OriginInfo;
