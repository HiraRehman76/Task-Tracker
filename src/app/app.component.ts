import { Component } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAddTask: boolean = false;

  constructor(private taskService: TaskService) {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.showAddTask = false;
    });
  }
}
