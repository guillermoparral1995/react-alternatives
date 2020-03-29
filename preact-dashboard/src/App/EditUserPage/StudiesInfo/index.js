import React from "react";
import { updateStudiesInfo } from "../effects/actions";

const StudiesInfo = ({ dispatch }) => {
  const handleStudiesChange = (field, value) => {
    dispatch(updateStudiesInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">Estudios</h3>
      <label for="university">Universidad</label>
      <input
        name="university"
        placeholder="Ej. UBA"
        onChange={e => handleStudiesChange("university", e.target.value)}
      />
      <label for="career">Título</label>
      <input
        name="career"
        placeholder="Ej. Arquitecto"
        onChange={e => handleStudiesChange("career", e.target.value)}
      />
      <label for="finished">Finalizado</label>
      <input
        type="checkbox"
        onChange={e => handleStudiesChange("finished", e.target.checked)}
      />
    </section>
  );
};

export default StudiesInfo;
