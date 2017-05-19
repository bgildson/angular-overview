import { Component, Input } from '@angular/core';

import { ParticipanteModel } from '../models/participante.model';

@Component({
  selector: 'participantes',
  template: `
  <participante-card *ngFor="let participante of participantes" 
                     [participante]="participante"></participante-card>
  `
})
export class ParticipantesComponent {
  @Input() participantes: ParticipanteModel[];
}
