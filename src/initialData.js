const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'row' },
    'task-2': { id: 'task-2', content: 'colums' },
    'task-3': { id: 'task-3', content: 'demo items' },
    'task-4': { id: 'task-4', content: 'image' },
    'task-5': { id: 'task-5', content: 'input' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Side bar',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Drop here',
      taskIds: [],
    },
    

    
    
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;

  