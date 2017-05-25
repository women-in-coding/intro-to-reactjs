import React from 'react';

import './Navigation.css';


function Navigation(props) {
  const {routes, routeId, onNavigate} = props;
  const links = routes.map(route => (
    <div
      className={route.id === routeId ? 'link selected' : 'link'}
      onClick={evt => onNavigate(route.id)}
      key={route.id}
    >
      {route.title}
    </div>
  ))
  return (
    <div className="navigation">
      {links}
    </div>
  )
}

export default Navigation;
