import React, { useReducer } from "react";
import reducer from "./effects/reducers";
import MainInfo from "./MainInfo";
import OriginInfo from "./OriginInfo";
import StudiesInfo from "./StudiesInfo";
import WorkInfo from "./WorkInfo";
import HobbiesInfo from "./HobbiesInfo";

import "./styles.scss";

const EditUser = () => {
  const [state, dispatch] = useReducer(reducer, { contacts: [] });

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:8082/personal-info/save", {
      method: "post",
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.status !== 200) {
      throw { data };
    }
    return <Redirect to={`/${state.username}`} />;
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      {JSON.stringify(state)}
      <MainInfo dispatch={dispatch} />
      <OriginInfo dispatch={dispatch} />
      <StudiesInfo dispatch={dispatch} />
      <WorkInfo dispatch={dispatch} work={state.work} />
      <HobbiesInfo dispatch={dispatch} hobbies={state.hobbies} />
      <section className="form-section submit-section">
        <button>Registrarse!</button>
      </section>
    </form>
  );
};

export default EditUser;
