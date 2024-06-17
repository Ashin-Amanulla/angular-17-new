import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'my-host',
  standalone: true,
  imports: [],
  host: {
    '[class.active]': 'isActive',
    '(click)': 'onHostClick()'
  },
  templateUrl: './my-host.component.html',
  styleUrl: './my-host.component.scss'
})
export class MyHostComponent {

  isActive = false;
  // Using @HostBinding to bind a class to the host element
  @HostBinding('class.highlighted') isHighlighted = false;

  // Using @HostBinding to bind a style to the host element
  @HostBinding('style.border') borderStyle: string | null = null;

  @HostListener('mouseover') onMouseOver() {
    this.isActive = true;
    this.isHighlighted = true;
    this.borderStyle = '2px solid blue';
  }
  @HostListener('mouseout') onMouseOut() {
    this.isActive = false;
    this.isHighlighted = false;
    this.borderStyle = null;
  }

  onHostClick() {
    alert('Host element clicked!');
  }


}
