import { Component, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type UserTasks } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() userTask!: UserTasks;

  private tasksServices = inject(TasksService);
  //for when you click on the Complete button
  onSelectCompletTask() {
    this.tasksServices.removeTask(this.userTask!.id);
  }
}
