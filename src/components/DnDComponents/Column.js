import { useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

function Column({ tasks, column }) {
  const droppableRef = useRef(null);

  return (
    <div className={`${column.title==='Drop here'?"flex-1 h-96 w-full":"h-screen w-72 "} `}>
    <div className={`${column.title==='Drop here'?"border border-green-500":"border border-black bg-gray-500"}  m-2 h-full`}> 
      <h3 className="p-2">{column.title}</h3>
      <Droppable droppableId={column.id} ref={droppableRef}>
        {(provided, snapshot) => (
          <div
            className={`p-2 ${snapshot.isDraggingOver ? 'bg-gray-100' : ''}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task  key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    </div>
  );
}

export default Column;





// import React from 'react'
// import { Droppable,Draggable } from 'react-beautiful-dnd';

// function Column({tasks,column}) {
//     console.log("This is tasks:",tasks,column);
//   return (
//     <div className='m-2 border-black border-2'>
//     <div className='p-2'>Column {column.title}</div>
//     <Droppable droppableId={column.id} key={column.id}>
//         {(provided) => (
//         <div
//         ref={provided.innerRef}
//         {...provided.droppableProps}
//         className='p-2'>
//             {/* This is the tasks components */}
//         {tasks.map((task,index) => (
//             <Draggable draggableId={task.id} index={index}>
//                 {(provided) => (
//                     <div key={task.id} className='p-2 border-black border-2'
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     ref={provided.innerRef}
//                     >
//                     {task.content}
//                     </div>
//                 )}
//             {/* <div key={task.id} className='p-2 border-black border-2'>
//                 {task.content}
//                 </div> */}
//             </Draggable>
//         ))}
//         {/* this is the placeholder of the tasks as a child*/}
//         {provided.placeholder}
//     </div>)}
//     {/* <div className='p-2'>
//         {tasks.map((task) => (
//             <div key={task.id} className='p-2 border-black border-2'>
//                 {task.content}
//                 </div>
//         ))}
//     </div> */}
//     </Droppable>
//     </div>
//   )
// }

// export default Column