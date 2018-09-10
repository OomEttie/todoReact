export interface ITodo {
  todo_id: number;
  status: string;
  title: string;
  todoItems: ITodoItem[];
}

export interface ITodoItem {
  complete: boolean;
  description: string;
  todoitem_id: number;
}

export interface IDashProps {
  todos: ITodo[];
}

export interface IListProps {
  todos: ITodo[];
}
