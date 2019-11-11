import React, { Component } from "react";

export const SignUp = () => {
  return (
    <form>
      <i className="fas fa-lock"></i>
      <div className="form__wrapper">
        <label htmlFor="firstname">Imię</label>
        <input type="text" id="firstname" required placeholder="imię" />
        <label htmlFor="lastname">Nazwisko</label>
        <input type="text" id="lastname" required placeholder="nazwisko" />
      </div>
      <div className="form__wrapper">
        <label htmlFor="mail">E-mail</label>
        <input type="mail" id="mail" required placeholder="mail" />
        <label htmlFor="password">Hasło</label>
        <input type="password" id="password" required placeholder="hasło" />
      </div>
      <input type="submit" value="Wyślij" />
    </form>
  );
};
