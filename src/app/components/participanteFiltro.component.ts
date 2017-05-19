import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'participante-filtro',
  template: `
    <md-input-container>
      <input type="text" mdInput placeholder="Filtro" [formControl]="filtro">
    </md-input-container>`,
  styles: [`
    md-input-container {
      width: 100%;
      font-size: 20px;
    }
  `]
})
export class ParticipanteFiltroComponent {
  @Output() changed: EventEmitter<any> = new EventEmitter();
  filtro: FormControl = new FormControl();

  ngOnInit() {
    this.filtro.valueChanges.debounceTime(500).subscribe((value: string) => {
      this.changed.next(value);
    });
  }
}
