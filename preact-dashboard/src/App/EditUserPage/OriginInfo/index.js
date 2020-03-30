import React from "react";
import { updateOriginInfo } from "../effects/actions";
import { withI18n } from "../../I18n";

const OriginInfo = ({ dispatch, i18n: { getText, lang } }) => {
  const handleOriginChange = (field, value) => {
    dispatch(updateOriginInfo(field, value));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">{getText("edit-user-page_origin-info_title", lang)}</h3>
      <label for="country">{getText("edit-user-page_origin-info_country", lang)}</label>
      <input
        name="country"
        required
        placeholder="Ej. Argentina"
        onChange={e => handleOriginChange("country", e.target.value)}
      />
      <label for="city">{getText("edit-user-page_origin-info_city", lang)}</label>
      <input
        name="city"
        placeholder="Ej. Buenos Aires"
        onChange={e => handleOriginChange("city", e.target.value)}
      />
      <label for="neighborhood">{getText("edit-user-page_origin-info_neighborhood", lang)}</label>
      <input
        name="neighborhood"
        placeholder="Ej. Villa Real"
        onChange={e => handleOriginChange("neighborhood", e.target.value)}
      />
    </section>
  );
};

export default withI18n(OriginInfo);
