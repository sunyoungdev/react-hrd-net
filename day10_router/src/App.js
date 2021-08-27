import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Page from './components/Page';
import User from './components/User';
import data from './components/data';

const App = () => {
  return (
    <Router>
    <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page">Page</Link></li>
            <li><Link to="/user/html/">html</Link></li>
            <li><Link to="/user/css/">css</Link></li>
            <li><Link to="/user/javascript/">javascript</Link></li>
            <li><Link to="/user/react/">react</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/page"><Page /></Route>
          <Route path="/user/:title"><User data={data} /></Route>
          {/* 
            :임의의 변수 
            사용 가능 
          */}
        </Switch>
    </div>
    </Router>
  );
};

export default App;