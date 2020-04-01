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
        <label htmlFor="name">{getText("edit-user-page_main-info_name", lang)}</label>
        <input
          name="name"
          required
          placeholder={getText("edit-user-page_main-info_name_placeholder", lang)}
          onChange={e => handleInputChange("name", e.target.value)}
        />
        <label htmlFor="nickname">{getText("edit-user-page_main-info_nickname", lang)}</label>
        <input
          name="nickname"
          required
          placeholder={getText("edit-user-page_main-info_nickname_placeholder", lang)}
          onChange={e => handleInputChange("nickname", e.target.value)}
        />
        <label htmlFor="username">{getText("edit-user-page_main-info_username", lang)}</label>
        <input
          name="username"
          required
          placeholder={getText("edit-user-page_main-info_username_placeholder", lang)}
          onChange={e => handleInputChange("username", e.target.value)}
        />
      </div>
      <div className="form-section-column">
        <label htmlFor="age">{getText("edit-user-page_main-info_age", lang)}</label>
        <input
          name="age"
          type="number"
          placeholder={getText("edit-user-page_main-info_age_placeholder", lang)}
          onChange={e => handleInputChange("age", e.target.value)}
        />
        <label htmlFor="birthdate">{getText("edit-user-page_main-info_birthdate", lang)}</label>
        <input
          name="birthdate"
          type="date"
          onChange={e => handleInputChange("birthdate", e.target.value)}
        />
        <label htmlFor="type">{getText("edit-user-page_main-info_species", lang)}</label>
        <select
          name="type"
          onChange={e => handleInputChange("type", e.target.value)}
          defaultValue=''
        >
          <option value=''>{getText("generic_select", lang)}</option>
          <option value="human">{getText("edit-user-page_main-info_species_human", lang)}</option>
          <option value="cat">{getText("edit-user-page_main-info_species_cat", lang)}</option>
          <option value="dog">{getText("edit-user-page_main-info_species_dog", lang)}</option>
        </select>
      </div>
    </section>
  );
};

export default withI18n(MainInfo);
