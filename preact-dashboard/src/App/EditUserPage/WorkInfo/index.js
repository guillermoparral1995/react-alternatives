import React, { useState } from "react";
import { addJob, deleteJob } from "../effects/actions";

const WorkInfo = ({ dispatch, work }) => {
  const [fields, setFields] = useState({});

  const handleJobFields = (field, value) => {
    if (value) {
      const obj = {};
      obj[field] = value;
      setFields({ ...fields, ...obj });
    } else {
      const obj = { ...fields };
      delete obj[field];
      setFields({ ...obj });
    }
  };

  const handleAddJob = () => {
    dispatch(addJob(fields));
    setFields({});
  };

  const handleDeleteJob = idx => {
    dispatch(deleteJob(idx));
  };

  const buildJobText = ({ place, position, started, time }) => {
    const placeText = `Trabajé en ${place}`;
    const positionText = position ? ` como ${position}` : "";
    const startedText = started ? ` desde ${started}` : "";
    const timeText = time ? ` durante ${time}` : "";
    return `${placeText}${positionText}${startedText}${timeText}`;
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">Trabajos</h3>
      {work ? (
        <ul className="form-list">
          {work.map((job, idx) => (
            <li className="form-list-item" key={idx}>
              <span>
                {buildJobText(job)}
                <button type="button" onClick={() => handleDeleteJob(idx)}>
                  Borrar
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="form-section-column">
        <label for="place">Lugar</label>
        <input
          name="place"
          placeholder="Ej. Mercado Libre"
          onChange={e => handleJobFields("place", e.target.value)}
        />
        <label for="position">Posición</label>
        <input
          name="position"
          placeholder="Ej. Desarrollador"
          onChange={e => handleJobFields("position", e.target.value)}
        />
      </div>
      <div className="form-section-column">
      <label for="started">Fecha de inicio</label>
        <input
          name="started"
          placeholder="Ej. Dic de 2019"
          onChange={e => handleJobFields("started", e.target.value)}
        />
        <label for="time">Tiempo en la empresa</label>
        <input
          name="time"
          placeholder="Ej. Actualidad"
          onChange={e => handleJobFields("time", e.target.value)}
        />
        {fields.place ? (
          <button
            type="button"
            disabled={!fields.place}
            onClick={() => handleAddJob()}
          >
            + Añadir
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default WorkInfo;
