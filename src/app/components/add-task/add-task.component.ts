import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../../Task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() showAddTask: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      text: ['', Validators.required],
      day: ['', Validators.required],
      reminder: [false]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        ...this.taskForm.value,
        id: Math.floor(Math.random() * 10000) // Temporary ID until saved to server
      };

      this.onAddTask.emit(newTask);
      this.taskForm.reset();
      this.onClose.emit();
    }
  }

  onCloseClick() {
    this.onClose.emit();
  }
} 