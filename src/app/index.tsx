/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

// new code lines
// eslint-disable-next-line @typescript-eslint/no-redeclare
// import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'styles/App.css';
import { Login } from './Login';
import { Register } from './Register';
export function App() {
  const [currentForm, setCurrentForm] = React.useState('login');

  const toggleForm = formName => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
