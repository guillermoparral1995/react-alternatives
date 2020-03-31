import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { withI18n } from '../I18n';

import './styles.scss';

const HomePage = ({ i18n: { getText, lang } }) => {
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
      <h1>{getText('home-page_title', lang)}</h1>
    </section>
    <section className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder={getText('home-page_search_placeholder', lang)} onChange={(e) => handleTyping(e)}/>
        <NavLink to={`/${search}?lang=${lang}`}>
          <button>{getText('home-page_search', lang)}</button>
        </NavLink>
      </form>
    </section>
    <section className="unregistered">
      <p>{getText('home-page_register_text', lang)}</p>
      <NavLink to={`/new?lang=${lang}`}>
        <button>{getText('generic_register', lang)}</button>
      </NavLink>
    </section>
  </main>
}

export default withI18n(HomePage);
