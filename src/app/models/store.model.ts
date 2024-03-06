import { Todo } from './todo.model'

export interface AppState {
    todos: Todo[];
    filter: string;
    edit: string;
}

export interface RootStore {
    todos: AppState
}
