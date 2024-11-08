import { Component } from '@angular/core';
import { TaskList } from '../../interface/taskList.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public taskList: TaskList[] = [
    {
      task: 'Task 1',
      checked: true
    }
  ];
}
