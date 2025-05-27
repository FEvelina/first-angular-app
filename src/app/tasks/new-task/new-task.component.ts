import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) addButtonActive!: boolean;
  @Input({ required: true }) userId!: string;
  @Output() addTask = new EventEmitter<boolean>();

  onAddNewTask() {
    this.addTask.emit(true);
  }
}
