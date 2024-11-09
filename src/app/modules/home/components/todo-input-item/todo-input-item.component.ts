import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-item',
  templateUrl: './todo-input-item.component.html',
  styleUrl: './todo-input-item.component.scss'
})
export class TodoInputItemComponent {
  @Output() public emitItemTaskList = new EventEmitter<string>();

  public addItemTaskList:string = "";

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
