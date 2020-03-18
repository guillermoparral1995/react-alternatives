import React from 'react';

const SideBar = ({ name, nickname, username, age, birthdate, origin}) => {

  const formattedName = (name) => name ? `${name.toLowerCase().split(' ').join('-')}.jpg` : '';

  return <div>
    <img src={`/${formattedName(name)}`} />
    <h3>{nickname}</h3>
    <h4>{`Nombre completo: ${name}`}</h4>
    <a href={`/${username}`}>{`@${username}`}</a>
  </div>
}

export default SideBar;