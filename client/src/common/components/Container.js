import React, { useState, useEffect } from 'react';
import { Avatar, Image, Result } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { isMobile }  from '../helpers/helpers';
import { getListas, getNotesByList } from '../helpers/api-helpers';

import Listas from './Listas';
import Tareas from './Tareas';

const Container = ({ }) => {
  const [ listSelected, setListSelected ] = useState({ key: null});
  const [ listas, setListas ] = useState([ ]);
  const [ tasks, setTasks ] = useState({});
  const fetchData = (clean = false) => {
    Promise.all([
      getListas(),
      getNotesByList()
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
  useEffect(() => {
    fetchData();
  }, []); 
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
    </>
  );
};

export default Container;