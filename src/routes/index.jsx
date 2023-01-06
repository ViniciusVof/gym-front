import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { NoAuthRoutes } from './NoAuthRoutes';
import Home from '../pages/Home';


const routes = [
 
  { path: '/login', element: <Login />, isPrivate: false, noAuth: true },
  { path: '/', element: <Home />, isPrivate: true },
  
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
                <Home />
              </PrivateRoutes>
          }
        />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
                getElementType(route)
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}