import React, { useState } from "react";
import { addJob, deleteJob } from "../effects/actions";
import { withI18n } from "../../I18n";

const WorkInfo = ({ dispatch, work, i18n: { getText, lang } }) => {
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
    const placeText = `${getText("edit-user-page_work-info_list_place", lang)}${place}`;
    const positionText = position ? `${getText("edit-user-page_work-info_list_position", lang)}${position}` : "";
    const startedText = started ? `${getText("edit-user-page_work-info_list_started", lang)}${started}` : "";
    const timeText = time ? `${getText("edit-user-page_work-info_list_time", lang)}${time}` : "";
    return `${placeText}${positionText}${startedText}${timeText}`;
  };

  return (
    <section className="form-section">
      <h3 className="form-section-title">{getText("edit-user-page_work-info_title", lang)}</h3>
      {work ? (
        <ul className="form-list">
          {work.map((job, idx) => (
            <li className="form-list-item" key={idx}>
              <span>
                {buildJobText(job)}
                <button type="button" onClick={() => handleDeleteJob(idx)}>
                  {getText("generic_delete", lang)}
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="form-section-column">
        <label htmlFor="place">{getText("edit-user-page_work-info_place", lang)}</label>
        <input
          name="place"
          placeholder={getText("edit-user-page_work-info_place_placeholder", lang)}
          onChange={e => handleJobFields("place", e.target.value)}
        />
        <label htmlFor="position">{getText("edit-user-page_work-info_position", lang)}</label>
        <input
          name="position"
          placeholder={getText("edit-user-page_work-info_position_placeholder", lang)}
          onChange={e => handleJobFields("position", e.target.value)}
        />
      </div>
      <div className="form-section-column">
      <label htmlFor="started">{getText("edit-user-page_work-info_started", lang)}</label>
        <input
          name="started"
          placeholder={getText("edit-user-page_work-info_started_placeholder", lang)}
          onChange={e => handleJobFields("started", e.target.value)}
        />
        <label htmlFor="time">{getText("edit-user-page_work-info_time", lang)}</label>
        <input
          name="time"
          placeholder={getText("edit-user-page_work-info_time_placeholder", lang)}
          onChange={e => handleJobFields("time", e.target.value)}
        />
        {fields.place ? (
          <button
            type="button"
            disabled={!fields.place}
            onClick={() => handleAddJob()}
          >
            {getText("generic_add", lang)}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default withI18n(WorkInfo);
