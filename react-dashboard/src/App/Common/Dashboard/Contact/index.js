import React from 'react';
import { NavLink } from 'react-router-dom';
import { withI18n } from '../../../I18n';
import './styles.scss';

const Contact = ({name, username, img_src, i18n: { lang }}) => <div className="contact-container">
    <img src={`/${img_src}`}></img>
    <p>{name}</p>
    <NavLink to={`/${username}?lang=${lang}`}>{`@${username}`}</NavLink>
  </div>;

export default withI18n(Contact);