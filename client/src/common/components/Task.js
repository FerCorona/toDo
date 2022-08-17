import React, { useState, useEffect } from 'react';
import { Card, DatePicker, Input } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


const Task = ({ id_nota, nombre_nota, desc_nota, nombre_estado, fecha }) => {
  return(
    <Card
      title={<Input value={nombre_nota} bordered={false} />}
      extra={<DatePicker bordered={false} picker='date' />}
      size='small'
    >
      <Input value={desc_nota} bordered={false} />
    </Card>
  );
};

Task.defaultProps = {
  id_nota: 'rgbbe',
  nombre_nota: 'nota 1',
  desc_nota: 'desc nota',
  nombre_estado: 'PENDIENTE',
  fecha: '2022-13-09',
};

export default Task;