import React, { useState } from 'react';
import { Menu, PageHeader, Input, Button } from 'antd';
import { CheckCircleOutlined, AppstoreAddOutlined } from '@ant-design/icons';

import { addList, deleteList } from '../helpers/api-helpers';

const Listas = ({ listas, setListSelected, fetchData, tasks  }) => {
  const [ nameNewList, setNameNewList ] = useState('');
  const items = listas.map(lista => ({
    key: lista.id_lista,
    icon: <CheckCircleOutlined />,
    label: (
      <>
        {lista.nombre_lista} 
        {(!!tasks[lista.id_lista] && tasks[lista.id_lista].notas.length === 0) && (
          <Button
            type='link'
            size='small'
            style={{color: '#e91e63'}}
            onClick={() => {
              deleteList({
                id_list: lista.id_lista
              })
                .then(() => fetchData())
                .catch(e => console.log(e));
            }}
          >
            Eliminar
          </Button>
        )}
      </>
    )
  }));
  return(
    <>
      <PageHeader
        className='site-page-header'
        title='Mis listas'
      />
      <Menu
        onClick={list => setListSelected(items.find(item => item.key == list.key))}
        mode='vertical'
        items={items}
      />
      <div className='NewList'>
        <AppstoreAddOutlined />
        <Input
          placeholder={'Agregar nueva lista'}
          bordered={false}
          onPressEnter={e => {
            addList({ nombre_lista: e.target.value})
              .then(() => fetchData())
              .catch(e => console.log(e))
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