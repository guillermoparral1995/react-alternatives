import React, { useReducer } from "react";
import reducer from "./effects/reducers";
import { withI18n } from "../I18n";
import MainInfo from "./MainInfo";
import OriginInfo from "./OriginInfo";
import StudiesInfo from "./StudiesInfo";
import WorkInfo from "./WorkInfo";
import HobbiesInfo from "./HobbiesInfo";
import Dashboard from "../Common/Dashboard";

import "./styles.scss";

const EditUserPage = ({ history, i18n: { getText, lang } }) => {
  const [state, dispatch] = useReducer(reducer, { contacts: [] });

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/personal-info/save", {
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
    history.push(`/${state.username}?lang=${lang}`);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form-column">
        <MainInfo dispatch={dispatch} />
        <OriginInfo dispatch={dispatch} />
        <StudiesInfo dispatch={dispatch} />
        <WorkInfo dispatch={dispatch} work={state.work} />
        <HobbiesInfo dispatch={dispatch} hobbies={state.hobbies} />
      </div>
      <div className="preview-column">
        <Dashboard personalInfo={state} showContacts={false}></Dashboard>  
      </div>
      <section className="form-section submit-section">
        <button>{getText('generic_register', lang)}</button>
      </section>
    </form>
  );
};

export default withI18n(EditUserPage);
