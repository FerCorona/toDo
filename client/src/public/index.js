import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

import Container from '../common/components/Container';
import LogIn from '../common/components/LogIn';
import Registro from '../common/components/Registro';

require('antd/dist/antd.css');
require('../common/stylesheets/general.scss');

ReactDOM.render((
  <Router history={history} >
    <Routes>
      <Route path='/app' element={<Container />} />
      <Route path='/' element={<Container />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/registro' element={<Registro />} />
    </Routes>
  </Router>
), document.getElementById('app'));
