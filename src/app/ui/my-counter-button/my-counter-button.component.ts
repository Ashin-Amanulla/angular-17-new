import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './my-counter-button.component.html',
  styleUrl: './my-counter-button.component.scss'
})
export class MyCounterButtonComponent {
  @Output() action = new EventEmitter<void>();

  handleClick() {
    this.action.emit();
  }
}
