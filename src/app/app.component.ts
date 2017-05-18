import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ParticipanteModel } from './models/participante.model';
import { ParticipanteService } from './providers/participante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _participantes: ParticipanteModel[];

  constructor(private _participanteService: ParticipanteService) { }

  ngOnInit() {
    this._participanteService.getAll().then((participantes: ParticipanteModel[]) => {
      this._participantes = participantes;
    });
  }

  filtrar(filtro: string) {
    this._participanteService.getByNomeDocumento(filtro).then((participantes: ParticipanteModel[]) => {
      this._participantes = participantes;
    });
  }
}
