import * as TodoInterfaces from './todo.interface';

export const dummyData: TodoInterfaces.ITodo[] = [
  {
    todo_id: 1,
    status: 'busy',
    title: 'demo todo 1',
    todoItems: [
      {
        complete: false,
        description: 'demo todo 1 todoitem 1',
        todoitem_id: 1
      },
      { complete: true, description: 'demo todo 1 todoitem 1', todoitem_id: 2 }
    ]
  },
  {
    todo_id: 2,
    status: 'new',
    title: 'demo todo 2',
    todoItems: [
      {
        complete: false,
        description: 'demo todo 2 todoitem 1',
        todoitem_id: 3
      },
      { complete: true, description: 'demo todo 2 todoitem 2', todoitem_id: 4 }
    ]
  }
];
