import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './screens/Main';
import Post from './screens/Post';
import Edit from './screens/Post/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/new" exact>
            <Post />
          </Route>
          <Route path="/edit/:id" exact>
            <Edit />
          </Route>
            <Main />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
