import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() showIcon: boolean = false;
  @Input() icon: string;
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (!this.disabled) {
      this.btnClick.emit();
    }
  }
}
