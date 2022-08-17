import React, { useState, useEffect } from 'react';
import { Avatar, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import Listas from './Listas';
import Tareas from './Tareas';

const Container = ({ }) => {
  
  return(
    <>
      <div className='NavBar'>
        <div className='Margin'>
          <MenuOutlined />
        </div>
        <div className='Margin'>
          Fernando Garcia Corona
          <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        </div>
      </div>
      <div className='DataContainer'>
        <div className='Listas'>
          <Listas />
        </div>
        <div className='Tareas'>
          <Tareas />
        </div>
      </div>
    </>
  );
};

export default Container;