/* eslint-disable no-console */
import React from 'react';

import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export function NoAuthRoutes({ children }) {
  const isLogged = !!localStorage.getItem('@GymFull:token');

  return !isLogged ? children : <Navigate to="/" replace />;
}

NoAuthRoutes.defaultProps = {
  children: null,
};

NoAuthRoutes.propTypes = {
  children: propTypes.node,
};
