import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  @Output() onToggle: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  faBell = faBell;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(task: Task) {
    this.onDelete.emit(task);
  }

  onToggleReminder(task: Task) {
    this.onToggle.emit(task);
  }
}
