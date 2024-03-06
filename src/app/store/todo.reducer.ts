import { createReducer, on } from '@ngrx/store';
import { addTodo, updateTodo, removeTodo, setFilter, setEdit, initTodo } from './todo.actions';
import { AppState } from '../models/store.model';
import { Todo } from '../models/todo.model';

const initialState: AppState = {
    todos: [{ id: '1', completed: false, content: 'test' }],
    filter: 'all',
    edit: '',
};

const storage = {
    load () {
        return JSON.parse(localStorage.getItem('store') || '[]' )
    },
    save (data: Todo[]) {
        localStorage.setItem('store', JSON.stringify(data))
    }
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => {
        const newTodos = [...state.todos, todo]
        storage.save(newTodos);
        return { ...state, todos: newTodos };
    }),
    on(updateTodo, (state, { id, content, completed }) => {
        const newTodos = state.todos.map((todo) => {
        if(id === todo.id) {
            return {id, content, completed}
        } else {
            return todo
        }
        })
        storage.save(newTodos);
        return { ...state, todos: newTodos }
    }),
    on(removeTodo, (state, { id }) => {
        const newTodos = state.todos.filter((todo) => {
            return id !== todo.id
        })
        storage.save(newTodos);
        return { ...state, todos: newTodos }
    }),
    on(setFilter, (state, { filter }) => {
        return { ...state, filter: filter }
    }),
    on(setEdit, (state, { edit }) => {
        return { ...state, edit: edit }
    }),
    on(initTodo, (state) => {
        const newTodos = storage.load();
        return { ...state, todos: newTodos };
    }),
);
