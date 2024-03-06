import { createSelector } from "@ngrx/store";
import { RootStore } from "../models/store.model";
import { Todo } from "../models/todo.model";

const selectTodos = (state: RootStore): any => state.todos.todos;
const selectFilter = (state: RootStore): string => state.todos.filter;
const editFilter = (state: RootStore): string => state.todos.edit;

export const todoSelector = createSelector(
    selectTodos,
    (todos: Todo[]) => todos
);

export const filterSelector = createSelector(
    selectFilter,
    (filter: string) => filter
)

export const editSelector = createSelector(
    editFilter,
    (filter: string) => filter
)
