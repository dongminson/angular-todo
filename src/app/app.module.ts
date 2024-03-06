import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './services/todo.service';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { todoReducer } from './store/todo.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { routes } from './routes/todo.routes';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        ListItemComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({ todos: todoReducer })
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
    })
export class AppModule { }
