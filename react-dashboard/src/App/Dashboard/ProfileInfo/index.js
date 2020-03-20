import React from 'react';
import { formattedName } from '../../../utils';

import './styles.scss';

const ProfileInfo = ({ name, nickname, username, age, birthdate, origin}) => {
  const formatOrigin = (origin) => {
    const { country, city, neighborhood } = origin;
    return `${neighborhood ? `${neighborhood}, ` : ''}${city}, ${country}`;
  }
    
  return <div id="profile-info-container">
    <img src={`/${username}.jpg`} />
    <h3>{nickname}</h3>
    <p>Nombre completo: <br/><strong>{name}</strong></p>
    <p>Edad: <br/><strong>{age}</strong></p>
    <p>Fecha de nacimiento <br/><strong>{birthdate}</strong></p>
    {origin ? <p>Origen: <br/><strong>{formatOrigin(origin)}</strong></p> : ''}
    <a href={`/${username}`}>{`@${username}`}</a>
  </div>
}

export default ProfileInfo;