import React from "react";
import { updateMainInfo } from '../effects/actions';

const MainInfo = ({ dispatch }) => {
  const handleInputChange = (field, value) => {
    dispatch(updateMainInfo(field, value));
  }

  return <section className="form-section">
    <h3 className="form-section-title">Información principal</h3>
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
  </section>;
};

export default MainInfo;
