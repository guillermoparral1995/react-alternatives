import React from "react";
import { updateMainInfo } from "../effects/actions";
import { withI18n } from "../../I18n";

const MainInfo = ({ dispatch, i18n: { getText, lang } }) => {
  const handleInputChange = (field, value) => {
    dispatch(updateMainInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">{getText("edit-user-page_main-info_title", lang)}</h3>
      <div className="form-section-column">
        <label for="name">{getText("edit-user-page_main-info_name", lang)}</label>
        <input
          name="name"
          required
          placeholder="Ej. Guillermo Parral"
          onChange={e => handleInputChange("name", e.target.value)}
        />
        <label for="nickname">{getText("edit-user-page_main-info_nickname", lang)}</label>
        <input
          name="nickname"
          required
          placeholder="Ej. Guille"
          onChange={e => handleInputChange("nickname", e.target.value)}
        />
        <label for="username">{getText("edit-user-page_main-info_username", lang)}</label>
        <input
          name="username"
          required
          placeholder="Ej. gparral"
          onChange={e => handleInputChange("username", e.target.value)}
        />
      </div>
      <div className="form-section-column">
        <label for="age">{getText("edit-user-page_main-info_age", lang)}</label>
        <input
          name="age"
          type="number"
          placeholder="Ej. 24"
          onChange={e => handleInputChange("age", e.target.value)}
        />
        <label for="birthdate">{getText("edit-user-page_main-info_birthdate", lang)}</label>
        <input
          name="birthdate"
          type="date"
          placeholder="Ej. 17/10/1995"
          onChange={e => handleInputChange("birthdate", e.target.value)}
        />
        <label for="type">{getText("edit-user-page_main-info_species", lang)}</label>
        <select
          name="type"
          onChange={e => handleInputChange("type", e.target.value)}
        >
          <option selected>{getText("generic_select", lang)}</option>
          <option value="human">{getText("edit-user-page_main-info_species_human", lang)}</option>
          <option value="cat">{getText("edit-user-page_main-info_species_cat", lang)}</option>
          <option value="dog">{getText("edit-user-page_main-info_species_dog", lang)}</option>
        </select>
      </div>
    </section>
  );
};

export default withI18n(MainInfo);
