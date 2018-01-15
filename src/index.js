import React from 'react';
import App from './App';
import SingleCake from './components/SingleCake';
import AddCake from './components/AddCake';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom'

render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/add" component={AddCake}/>
      <Route path="/detail/:id" component={SingleCake}/>
    </div>
  </Router>
), document.getElementById('root'))
