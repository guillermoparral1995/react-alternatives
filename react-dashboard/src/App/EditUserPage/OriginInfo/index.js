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
      <label htmlFor="country">{getText("edit-user-page_origin-info_country", lang)}</label>
      <input
        name="country"
        required
        placeholder={getText("edit-user-page_origin-info_country_placeholder", lang)}
        onChange={e => handleOriginChange("country", e.target.value)}
      />
      <label htmlFor="city">{getText("edit-user-page_origin-info_city", lang)}</label>
      <input
        name="city"
        placeholder={getText("edit-user-page_origin-info_city_placeholder", lang)}
        onChange={e => handleOriginChange("city", e.target.value)}
      />
      <label htmlFor="neighborhood">{getText("edit-user-page_origin-info_neighborhood", lang)}</label>
      <input
        name="neighborhood"
        placeholder={getText("edit-user-page_origin-info_neighborhood_placeholder", lang)}
        onChange={e => handleOriginChange("neighborhood", e.target.value)}
      />
    </section>
  );
};

export default withI18n(OriginInfo);
