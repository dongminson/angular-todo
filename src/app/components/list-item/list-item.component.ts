import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { switchMap, map } from 'rxjs/operators';


@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    public editTodoContent: string;
    public todos$: Observable<Todo[]>;
    public filter$: Observable<string>;
    public edit$: Observable<string>;

    constructor(private todoService: TodoService) {
        this.editTodoContent = '';
        this.todos$ = this.todoService.getTodos();
        this.filter$ = this.todoService.getFilter();
        this.edit$ = this.todoService.getEdit();
        this.todoService.initTodo();
    }

    ngOnInit(): void {
    }

    getFilteredTodos(): Observable<Todo[]> {
        return this.filter$.pipe(
            switchMap(filterValue => {
                return this.todos$.pipe(
                    map(todos => {
                        if (filterValue === 'all') {
                            return todos;
                        } else if (filterValue === 'active') {
                            return todos.filter(todo => !todo.completed);
                        } else if (filterValue === 'completed') {
                            return todos.filter(todo => todo.completed);
                        } else {
                            return todos;
                        }
                    })
                );
            })
        );
    }

    setEdit(edit: string) {
        this.todoService.setEdit(edit);
        this.editTodoContent = '';
    }

    setEditContent(event:Event) {
        this.editTodoContent = (event.target as HTMLTextAreaElement).value;
    }

    updateTodo(id: string, content: string, completed: boolean) {
        this.todoService.updateTodo(id, content, completed);
        this.editTodoContent = '';
        this.setEdit('');
    }

    removeTodo(id: string, content: string) {
        if (confirm(`Do you want to remove ${content} ?`)) {
            this.todoService.removeTodo(id);
        }
    }

}
