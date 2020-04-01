import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withI18n } from "../../../I18n";

import "./styles.scss";

const ProfileInfo = ({
  name,
  nickname,
  username,
  age,
  birthdate,
  origin,
  showReturn,
  i18n: { getText, lang }
}) => {
  const imgRef = useRef(null);

  const formatOrigin = origin => {
    const { country, city, neighborhood } = origin;
    const countryText = country || "";
    const cityText = `${city ? (country ? `${city}, ` : city) : ""}`;
    const neighborhoodText = `${
      neighborhood ? (city ? `${neighborhood}, ` : neighborhood) : ""
    }`;
    return `${neighborhoodText}${cityText}${countryText}`;
  };

  const handleOnError = () => {
    imgRef.current.src = 'default.png';
  }

  return (
    <React.Fragment>
      {showReturn ? (
        <NavLink to={`/?lang=${lang}`}>
          <button>{getText("generic_return", lang)}</button>
        </NavLink>
      ) : null}
      <div className="profile-info-container">
        <img ref={imgRef}
          src={showReturn ? `/${username}.jpg`: 'default.png'}
          alt={`${name} profile picture`}
          onError={() => handleOnError()}
        />
        <h3>{nickname || name}</h3>
        <p>
          {getText('dashboard_profile-info_name', lang)}<br />
          <strong>{name}</strong>
        </p>
        <p>
          {age ? getText('dashboard_profile-info_age', lang) : ''}<br />
          <strong>{age}</strong>
        </p>
        <p>
          {birthdate ? getText('dashboard_profile-info_birthdate', lang) : ''}<br />
          <strong>{birthdate}</strong>
        </p>
        {origin ? (
          <p>
            {getText('dashboard_profile-info_origin', lang)}<br />
            <strong>{formatOrigin(origin)}</strong>
          </p>
        ) : (
          ""
        )}
        <NavLink to={`/${username}`}>{username ? `@${username}` : ''}</NavLink>
      </div>
    </React.Fragment>
  );
};

export default withI18n(ProfileInfo);
