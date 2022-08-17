import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
require('antd/dist/antd.css');

import { getSaludo } from '../helpers/api-helpers';

const Container = ({ }) => {
  const [ notas, setNotas ] = useState([]);
  useEffect(() => {
    getSaludo()
    .then(data => setNotas(data.data))
    .catch(err => console.log(err));
  });
  return(
    <div>App {notas.map(note => note.nombre_nota)}</div>
  );
};

export default Container;