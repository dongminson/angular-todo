import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    public newTodoContent: string;

    constructor(private todoService: TodoService) {
        this.newTodoContent = '';
    }

    ngOnInit(): void {
    }

    setContent(event:Event) {
        this.newTodoContent = (event.target as HTMLTextAreaElement).value;
    }

    addTodo() {
        if (this.newTodoContent.trim()) {
            this.todoService.addTodo(this.newTodoContent);
            this.newTodoContent = '';
        }
    }

}
