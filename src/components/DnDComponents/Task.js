import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="border border-gray-400 rounded-lg p-2 mb-2 bg-gray-200"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
            {task.content}
          {/* <Droppable droppableId={task.id}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {task.content}
                {provided.placeholder}
              </div>
            )}
          </Droppable> */}
        </div>
      )}
    </Draggable>
  );
};

export default Task;

