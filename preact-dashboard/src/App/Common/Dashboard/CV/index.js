import React from "react";
import "./styles.scss";
import { withI18n } from "../../../I18n";

const CV = ({ studies, work, hobbies, i18n: { getText, lang } }) => (
  <div className="cv-container">
    <h2>{getText("dashboard_cv_title", lang)}</h2>
    {studies ? (
      <div className="cv-section studies-section">
        <h3>{getText("dashboard_cv_studies_title", lang)}</h3>
        <p>
          <strong>{getText("dashboard_cv_studies_university", lang)}</strong>
          {studies.university}
        </p>
        <p>
          <strong>{getText("dashboard_cv_studies_career", lang)}</strong>
          {studies.career}
        </p>
        <p>
          <strong>{getText("dashboard_cv_studies_finished", lang)}</strong>
          {studies.finished
            ? getText("dashboard_cv_studies_finished-true", lang)
            : getText("dashboard_cv_studies_finished-false", lang)}
        </p>
      </div>
    ) : null}
    {work ? (
      <div className="cv-section work-section">
        <h3>{getText("dashboard_cv_work_title", lang)}</h3>
        {work.map((job, idx) => (
          <div key={idx} className="cv-subsection">
            <p>
              <strong>{getText("dashboard_cv_work_place", lang)}</strong>
              {job.place}
            </p>
            <p>
              <strong>{getText("dashboard_cv_work_position", lang)}</strong>
              {job.position}
            </p>
            <p>
              <strong>{getText("dashboard_cv_work_started", lang)}</strong>
              {job.started}
            </p>
            <p>
              <strong>{getText("dashboard_cv_work_time", lang)}</strong>
              {job.time}
            </p>
          </div>
        ))}
      </div>
    ) : null}
    {hobbies ? (
      <div className="cv-section hobbies-section">
        <h3>{getText("dashboard_hobbies_title", lang)}</h3>
        {hobbies.activities ? (
          <div className="cv-subsection activities-subsection">
            <h4>{getText("dashboard_hobbies_activities", lang)}</h4>
            <ul>
              {hobbies.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {hobbies.preferences ? (
          <div className="cv-subsection preferences-subsection">
            <h4>{getText("dashboard_hobbies_preferences", lang)}</h4>
            <div className="preference-container">
              {Object.entries(hobbies.preferences).map(
                ([category, list], idx) => (
                  <div key={idx} className="preference-col">
                    <p className="preference-title">
                      {
                        getText(`edit-user-page_hobbies-info_preferences_category_${category}`, lang)
                      }
                    </p>
                    <ul>
                      {list.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        ) : null}
      </div>
    ) : null}
  </div>
);

export default withI18n(CV);
