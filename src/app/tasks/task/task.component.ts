import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTasks } from './task.model';

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
  onSelectCompletTask(id?: string) {
    this.complete.emit(id);
  }
}
