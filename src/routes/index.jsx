import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { NoAuthRoutes } from "./NoAuthRoutes";

import * as Pages from "../pages";

const routes = [
  { path: "/login", element: <Pages.Login />, isPrivate: false, noAuth: true },
  { path: "/", element: <Pages.Home />, isPrivate: true },
];

function getElementType(route) {
  const { isPrivate, noAuth, element } = route;
  if (isPrivate) return <PrivateRoutes>{element}</PrivateRoutes>;
  if (noAuth) return <NoAuthRoutes>{element}</NoAuthRoutes>;
  return element;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Pages.Home />
            </PrivateRoutes>
          }
        />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={getElementType(route)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
