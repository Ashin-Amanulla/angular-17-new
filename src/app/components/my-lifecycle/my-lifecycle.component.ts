import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './my-lifecycle.component.html',
  styleUrl: './my-lifecycle.component.scss'
})
export class MyLifecycleComponent {
  @Input() data: any;
  intervalId: any;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.intervalId = setInterval(() => {
      console.log('Interval tick');
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
