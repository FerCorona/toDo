import React, { useState, useEffect } from 'react';
import { Menu, PageHeader } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


const Listas = ({ listas, onSelectedLista }) => {
  const items = listas.map(lista => ({
    key: lista.id_lista,
    icon: <UnorderedListOutlined />,
    label: lista.nombre_lista
  }))
  return(
    <>
      <PageHeader
        className='site-page-header'
        title='Mis listas'
      />
      <Menu
        onClick={onSelectedLista}
        mode='vertical'
        items={items}
      />
    </>
  );
};

Listas.defaultProps = {
  listas: [
    {
      id_lista: '123',
      nombre_lista: 'Lista 1'
    },
    {
      id_lista: '1576423',
      nombre_lista: 'Lista 2'
    },
    {
      id_lista: '1u56723',
      nombre_lista: 'Lista 3'
    },
    {
      id_lista: '127533',
      nombre_lista: 'Lista 4'
    },
    {
      id_lista: '3666',
      nombre_lista: 'Lista 5'
    }
  ],
  onSelectedLista: lista => console.log(lista)
}

export default Listas;