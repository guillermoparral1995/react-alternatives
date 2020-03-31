import React from "react";
import { NavLink } from "react-router-dom";
import { withI18n } from "../../I18n"

const ErrorPage = ({ message, i18n: { getText, lang } }) => (
  <div>
    <h1>{message || getText('generic_error', lang)}</h1>
    <NavLink to="/">{getText('generic_return', lang)}</NavLink>
  </div>
);

export default withI18n(ErrorPage);
