import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import './App.scss';

export const createRoutes = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div className="App">
        <Route path="/" component={Sidebar} />
        <main>
          <Route path="/" component={Header} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    </Router>
  );
};
