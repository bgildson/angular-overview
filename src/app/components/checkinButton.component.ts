import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkin-button',
  template: `
    <button md-raised-button [color]="checkin ? 'primary' : 'accent'" (click)="toggleCheckin()">{{ checkin ? 'Cancelar Checkin' : 'Fazer Checkin' }}</button>
  `
})
export class CheckinButtonComponent {
  @Input() checkin: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  toggleCheckin() {
    this.toggle.next(!this.checkin);
  }
}
