import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const ProfileInfo = ({
  name,
  nickname,
  username,
  age,
  birthdate,
  origin,
  showReturn
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
        <NavLink to={"/"}>
          <button>Volver al menú</button>
        </NavLink>
      ) : null}
      <div className="profile-info-container">
        <img ref={imgRef}
          src={`/${username}.jpg`}
          alt={`${name} profile picture`}
          onError={() => handleOnError()}
        />
        <h3>{nickname || name}</h3>
        <p>
          Nombre completo: <br />
          <strong>{name}</strong>
        </p>
        <p>
          Edad: <br />
          <strong>{age}</strong>
        </p>
        <p>
          Fecha de nacimiento: <br />
          <strong>{birthdate}</strong>
        </p>
        {origin ? (
          <p>
            Origen: <br />
            <strong>{formatOrigin(origin)}</strong>
          </p>
        ) : (
          ""
        )}
        <NavLink to={`/${username}`}>{`@${username}`}</NavLink>
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;
