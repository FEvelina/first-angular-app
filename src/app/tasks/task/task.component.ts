import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserTasks } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() userTask?: UserTasks;
  @Output() complete = new EventEmitter<string>();

  //for when you click on the Complete button
  onSelectCompletTask() {
    this.complete.emit(this.userTask?.id);
  }
}
