import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const addTodo = createAction('Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('Update Todo', props<{ id: string, content: string, completed: boolean  }>());
export const removeTodo = createAction('Remove Todo', props<{ id: string }>());
export const setFilter = createAction('Set Filter', props<{ filter: string }>());
export const setEdit = createAction('Set Edit', props<{ edit: string }>());
export const initTodo = createAction('Init Todo');
