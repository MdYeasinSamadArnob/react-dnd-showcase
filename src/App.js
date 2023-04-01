import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './components/DnDComponents/Column';

function App() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    // TODO: reorder our column
    const {destination,source,draggableId} = result;
    if(!destination){
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      // user dropped the item in the same place
      return;
    }

    const start = initialData.columns[source.droppableId];
    const finish = initialData.columns[destination.droppableId];
    
    if(start === finish){
      // const newTaskIds = Array.from(start.taskIds);
      const newTaskIds = start.taskIds;

      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn
        },
      }

      console.log(newState);
      setState(newState);
      return;
    }

    // Moving from one list to another
    // const startTaskIds = Array.from(start.taskIds);
    const startTaskIds = start.taskIds;
    startTaskIds.splice(source.index,1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = finish.taskIds;
    finishTaskIds.splice(destination.index,0,draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    console.log(newState);
    setState(newState);

  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex'>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
    </DragDropContext>
   
  );
}

export default App;

