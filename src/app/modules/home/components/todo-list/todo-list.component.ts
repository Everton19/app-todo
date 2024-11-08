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

  public deleteItem(event: number):void {
    this.taskList.splice(event, 1);
  }

  public deleteAll(){
    const confirmDialog = window.confirm('Are you sure you want to delete all tasks?');

    if(confirmDialog)
     this.taskList = [];
  }
}
