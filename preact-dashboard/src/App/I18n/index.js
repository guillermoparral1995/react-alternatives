import React from 'react';
import { getText } from './translations';
import { useLocation } from 'react-router-dom';

const i18n = React.createContext();

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const withI18n = (Component) => (props) => <i18n.Consumer>
  {value => <Component {...props} i18n={value}/>}
</i18n.Consumer>

export const I18nProvider = (props) => {
  const query = useQuery();
  const lang = query.get('lang') || 'es';
  return <i18n.Provider value={{ getText, lang }}>
    {props.children}
  </i18n.Provider>
}