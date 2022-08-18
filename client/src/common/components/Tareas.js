import React, { useState, useEffect } from 'react';
import { Menu, PageHeader, Button } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { addTask, updateTask } from '../helpers/api-helpers';

import Task from './Task';
import { isMobile }  from '../helpers/helpers';

const Tareas = ({ tasks, setListSelected, listSelected, fetchData }) => {
  const taskVerif = tasks ? tasks.notas : [];
  const onDragEnd = (result)  => {
    const { source, destination } = result;
     updateTask({
       id_nota: source.index,
       id_estado_nota: destination.droppableId
     })
     .then(() => fetchData(false))
     .catch(e => console.log(e));
     console.log(id_nota)
  };
  return(
    <>
      { isMobile() && (
        <PageHeader
          title='Mis Tareas (Lista 2)'
          onBack={() => setListSelected({ key: null})}
        />
      )}
      <div className='TareasContainer'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable key={'PENDIENTE'} droppableId={'1'}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <div className='HeaderAddContainer'>
                  <PageHeader title='PENDIENTE' />
                  <Button
                    type='link'
                    size='small'
                    onClick={() => {
                      addTask({
                        id_lista: listSelected
                      })
                      .then(() => fetchData())
                      .catch(e => console.log(e));
                    }}
                    >
                    + Agregar task
                  </Button>
                </div>
                <div className='TaskScroll'>
                  {taskVerif.filter(task => task.nombre_estado === 'PENDIENTE').map((task, i) => (
                    <Draggable
                      key={task.id_nota}
                      draggableId={`${task.id_nota}`}
                      index={task.id_nota}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          {...task} 
                        >
                          <Task {...task} fetchData={fetchData} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable key={'EN REVISIÓN'} droppableId={'2'}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='EN REVISIÓN' />
                <div className='TaskScroll'>
                  {taskVerif.filter(task => task.nombre_estado === 'EN REVISIÓN').map((task, i) => (
                    <Draggable
                    key={task.id_nota}
                    draggableId={`${task.id_nota}`}
                    index={task.id_nota}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          {...task} 
                        >
                          <Task {...task}  fetchData={fetchData} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable key={'TERMINADO'} droppableId={'3'}>
            {(provided, snapshot) => (
              <div className='RowTask' ref={provided.innerRef} {...provided.droppableProps}>
                <PageHeader title='TERMINADO' />
                <div className='TaskScroll'>
                  {taskVerif.filter(task => task.nombre_estado === 'TERMINADO').map((task, i) => (
                    <Draggable
                      key={task.id_nota}
                      draggableId={`${task.id_nota}`}
                      index={task.id_nota}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          {...task} 
                        >
                          <Task {...task}  fetchData={fetchData} />
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
  listSelected: '123',
  nombre_lista: 'Lista 1',
  addTask: () => null
}

export default Tareas;