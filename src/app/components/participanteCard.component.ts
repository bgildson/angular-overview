import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ParticipanteModel } from '../models/participante.model';
import { ParticipanteService } from '../providers/participante.service';

@Component({
  selector: 'participante-card',
  template: `
    <md-card>
      <img class="card-foto" [src]="participante.foto" alt="foto do participante">
      <div>
        <p class="card-nome">{{ participante.nome }}</p>
        <p class="card-documento">{{ participante.documento }}</p>
      </div>
      <checkin-button [checkin]="participante.checkin" (toggle)="toggleCheckin($event)"></checkin-button>
    </md-card>
  `,
  styles: [`
    md-card {
      margin: 1px;
      display: flex;
    }
    md-card div {
      margin: 0 10px;
      flex-grow: 1;
    }
    md-card div p {
      margin: 4px 0;
    }
    .card-foto {
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }
    .card-nome {
      font-size: 18px;
      text-transform: uppercase;
    }
    .card-documento {
      font-size: 13px;
    }
  `]
})
export class ParticipanteCardComponent {
  @Input() participante: ParticipanteModel;

  constructor(private participanteService: ParticipanteService) { }

  toggleCheckin(checkin: boolean) {
    if(checkin) {
      this.participanteService.doCheckinById(this.participante.id);
    } else {
      this.participanteService.cancelCheckinById(this.participante.id);
    }
  }
}
