import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const ProfileInfo = ({ name, nickname, username, age, birthdate, origin}) => {
  const formatOrigin = (origin) => {
    const { country, city, neighborhood } = origin;
    return `${neighborhood ? `${neighborhood}, ` : ''}${city}, ${country}`;
  }

  return <div id="profile-info-container">
    <img src={`/${username}.jpg`} />
    <h3>{nickname || name}</h3>
    <p>Nombre completo: <br/><strong>{name}</strong></p>
    <p>Edad: <br/><strong>{age}</strong></p>
    <p>Fecha de nacimiento <br/><strong>{birthdate}</strong></p>
    {origin ? <p>Origen: <br/><strong>{formatOrigin(origin)}</strong></p> : ''}
    <NavLink to={`/${username}`}>{`@${username}`}</NavLink>
  </div>
}

export default ProfileInfo;