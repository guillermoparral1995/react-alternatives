import React from 'react';

const i18n = React.createContext();

export const withI18n = (Component) => (props) => <i18n.Consumer>
  {value => <Component {...props} getText={value}/>}
</i18n.Consumer>

export default i18n;