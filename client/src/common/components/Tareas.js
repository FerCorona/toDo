import React, { useState, useEffect } from 'react';
import { Menu, PageHeader, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Task from './Task';
import { isMobile }  from '../helpers/helpers';

const onDragEnd = (result)  => {
  const { source, destination } = result;
  console.log(result);
};

const Tareas = ({ tasks, setListSelected, addTask }) => {
  return(
    <>
      <PageHeader
        title='Mis Tareas (Lista 2)'
        onBack={() => setListSelected(null)}
      />
      <div className='TareasContainer'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable key={'PENDIENTE'} droppableId={`${'PENDIENTE'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <div className='HeaderAddContainer'>
                  <PageHeader title='PENDIENTE' />
                  <Button
                    type='link'
                    size='small'
                    onClick={addTask}
                    >
                    + Agregar task
                  </Button>
                </div>
                <div className='TaskScroll'>
                  {tasks.filter(task => task.nombre_estado === 'PENDIENTE').map((task, i) => (
                    <Draggable
                      key={i + 1}
                      draggableId={task.id_nota}
                      index={i + 1}
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
              </div>
            )}
          </Droppable>
          <Droppable key={'EN REVISIÓN'} droppableId={`${'EN REVISIÓN'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='EN REVISIÓN' />
                <div className='TaskScroll'>
                  {tasks.filter(task => task.nombre_estado === 'EN REVISIÓN').map((task, i) => (
                    <Draggable
                      key={i * 10 + 1}
                      draggableId={task.id_nota}
                      index={i * 10 + 1}
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
              </div>
            )}
          </Droppable>
          <Droppable key={'TERMINADO'} droppableId={`${'TERMINADO'}`}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='TERMINADO' />
                <div className='TaskScroll'>
                  {tasks.filter(task => task.nombre_estado === 'TERMINADO').map((task, i) => (
                    <Draggable
                      key={i * 20 + 1}
                      draggableId={task.id_nota}
                      index={i * 20 + 1}
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
      id_nota: 'rgbbe1',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rg5667bbe2',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgbg45be3',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgb56875be4',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'TERMINADO',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgbbe5',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rg5667bbe6',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'EN REVISIÓN',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgbg45be7',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'PENDIENTE',
      fecha: '2022-13-09',
    },
    {
      id_nota: 'rgb56875be8',
      nombre_nota: 'nota 1',
      desc_nota: 'desc nota',
      nombre_estado: 'TERMINADO',
      fecha: '2022-13-09',
    }
  ],
  addTask: () => null
}

export default Tareas;