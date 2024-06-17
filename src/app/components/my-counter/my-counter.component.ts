import { Component, signal } from '@angular/core';
import { CounterService } from '../../state/counter.service';
import { MyCounterButtonComponent } from '../../ui/my-counter-button/my-counter-button.component';

@Component({
  selector: 'my-counter',
  standalone: true,
  imports: [MyCounterButtonComponent],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss'
})
export class MyCounterComponent {

  constructor(public counterService: CounterService) {}

}
