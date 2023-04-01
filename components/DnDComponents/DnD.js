import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DnD = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { id: 'column-1', width: 100 },
    { id: 'column-2', width: 100 },
    { id: 'column-3', width: 100 },
  ]);
  const [data, setData] = useState({ items, rows, columns });

  const handleDragEnd = (result) => {
    // handle drag and drop logic here
  };

  const handleAddRow = (index) => {
    // create new empty row at specified index
    const newRow = [];
    setRows([...rows.slice(0, index), newRow, ...rows.slice(index)]);
  };

  const handleAddColumn = (index) => {
    // create new empty column at specified index
    const newColumn = { id: `column-${columns.length + 1}`, width: 100 };
    setColumns([...columns.slice(0, index), newColumn, ...columns.slice(index)]);
  };

  const handleResizeColumn = (index, width) => {
    // update column width
    const updatedColumns = [...columns];
    updatedColumns[index].width = width;
    setColumns(updatedColumns);
  };

  const handleItemClick = (id) => {
    // show item id in popup modal
    alert(id);
  };

  const handleDataChange = () => {
    // update data state variable
    setData({ items, rows, columns });
  };

  return (
    <div className="grid-container">
      <div className="sidebar">
        <div className="sidebar-item draggable" draggable="true">
          Item 1
        </div>
        <div className="sidebar-item draggable" draggable="true">
          Item 2
        </div>
        <div className="sidebar-item draggable">
          <div className="item-content">Column</div>
        </div>
        <div className="sidebar-item draggable">
          <div className="item-content">Row</div>
        </div>
      </div>
      <div className="main-container" ref={droppableProvided.innerRef}>
        {grid.map((row, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`}>
            {row.map((item, colIndex) => (
              <Draggable key={item.id} draggableId={item.id} index={colIndex}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`grid-item${snapshot.isDragging ? ' dragging' : ''}`}
                  >
                    <div className="item-content">{item.id}</div>
                    <div
                      className="remove"
                      onClick={() => handleRemoveItem(rowIndex, colIndex)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        ))}
        {droppableProvided.placeholder}
      </div>
      <div className="textarea-container">
        <textarea readOnly rows={10} value={JSON.stringify(Grid)}></textarea>
      </div>
    </div>
  );
}  

export default DnD;