import { AppComponent } from "../app.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: 'all', component: AppComponent },
    { path: 'active', component: AppComponent },
    { path: 'completed', component: AppComponent },
]