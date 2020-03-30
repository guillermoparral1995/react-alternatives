import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { withI18n } from '../I18n';

import './styles.scss';

const HomePage = ({ getText }) => {
  const [search, setSearch] = useState('');

  const handleTyping = (e) => {
    const value = e.target.value;
    setSearch(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return <Redirect to={`/${search}`}></Redirect>
  }

  return <main>
    <section className="greeting">
      <h1>{getText('home-page_title')}</h1>
    </section>
    <section className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="A quién buscás?" onChange={(e) => handleTyping(e)}/>
        <NavLink to={`/${search}`}>
          <button>{getText('home-page_search')}</button>
        </NavLink>
      </form>
    </section>
    <section className="unregistered">
      <p>{getText('home-page_register_text')}</p>
      <NavLink to={'/new'}>
        <button>{getText('home-page_register_cta')}</button>
      </NavLink>
    </section>
  </main>
}

export default withI18n(HomePage);
