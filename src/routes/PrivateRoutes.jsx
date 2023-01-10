/* eslint-disable no-console */
import React from "react";

import propTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

export function PrivateRoutes({ children }) {
  const isLogged = !!localStorage.getItem("@GymFull:token");

  return isLogged ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/login" replace />
  );
}

PrivateRoutes.defaultProps = {
  children: null,
};

PrivateRoutes.propTypes = {
  children: propTypes.node,
};
