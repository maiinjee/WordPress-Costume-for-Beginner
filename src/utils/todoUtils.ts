import { Todo } from '../types/todo';

export const createTodo = (text: string): Todo => ({
  id: crypto.randomUUID(),
  text,
  completed: false,
  createdAt: new Date()
});

export const getCompletedCount = (todos: Todo[]): number => 
  todos.filter(todo => todo.completed).length;