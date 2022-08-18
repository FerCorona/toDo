import React, { useState, useEffect } from 'react';
import { Avatar, Image, Result } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { isMobile }  from '../helpers/helpers';

import Listas from './Listas';
import Tareas from './Tareas';

const Container = ({ }) => {
  const [ listSelected, setListSelected ] = useState(null);
  const addTask = task => {

  };
  return(
    <>
      <div className='NavBar'>
        <div className='Margin'>
          <MenuOutlined />
        </div>
        <div className='Margin'>
          Fernando Garcia Corona
          <Avatar src={<Image src='https://joeschmoe.io/api/v1/random' style={{ width: 32 }} />} />
        </div>
      </div>
      <div className='DataContainer'>
        {
          isMobile() ? (
            <>
            {
              listSelected ? (
                <div className='Tareas'>
                  <Tareas setListSelected={setListSelected} addTask={addTask} /> 
                </div>
              ) : (
                <div className='Listas'>
                  <Listas listSelected={listSelected} setListSelected={setListSelected} />
                </div>
              )
            }
            </>
          ) : (
            <>
              <div className='Listas'>
                <Listas listSelected={listSelected} setListSelected={setListSelected} />
              </div>
              <div className='Tareas'>
                {listSelected ? <Tareas setListSelected={setListSelected} addTask={addTask} /> : (
                  <Result
                    status='info'
                    title='Selecciona una lista para ver tus tasks.'
                  />
                )}
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

export default Container;