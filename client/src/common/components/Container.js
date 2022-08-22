import React, { useState, useEffect } from 'react';
import { Avatar, Image, Result, Popover } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { getListas, getNotesByList } from '../helpers/api-helpers';

import Listas from './Listas';
import Tareas from './Tareas';
import ListenerMobile from './ListenerMobile';

const Container = () => {
  const [ mobile, setMobile ] = useState(false);
  const [ listSelected, setListSelected ] = useState({ key: null});
  const [ listas, setListas ] = useState([ ]);
  const [ tasks, setTasks ] = useState({});

  const fetchData = (clean = false) => {
    Promise.all([
      getListas({ id_user: localStorage.getItem('id_user')}),
      getNotesByList({ id_user: localStorage.getItem('id_user') })
    ])
      .then(([ listas, tasks ]) => {
        setListas(listas.data);
        setTasks(tasks.data);
        if (clean) {
          setListSelected({ key: null});
        }
      })
      .catch(e => console.log(e));
  };
  useEffect(fetchData, []); 
  return(
    <>
      <div className='NavBar'>
        <div className='Margin'>
          <MenuOutlined />
        </div>
        <div className='Margin'>
        <Popover
          content={<a onClick={() => {
            window.location = window.location.protocol + '//' + window.location.host + '/login';
            localStorage.removeItem('token');
            localStorage.removeItem('id_user');
            localStorage.removeItem('username');
          }
          }>Cerrar sesión</a>}
          title='Usuario'
          trigger='hover'
        >
          <div className='UserInfo'>
            {localStorage.getItem('username') || ''}
            <Avatar src={<Image src='https://joeschmoe.io/api/v1/random' style={{ width: 32 }} />} />
          </div>
        </Popover>
        </div>
      </div>
      <div className='DataContainer'>
        {
          mobile ? (
            <>
            {
              listSelected.key ? (
                <div className='Tareas'>
                  <Tareas listSelected={listSelected.key} setListSelected={setListSelected} tasks={tasks[listSelected.key]} fetchData={fetchData} />
                </div>
              ) : (
                <div className='Listas'>
                  <Listas listSelected={listSelected} setListSelected={setListSelected} listas={listas} fetchData={fetchData} tasks={tasks} />
                </div>
              )
            }
            </>
          ) : (
            <>
              <div className='Listas'>
                <Listas listSelected={listSelected} setListSelected={setListSelected} listas={listas} fetchData={fetchData} tasks={tasks}/>
              </div>
              <div className='Tareas'>
                {listSelected.key ? <Tareas listSelected={listSelected.key} setListSelected={setListSelected} tasks={tasks[listSelected.key]} fetchData={fetchData} /> : (
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
      <ListenerMobile onChange={setMobile} />
    </>
  );
};



export default Container;