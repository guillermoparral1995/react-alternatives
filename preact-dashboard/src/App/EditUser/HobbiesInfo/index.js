import React, { useState } from "react";
import { addActivity, deleteActivity, addPreference, deletePreference } from "../effects/actions";

const HobbiesInfo = ({ dispatch, hobbies }) => {
  const [activity, setActivity] = useState(undefined);
  const [preference, setPreference] = useState({
    category: undefined,
    title: ""
  });

  const handleAddPreference = () => {
    const { category, title } = preference;
    dispatch(addPreference(category, title));
  };

  const handleDeletePreference = (category, idx) => {
    dispatch(deletePreference(category, idx));
  } 

  const handleAddActivity = () => {
    dispatch(addActivity(activity));
  };

  const handleDeleteActivity = idx => {
    dispatch(deleteActivity(idx));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">Hobbies</h3>
      <div>
        {hobbies && hobbies.activities ? (
          <ul className="form-list">
            {hobbies.activities.map((activity, idx) => (
              <li key={idx} className="form-list-item">
                <span>
                  {activity}
                  <button
                    type="button"
                    onClick={() => handleDeleteActivity(idx)}
                  >
                    Borrar
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        <label for="activities">Actividades favoritas</label>
        <input
          name="activities"
          placeholder="Ej. Salir a correr"
          onChange={e => setActivity(e.target.value)}
        />
        {activity ? (
          <button type="button" onClick={() => handleAddActivity()}>
            + Añadir
          </button>
        ) : null}
      </div>
      <h3>Gustos</h3>
      <div>
        {hobbies && hobbies.preferences ? (
          <div className="form-list-row">
            {Object.entries(hobbies.preferences).map(
              ([category, list], idx) => (
                <ul key={idx} className="form-list">
                  {category}
                  {list.map((elem, idx) => (
                    <li className="form-list-item" key={idx}>
                      <span>{elem}
                        <button type="button" onClick={() => handleDeletePreference(category, idx)}>Borrar</button>
                      </span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        ) : null}
        <label for="pref-category">Categoría</label>
        <select
          name="pref-category"
          onChange={e => {
            setPreference({ ...preference, category: e.target.value });
          }}
        >
          <option selected>Seleccionar...</option>
          <option value="music">Música</option>
          <option value="series">Series</option>
          <option value="movies">Películas</option>
          <option value="sports">Deportes</option>
          <option value="books">Libros</option>
          <option value="anime">Anime</option>
        </select>
        {preference.category ? (
          <React.Fragment>
            <label for="pref-title">Título</label>
            <input
              name="pref-title"
              placeholder="Ej. Downton Abbey"
              onChange={e =>
                setPreference({ ...preference, title: e.target.value })
              }
            />
            {preference.title ? (
              <button type="button" onClick={() => handleAddPreference()}>
                + Añadir
              </button>
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
    </section>
  );
};

export default HobbiesInfo;
