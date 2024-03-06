import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    public filter$: Observable<string>;

    constructor(private todoService: TodoService) {
        this.filter$ = this.todoService.getFilter();
    }

    getLinkProperty(link:string) : Observable<any | string> {
        return this.filter$.pipe(
            map((filterValue: string) => {
                if (filterValue === link) {
                    return 'active';
                } else {
                    return '';
                }
            })
        );
    }

    setFilter(filter:string) {
        this.todoService.setFilter(filter);
    }

}
