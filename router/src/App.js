import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      {/* 
        Route : 컴포넌트 보이는 영역
        / 가 중복이라 계속 홈이 뜸, exact={true} 정확히 일치할 때만 보여줘라 
      */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default App;