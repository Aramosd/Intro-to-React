import React from 'react';
import Nav from '../Nav';
import Main from '../Main';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
