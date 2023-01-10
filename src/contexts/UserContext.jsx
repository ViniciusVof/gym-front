/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo } from "react";

import jwt_decode from "jwt-decode";

import propTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  function saveUser(token) {
    localStorage.setItem("@GymFull:token", token);
  }

  function getUser() {
    const userParsed = jwt_decode(localStorage.getItem("@GymFull:token"));

    return userParsed;
  }

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/login";
  }

  function getName(type) {
    const username = getUser()?.fullname;
    if (type === "first") {
      return username.split(" ")[0];
    }
    if (type === "firstLetters") {
      const firstLetters = username
        .split(" ")
        .reduce((acc, subname) => acc + subname[0], "");

      return firstLetters;
    }
    if (type === "firstLetter") {
      const firstLetter = username.split(" ")[0].charAt(0);

      return firstLetter;
    }

    return username;
  }

  const valuesUserProvider = useMemo(
    () => ({
      getUser,
      getName,
      saveUser,
      logoutUser,
    }),
    [getUser, getName, saveUser, logoutUser]
  );

  return (
    <UserContext.Provider value={valuesUserProvider}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
