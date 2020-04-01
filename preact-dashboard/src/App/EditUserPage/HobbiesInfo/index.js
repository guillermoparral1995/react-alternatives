import React, { useState } from "react";
import {
  addActivity,
  deleteActivity,
  addPreference,
  deletePreference
} from "../effects/actions";
import { withI18n } from "../../I18n";

const HobbiesInfo = ({ dispatch, hobbies, i18n: { getText, lang } }) => {
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
  };

  const handleAddActivity = () => {
    dispatch(addActivity(activity));
  };

  const handleDeleteActivity = idx => {
    dispatch(deleteActivity(idx));
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">
        {getText("edit-user-page_hobbies-info_title", lang)}
      </h3>
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
                    {getText("generic_delete", lang)}
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        <label htmlFor="activities">
          {getText("edit-user-page_hobbies-info_activities", lang)}
        </label>
        <input
          name="activities"
          placeholder={getText('edit-user-page_hobbies-info_activities_placeholder', lang)}
          onChange={e => setActivity(e.target.value)}
        />
        {activity ? (
          <button type="button" onClick={() => handleAddActivity()}>
            {getText("generic_add")}
          </button>
        ) : null}
      </div>
      <h3>{getText("edit-user-page_hobbies-info_preferences", lang)}</h3>
      <div>
        {hobbies && hobbies.preferences ? (
          <div className="form-list-row">
            {Object.entries(hobbies.preferences).map(
              ([category, list], idx) => (
                <ul key={idx} className="form-list">
                  {getText(`edit-user-page_hobbies-info_preferences_category_${category}`, lang)}
                  {list.map((elem, idx) => (
                    <li className="form-list-item" key={idx}>
                      <span>
                        {elem}
                        <button
                          type="button"
                          onClick={() => handleDeletePreference(category, idx)}
                        >
                          {getText("generic_delete", lang)}
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        ) : null}
        <label htmlFor="pref-category">
          {getText("edit-user-page_hobbies-info_preferences_category", lang)}
        </label>
        <select
          name="pref-category"
          onChange={e => {
            setPreference({ ...preference, category: e.target.value });
          }}
          defaultValue=''
        >
          <option value=''>{getText("generic_select", lang)}</option>
          {["music", "series", "movies", "sports", "books", "anime", "snacks"].map(
            (category, idx) => (
              <option key={idx} value={category}>
                {getText(
                  `edit-user-page_hobbies-info_preferences_category_${category}`, lang
                )}
              </option>
            )
          )}
        </select>
        {preference.category ? (
          <React.Fragment>
            <label htmlFor="pref-title">{getText("edit-user-page_hobbies-info_preferences_title", lang)}</label>
            <input
              name="pref-title"
              placeholder={getText("edit-user-page_hobbies-info_preferences_title_placeholder", lang)}
              onChange={e =>
                setPreference({ ...preference, title: e.target.value })
              }
            />
            {preference.title ? (
              <button type="button" onClick={() => handleAddPreference()}>
                {getText("generic_add", lang)}
              </button>
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
    </section>
  );
};

export default withI18n(HobbiesInfo);
