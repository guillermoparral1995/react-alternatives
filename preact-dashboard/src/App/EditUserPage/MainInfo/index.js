import React from "react";
import { updateMainInfo } from "../effects/actions";

const MainInfo = ({ dispatch }) => {
  const handleInputChange = (field, value) => {
    dispatch(updateMainInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">Información principal</h3>
      <div className="form-section-column">
        <label for="name">Nombre completo</label>
        <input
          name="name"
          required
          placeholder="Ej. Guillermo Parral"
          onChange={e => handleInputChange("name", e.target.value)}
        />
        <label for="nickname">Apodo</label>
        <input
          name="nickname"
          required
          placeholder="Ej. Guille"
          onChange={e => handleInputChange("nickname", e.target.value)}
        />
        <label for="username">Nombre de usuario</label>
        <input
          name="username"
          required
          placeholder="Ej. gparral"
          onChange={e => handleInputChange("username", e.target.value)}
        />
      </div>
      <div className="form-section-column">
        <label for="age">Edad</label>
        <input
          name="age"
          type="number"
          placeholder="Ej. 24"
          onChange={e => handleInputChange("age", e.target.value)}
        />
        <label for="birthdate">Fecha de nacimiento</label>
        <input
          name="birthdate"
          type="date"
          placeholder="Ej. 17/10/1995"
          onChange={e => handleInputChange("birthdate", e.target.value)}
        />
        <label for="type">Especie</label>
        <select
          name="type"
          onChange={e => handleInputChange("type", e.target.value)}
        >
          <option selected>Seleccionar...</option>
          <option value="human">Humano</option>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>
      </div>
    </section>
  );
};

export default MainInfo;
