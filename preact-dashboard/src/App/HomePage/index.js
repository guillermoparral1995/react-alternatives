import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const HomePage = () => {
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
      <h1>Bienvenidx a Dashboard!</h1>
    </section>
    <section className="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="A quién buscás?" onChange={(e) => handleTyping(e)}/>
        <NavLink to={`/${search}`}>
          <button>Buscar!</button>
        </NavLink>
      </form>
    </section>
    <section className="unregistered">
      <p>Aún no te registraste? Hacete una nueva cuenta!</p>
      <NavLink to={'/new'}>
        <button>Registrarse!</button>
      </NavLink>
    </section>
  </main>
}

export default HomePage;
