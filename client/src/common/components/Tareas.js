import React, { useState, useEffect } from 'react';
import { Menu, PageHeader } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Task from './Task';

const onDragEnd = (result)  => {
  const { source, destination } = result;
  console.log(result);
}

const Tareas = ({ tasks }) => {
  return(
    <>
      <PageHeader
        title='Mis Tareas (Lista 2)'
      />
      <div className='TareasContainer'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable key={'PENDIENTE'} droppableId={`${'PENDIENTE'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='PENDIENTE' />
                {tasks.filter(task => task.nombre_estado === 'PENDIENTE').map(task => (
                  <Draggable
                    key={task.id_nota}
                    draggableId={task.id_nota}
                    index={task.id_nota}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          <Droppable key={'EN REVISIÓN'} droppableId={`${'EN REVISIÓN'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='EN REVISIÓN' />
                {tasks.filter(task => task.nombre_estado === 'EN REVISIÓN').map(task => (
                  <Draggable
                    key={task.id_nota}
                    draggableId={task.id_nota}
                    index={task.id_nota}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          <Droppable key={'TERMINADO'} droppableId={`${'TERMINADO'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='TERMINADO' />
                {tasks.filter(task => task.nombre_estado === 'TERMINADO').map(task => (
                  <Draggable
                    key={task.id_nota}
                    draggableId={task.id_nota}
                    index={task.id_nota}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
      nombre_estado: 'TERMINADO',
      fecha: '2022-13-09',
    }
  ]
}

export default Tareas;