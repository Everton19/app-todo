import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputItemComponent } from './components/todo-input-item/todo-input-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputItemComponent,
    TodoListComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
