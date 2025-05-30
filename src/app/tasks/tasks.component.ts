import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskFormData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  selectedUserId?: string;
  addNewTaskCompActive?: boolean;

  constructor(private tasksService: TasksService) {}

  //this is for
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  //this method is for when the use COMPLETES a TASK
  onSelectCompletTask(id: string) {}

  onStartAddTask(active: boolean) {
    this.addNewTaskCompActive = !active;
  }

  onCancelAddTask(active: boolean) {
    this.addNewTaskCompActive = active;
  }
}
