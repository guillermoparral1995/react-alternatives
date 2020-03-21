import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = ({ message }) => (
  <div>
    <h1>{message || "Ups! Hubo un error al cargar la página"}</h1>
    <NavLink to="/">Volver al menú principal</NavLink>
  </div>
);

export default ErrorPage;
