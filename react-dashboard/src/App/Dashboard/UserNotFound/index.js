import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNotFound = () => <div>
  <h1>Ups! Este usuario no existe!</h1>
  <NavLink to='/'>Volver al menú principal</NavLink>
</div>

export default UserNotFound;