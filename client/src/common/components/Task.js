import React, { useState } from 'react';
import { Card, DatePicker, Input, Button } from 'antd';
import moment from 'moment';

import { deleteNote, updateTask } from '../helpers/api-helpers';

const Task = ({ id_nota, nombre_nota, desc_nota, fecha, id_estado_nota, fetchData }) => {
  const [ nombreU, setNombreU ] = useState(nombre_nota);
  const [ desc, setDesc ] = useState(desc_nota);
  return(
    <Card
      title={<Input bordered={false} value={nombreU} onChange={e => setNombreU(e.target.value)} />}
      extra={<DatePicker value={moment(fecha, 'YYYY-MM-DD')} bordered={false} picker='date' allowClear={false} disabled />}
      size='small'
      id={id_nota}
    >
      <Input bordered={false} value={desc} onChange={e => setDesc(e.target.value)} />
      {
        (nombreU !== nombre_nota || desc !== desc_nota) && (
          <Button
            type='link'
            size='small'
            style={{color: '#ffb300'}}
            onClick={() => {
              updateTask({
                id_nota,
                nombre_nota: nombreU,
                desc_nota: desc,
                id_estado_nota
              })
              .then(() => fetchData())
              .catch(e => console.log(e));
            }}
          >
            Guardar cambios
          </Button>
        )
      }
      <Button
        type='link'
        size='small'
        onClick={() => {
          deleteNote({
            id_nota
          })
          .then(() => fetchData())
          .catch(e => console.log(e));
        }}
      >
        Eliminar
      </Button>
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