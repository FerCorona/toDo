import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
require('antd/dist/antd.css');

import { getSaludo } from '../helpers/api-helpers';

const Container = ({ }) => {
  const [ message, setMessage ] = useState(null);
  useEffect(() => {
    getSaludo({ nombre: 'Fernando '})
    .then(data => setMessage(data.data))
    .catch(err => console.log(err));
  });
  return(
    <div>App {message}</div>
  );
};

export default Container;