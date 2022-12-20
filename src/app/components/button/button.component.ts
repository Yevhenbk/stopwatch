import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    this.btnClick.emit();
  }
}
