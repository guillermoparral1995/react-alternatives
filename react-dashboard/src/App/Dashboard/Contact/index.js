import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Contact = ({name, username, img_src}) => <div className="contact-container">
    <img src={`/${img_src}`}></img>
    <p>{name}</p>
    <NavLink to={`/${username}`}>{`@${username}`}</NavLink>
  </div>;

export default Contact;