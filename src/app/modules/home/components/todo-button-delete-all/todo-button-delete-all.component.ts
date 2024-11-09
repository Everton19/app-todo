import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrl: './todo-button-delete-all.component.scss'
})
export class TodoButtonDeleteAllComponent {
  @Output() deleteAll = new EventEmitter<void>();

  public deleteAllTasks() {
    this.deleteAll.emit();
  }
}
