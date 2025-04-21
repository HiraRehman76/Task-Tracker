import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onAddTask: EventEmitter<void> = new EventEmitter();
  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.onAddTask.emit();
  }
}
