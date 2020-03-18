import React from 'react';
import { formattedName } from '../../../utils';

const SideBar = ({ name, nickname, username, age, birthdate, origin}) => {
  return <div>
    <img src={`/${formattedName(name)}.jpg`} />
    <h3>{nickname}</h3>
    <h4>{`Nombre completo: ${name}`}</h4>
    <a href={`/${username}`}>{`@${username}`}</a>
  </div>
}

export default SideBar;