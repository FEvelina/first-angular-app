export interface UserTasks {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskFormData {
  title: string;
  summary: string;
  date: string;
}
