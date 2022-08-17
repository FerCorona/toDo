import React, { useState, useEffect } from 'react';
import { Menu, PageHeader } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import Task from './Task';


const Tareas = ({ tasks }) => {
  return(
    <>
      <PageHeader
        title='Mis Tareas (Lista 2)'
      />
      <div className='TareasContainer'>
        <div className='RowTask'>
          <PageHeader title='PENDIENTE' />
          <Task />
          <Task />
          <Task />
        </div>
        <div className='RowTask'>
          <PageHeader title='EN REVISIÓN' />
          <Task />
        </div>
        <div className='RowTask'>
          <PageHeader title='TERMINADO' />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
};

Tareas.defaultProps = {
  id_lista: '123',
  nombre_lista: 'Lista 1',
  tasks: [
    {
      id_nota: 'rgbbe',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rg5667bbe',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgbg45be',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgb56875be',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    }
  ]
}

export default Tareas;