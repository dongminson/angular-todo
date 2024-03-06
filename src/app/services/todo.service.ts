import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { uuidv4 } from '../utils/todo.utils';
import { Todo } from '../models/todo.model';
import { RootStore } from '../models/store.model';
import { addTodo, updateTodo, removeTodo, setFilter, setEdit, initTodo } from '../store/todo.actions';
import { todoSelector, filterSelector, editSelector } from '../store/todo.selectors';


@Injectable()
export class TodoService {
    constructor(private store: Store<RootStore>) {}

    getTodos(): Observable<Todo[]> {
        return this.store.pipe(select(todoSelector));
    }

    getFilter(): Observable<string> {
        return this.store.pipe(select(filterSelector));
    }

    getEdit(): Observable<string> {
        return this.store.pipe(select(editSelector));
    }

    addTodo(content: string) {
        const newTodo: Todo = {
            id: uuidv4(),
            content: content,
            completed: false
        };

        this.store.dispatch(addTodo({ todo: newTodo }));
    }

    updateTodo(id: string, content: string, completed: boolean) {
        this.store.dispatch(updateTodo({ id, content, completed }));
    }

    removeTodo(id: string) {
        this.store.dispatch(removeTodo({ id }));
    }

    setFilter(filter:string) {
        this.store.dispatch(setFilter({ filter }));
    }

    setEdit(edit: string) {
        this.store.dispatch(setEdit({ edit }));
    }

    initTodo() {
        this.store.dispatch(initTodo());
    }
}
