import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  @Input({transform:addText}) text!: string
  @Input({ required: true }) value: number = 0;
  @Output() panelClosed = new EventEmitter<string>();

  btnClick(){
    this.panelClosed.emit("btn clicked")
  }
}


function addText(text: string): string {

  return (`My ${text}`)

}