import React from "react";
import { updateStudiesInfo } from "../effects/actions";
import { withI18n } from "../../I18n";

const StudiesInfo = ({ dispatch, i18n: { getText, lang } }) => {
  const handleStudiesChange = (field, value) => {
    dispatch(updateStudiesInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">{getText("edit-user-page_studies-info_title", lang)}</h3>
      <label for="university">{getText("edit-user-page_studies-info_university", lang)}</label>
      <input
        name="university"
        placeholder={getText("edit-user-page_studies-info_university_placeholder", lang)}
        onChange={e => handleStudiesChange("university", e.target.value)}
      />
      <label for="career">{getText("edit-user-page_studies-info_career", lang)}</label>
      <input
        name="career"
        placeholder={getText("edit-user-page_studies-info_career_placeholder", lang)}
        onChange={e => handleStudiesChange("career", e.target.value)}
      />
      <label for="finished">{getText("edit-user-page_studies-info_finished", lang)}</label>
      <input
        type="checkbox"
        onChange={e => handleStudiesChange("finished", e.target.checked)}
      />
    </section>
  );
};

export default withI18n(StudiesInfo);
