import React, { useState, useEffect } from 'react';
import { Menu, PageHeader, Input } from 'antd';
import { CheckCircleOutlined, AppstoreAddOutlined } from '@ant-design/icons';


const Listas = ({ listas, onSelectedLista, listSelected, setListSelected  }) => {
  const [ nameNewList, setNameNewList ] = useState('');
  const items = listas.map(lista => ({
    key: lista.id_lista,
    icon: <CheckCircleOutlined />,
    label: lista.nombre_lista
  }));
  return(
    <>
      <PageHeader
        className='site-page-header'
        title='Mis listas'
      />
      <Menu
        onClick={list => listSelected === list.key ? setListSelected(null) : setListSelected(list.key)}
        mode='vertical'
        items={items}
      />
      <div className='NewList'>
        <AppstoreAddOutlined />
        <Input
          placeholder={'Agregar nueva lista'}
          bordered={false}
          onPressEnter={e => {
            console.log(e.target.value);
            setNameNewList('');
          }}
          onChange={e => setNameNewList(e.target.value)}
          value={nameNewList}
        />
      </div>
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